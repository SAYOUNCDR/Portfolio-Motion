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
        const bestLang = todayData.languages?.[0];
        const bestProject = todayData.projects?.[0]; // might be empty if not tracked or user setting

        let isOnline = false;
        if (userData.data && userData.data.last_heartbeat_at) {
            const lastHeartbeat = new Date(userData.data.last_heartbeat_at);
            const now = new Date();
            const diffInMinutes = (now.getTime() - lastHeartbeat.getTime()) / 1000 / 60;
            // If active in the last 15 minutes, consider online
            if (diffInMinutes < 15) {
                isOnline = true;
            }
        }

        // Return normalized data
        res.status(200).json({
            secondsToday: todayData.grand_total.total_seconds,
            textToday: todayData.grand_total.text,
            topLanguage: bestLang ? { name: bestLang.name, percent: bestLang.percent } : null,
            topProject: bestProject ? bestProject.name : 'Secret Project',
            isOnline
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
