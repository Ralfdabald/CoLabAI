import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Menu } from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    user: any;
}

export const DashboardLayout = ({ children, activeTab, setActiveTab, user }: DashboardLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-dark-bg text-white">
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            <main className="lg:pl-64 flex flex-col min-h-screen">
                <header className="h-16 border-b border-white/5 flex items-center justify-between px-4 sm:px-8 bg-dark-bg/80 backdrop-blur-md sticky top-0 z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-2 -ml-2 text-zinc-400 hover:text-white lg:hidden"
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <h2 className="text-lg font-semibold capitalize whitespace-nowrap overflow-hidden text-ellipsis">
                            {activeTab.replace('-', ' ')}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex flex-col items-end mr-1">
                            <span className="text-xs text-brand-400 font-bold tracking-wider">PRO MEMBER</span>
                        </div>
                        {user.user_metadata?.avatar_url ? (
                            <img src={user.user_metadata.avatar_url} alt="Profile" className="w-8 h-8 rounded-full border border-zinc-700" />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold text-xs">
                                {user.email?.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                </header>

                <div className="p-4 sm:p-8 flex-1 max-w-7xl w-full mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
};
