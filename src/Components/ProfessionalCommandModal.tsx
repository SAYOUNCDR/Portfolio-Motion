import React, { useState, useRef } from "react";
import { Search, Rss, Type, Briefcase, Package, Award, FileText, CircleUser, Sun, Moon, Monitor } from "lucide-react";

interface MenuItem {
    icon: React.ReactNode;
    label: string;
    group: string;
    selected?: boolean;
}

export default function ProfessionalCommandModal(): React.ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const menuItems: MenuItem[] = [
        { icon: <div className="w-4 h-4 bg-gray-600 rounded" />, label: "Daifolio", group: "Menu" },
        { icon: <Rss className="w-4 h-4" />, label: "Blog", group: "Menu" },
        { icon: <div className="w-4 h-4 bg-blue-600 rounded" />, label: "Components", group: "Menu" }
    ];

    const portfolioItems: MenuItem[] = [
        { icon: <Type className="w-4 h-4" />, label: "About", group: "Daifolio" },
        { icon: <div className="w-4 h-4 bg-orange-600 rounded" />, label: "Tech Stack", group: "Daifolio" },
        { icon: <Briefcase className="w-4 h-4" />, label: "Experience", group: "Daifolio", selected: true },
        { icon: <Package className="w-4 h-4" />, label: "Projects", group: "Daifolio" },
        { icon: <Award className="w-4 h-4" />, label: "Honors & Awards", group: "Daifolio" },
        { icon: <FileText className="w-4 h-4" />, label: "Certifications", group: "Daifolio" },
        { icon: <CircleUser className="w-4 h-4" />, label: "Download vCard", group: "Daifolio" }
    ];

    const blogItems: MenuItem[] = [
        { icon: <FileText className="w-4 h-4" />, label: "Tips for Creating Beautiful Image Borders", group: "Blog" },
        { icon: <FileText className="w-4 h-4" />, label: "Two of My Projects Featured on OrcDev's YouTube Channel", group: "Blog" },
        { icon: <FileText className="w-4 h-4" />, label: "Manu Arora reviewed My Portfolio Website", group: "Blog" },
        { icon: <FileText className="w-4 h-4" />, label: "React Wheel Picker joins Vercel Open Source Program", group: "Blog" },
        { icon: <FileText className="w-4 h-4" />, label: "Grateful for the Feedback on My Portfolio Website", group: "Blog" },
        { icon: <FileText className="w-4 h-4" />, label: "Followed by @shadcn on X", group: "Blog" }
    ];

    const componentItems: MenuItem[] = [
        { icon: <div className="w-4 h-4 bg-blue-600 rounded" />, label: "Work Experience", group: "Components" },
        { icon: <div className="w-4 h-4 bg-blue-600 rounded" />, label: "React Wheel Picker", group: "Components" },
        { icon: <div className="w-4 h-4 bg-blue-600 rounded" />, label: "Theme Switcher", group: "Components" },
        { icon: <div className="w-4 h-4 bg-blue-600 rounded" />, label: "Writing Effect inspired by Apple", group: "Components" }
    ];

    const socialItems: MenuItem[] = [
        { icon: <img src="https://via.placeholder.com/16x16/0077b5/ffffff?text=in" className="w-4 h-4 rounded-sm" alt="LinkedIn" />, label: "LinkedIn", group: "Social Links" },
        { icon: <img src="https://via.placeholder.com/16x16/333/ffffff?text=gh" className="w-4 h-4 rounded-sm" alt="GitHub" />, label: "GitHub", group: "Social Links" },
        { icon: <img src="https://via.placeholder.com/16x16/000/ffffff?text=X" className="w-4 h-4 rounded-sm" alt="X" />, label: "X (Formerly Twitter)", group: "Social Links" }
    ];

    const themeItems: MenuItem[] = [
        { icon: <Sun className="w-4 h-4" />, label: "Light", group: "Theme" },
        { icon: <Moon className="w-4 h-4" />, label: "Dark", group: "Theme" },
        { icon: <Monitor className="w-4 h-4" />, label: "Auto", group: "Theme" }
    ];

    const allItems: MenuItem[] = [...menuItems, ...portfolioItems, ...blogItems, ...componentItems, ...socialItems, ...themeItems];

    const filteredItems: MenuItem[] = allItems.filter(item =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
    );

    const groupedItems: Record<string, MenuItem[]> = filteredItems.reduce((groups, item) => {
        if (!groups[item.group]) {
            groups[item.group] = [];
        }
        groups[item.group].push(item);
        return groups;
    }, {} as Record<string, MenuItem[]>);

    const handleItemClick = (item: MenuItem): void => {
        console.log(`Selected: ${item.label}`);
        setIsOpen(false);
    };

    const handleClose = (): void => {
        setIsOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
    };

    if (!isOpen) return <></>;

    // Custom CSS styles as CSS-in-JS
    const scrollbarStyles: React.CSSProperties = {
        scrollbarWidth: 'thin' as const,
        scrollbarColor: '#d1d5db transparent',
    };

    return (
        <>
            {/* Global styles for webkit browsers */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .modal-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .modal-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .modal-scrollbar::-webkit-scrollbar-thumb {
                    background: #d1d5db;
                    border-radius: 3px;
                }
                .dark .modal-scrollbar::-webkit-scrollbar-thumb {
                    background: #4b5563;
                }
                .modal-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #9ca3af;
                }
                .dark .modal-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b7280;
                }
                @media (prefers-color-scheme: dark) {
                    .modal-scrollbar {
                        scrollbar-color: #4b5563 transparent;
                    }
                }
                `
            }} />

            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                <div className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                    {/* Header with Search */}
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                        <Search className="w-4 h-4 text-gray-400" />
                        <input
                            ref={inputRef}
                            value={searchValue}
                            onChange={handleInputChange}
                            placeholder="Type a command or search..."
                            className="flex-1 bg-transparent text-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 outline-none font-mono"
                            autoFocus
                        />
                    </div>

                    {/* Content */}
                    <div
                        className="max-h-80 min-h-80 overflow-y-auto modal-scrollbar"
                        style={scrollbarStyles}
                    >
                        <div className="p-1">
                            {Object.entries(groupedItems).map(([groupName, items]) => (
                                <div key={groupName} className="mb-1">
                                    {/* Group Header */}
                                    <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                        {groupName}
                                    </div>

                                    {/* Group Items */}
                                    <div className="space-y-0.5">
                                        {items.map((item, index) => (
                                            <div
                                                key={`${groupName}-${index}`}
                                                className={`flex items-center gap-3 px-3 py-2 mx-1 rounded-xl text-sm cursor-pointer transition-all duration-150 ${item.selected
                                                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                    }`}
                                                onClick={() => handleItemClick(item)}
                                            >
                                                <div className="text-gray-500 dark:text-gray-400">
                                                    {item.icon}
                                                </div>
                                                <span className="flex-1 truncate">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Separator */}
                                    {Object.keys(groupedItems).indexOf(groupName) < Object.keys(groupedItems).length - 1 && (
                                        <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 mx-1" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 text-xs">
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                            <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center">
                                <div className="w-3 h-3 bg-gray-600 dark:bg-gray-300 rounded-sm" />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <span>Go to Page</span>
                                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">↵</kbd>
                            </div>
                            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
                            <div className="flex items-center gap-1">
                                <span>Exit</span>
                                <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-mono">Esc</kbd>
                            </div>
                        </div>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}