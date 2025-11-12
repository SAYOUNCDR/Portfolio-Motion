import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        try {
            const saved = localStorage.getItem('theme');
            if (saved === 'light' || saved === 'dark') return saved;
            return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        } catch {
            return 'dark';
        }
    });

    const setTheme = (t: Theme) => {
        setThemeState(t);
        try {
            localStorage.setItem('theme', t);
        } catch {
            // ignore
        }
    };

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        try {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        } catch {
            // ignore
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
};
