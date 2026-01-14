import React from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    user: any;
}

export const DashboardLayout = ({ children, activeTab, setActiveTab, user }: DashboardLayoutProps) => {
    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main className="pl-64">
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-dark-bg/80 backdrop-blur-md sticky top-0 z-10">
                    <h2 className="text-lg font-semibold capitalize">{activeTab.replace('-', ' ')}</h2>
                    <div className="flex items-center gap-3">
                        {user.user_metadata?.avatar_url && (
                            <img src={user.user_metadata.avatar_url} alt="Profile" className="w-8 h-8 rounded-full border border-zinc-700" />
                        )}
                        <span className="text-sm text-zinc-400">{user.user_metadata?.full_name || user.email}</span>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};
