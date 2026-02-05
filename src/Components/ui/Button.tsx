"use client";

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    icon?: React.ReactNode;
    href?: string;
    to?: string;
    className?: string;
    newTab?: boolean;
    variant?: "primary" | "outline";
}

export const Button = ({
    text,
    icon,
    href,
    to,
    className = "",
    disabled,
    newTab = true,
    variant = "primary",
    ...props
}: ButtonProps) => {
    const { theme } = useTheme();

    const baseStyles = "flex items-center gap-1 px-2 py-1 text-[10px] font-semibold rounded-md shadow transition-colors";

    const variants = {
        primary: theme === "dark"
            ? "bg-white text-black border border-neutral-200 hover:bg-neutral-100"
            : "bg-slate-900 text-white border border-slate-900 hover:bg-slate-800",
        outline: theme === "dark"
            ? "bg-transparent text-white border border-neutral-700 hover:bg-neutral-800"
            : "bg-transparent text-slate-900 border border-slate-300 hover:bg-slate-100",
    };

    const activeStyles = variants[variant];

    const disabledStyles = theme === "dark"
        ? "bg-neutral-800 text-neutral-500 border border-neutral-700 opacity-50 cursor-not-allowed"
        : "bg-slate-100 text-slate-400 border border-slate-200 opacity-50 cursor-not-allowed";

    const styles = `${baseStyles} ${disabled ? disabledStyles : activeStyles} ${className}`;

    if (href && !disabled) {
        return (
            <a
                href={href}
                target={newTab ? "_blank" : undefined}
                rel={newTab ? "noreferrer" : undefined}
                className={styles}
                {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>}
            >
                {icon}
                <span>{text}</span>
            </a>
        );
    }

    if (to && !disabled) {
        return (
            <Link
                to={to}
                className={styles}
                {...props as React.AnchorHTMLAttributes<HTMLAnchorElement>} // Link accepts anchor props mostly
            >
                {icon}
                <span>{text}</span>
            </Link>
        );
    }

    return (
        <button
            disabled={disabled}
            className={styles}
            {...props}
        >
            {icon}
            <span>{text}</span>
        </button>
    );
};
