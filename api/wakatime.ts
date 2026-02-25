import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const { WAKATIME_API_KEY } = process.env;

    if (!WAKATIME_API_KEY) {
        return res.status(500).json({ error: 'WAKATIME_API_KEY not found' });
    }

    try {
        // parallel fetch
        const [statsRes, statusBarRes, userRes] = await Promise.all([
            fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
                headers: { Authorization: `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}` }
            }),
            fetch('https://wakatime.com/api/v1/users/current/status_bar/today', {
                headers: { Authorization: `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}` }
            }),
            fetch('https://wakatime.com/api/v1/users/current', {
                headers: { Authorization: `Basic ${Buffer.from(WAKATIME_API_KEY).toString('base64')}` }
            })
        ]);

        const stats = await statsRes.json();
        const statusBar = await statusBarRes.json();
        const userData = await userRes.json();

        if (stats.error || statusBar.error) {
            return res.status(502).json({ error: 'Failed to fetch from WakaTime' });
        }

        const todayData = statusBar.data; // has grand_total (text, digital, etc) & languages
        const topLanguages = todayData.languages?.slice(0, 3).map((l: any) => ({
            name: l.name,
            percent: l.percent,
            text: l.text || ''
        })) || [];
        const bestLang = topLanguages[0];
        const bestProject = todayData.projects?.[0]; // might be empty if not tracked or user setting
        const bestEditor = todayData.editors?.[0];

        let isOnline = false;
        let lastActiveString = "Offline";

        if (userData.data && userData.data.last_heartbeat_at) {
            const lastHeartbeat = new Date(userData.data.last_heartbeat_at);
            const now = new Date();
            const diffInMinutes = (now.getTime() - lastHeartbeat.getTime()) / 1000 / 60;
            const diffInHours = diffInMinutes / 60;

            if (diffInMinutes < 15) {
                isOnline = true;
                if (bestProject) {
                    lastActiveString = `Working on ${bestProject.name} for ${bestProject.text || todayData.grand_total.text}`;
                } else {
                    lastActiveString = `Working for ${todayData.grand_total.text} today`;
                }
            } else {
                // If it's today vs yesterday
                const today = new Date();
                const isToday = lastHeartbeat.getDate() === today.getDate() &&
                    lastHeartbeat.getMonth() === today.getMonth() &&
                    lastHeartbeat.getFullYear() === today.getFullYear();

                if (isToday) {
                    lastActiveString = `Worked today for ${todayData.grand_total.text}`;
                } else if (diffInHours < 24) {
                    lastActiveString = `Last active ${Math.floor(diffInHours)} hrs ago`;
                } else {
                    lastActiveString = `Last active yesterday or earlier`;
                }
            }
        }

        // Return normalized data
        res.status(200).json({
            secondsToday: todayData.grand_total.total_seconds,
            textToday: todayData.grand_total.text,
            topLanguage: bestLang ? { name: bestLang.name, percent: bestLang.percent } : null,
            topLanguages: topLanguages,
            topProject: bestProject ? bestProject.name : 'Secret Project',
            topEditor: bestEditor ? bestEditor.name : null,
            isOnline,
            lastActiveString
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
