import React from 'react';
import { LayoutDashboard, Lightbulb, Map, Settings, LogOut, Home as HomeIcon, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../src/context/AuthContext';

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
    const { signOut } = useAuth();

    const menuItems = [
        { id: 'overview', label: 'Overview', icon: LayoutDashboard },
        { id: 'validate', label: 'Validate Idea', icon: Lightbulb },
        { id: 'roadmap', label: 'Roadmap', icon: Map },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-dark-surface border-r border-white/5 flex flex-col h-screen fixed left-0 top-0">
            <div className="p-6">
                <div className="flex items-center gap-2 mb-8">
                    <div className="p-2 bg-brand-500/10 rounded-lg">
                        <Zap className="w-6 h-6 text-brand-400" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">CoLab<span className="text-brand-400">AI</span></span>
                </div>

                <nav className="space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id
                                ? 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
                                : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-6 border-t border-white/5 space-y-2">
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
    );
};
