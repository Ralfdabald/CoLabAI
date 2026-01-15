import React from 'react';
import { LayoutDashboard, Lightbulb, Map, Settings, LogOut, Home as HomeIcon, Zap, Users, FolderHeart, CalendarDays, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../src/context/AuthContext';

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }: SidebarProps) => {
    const { signOut } = useAuth();

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'projects', label: 'Saved Projects', icon: FolderHeart },
        { id: 'planner', label: 'Business Planner', icon: CalendarDays },
        { id: 'validate', label: 'Validate Idea', icon: Lightbulb },
        { id: 'community', label: 'Community Feed', icon: Users },
        { id: 'roadmap', label: 'Roadmap', icon: Map },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <div className={`
                w-64 bg-dark-surface border-r border-white/5 flex flex-col h-screen fixed left-0 top-0 z-50 transition-transform duration-300 lg:translate-x-0
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-brand-500/10 rounded-lg">
                                <Zap className="w-6 h-6 text-brand-400" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">CoLab<span className="text-brand-400">AI</span></span>
                        </div>
                        <button onClick={onClose} className="lg:hidden p-2 text-zinc-400 hover:text-white">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <nav className="space-y-1 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setActiveTab(item.id);
                                    if (onClose) onClose();
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                    ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                                    : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium text-sm">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
                        <Link
                            to="/"
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-white transition-all"
                        >
                            <HomeIcon className="w-5 h-5" />
                            <span className="font-medium">Back to Home</span>
                        </Link>

                        <button
                            onClick={signOut}
                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="font-medium">Sign Out</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
