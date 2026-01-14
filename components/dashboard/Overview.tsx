import React from 'react';
import { Clock, CheckCircle, TrendingUp } from 'lucide-react';

export const Overview = () => {
    return (
        <div className="space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Active Projects', value: '1', icon: Clock, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                    { label: 'Ideas Validated', value: '3', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10' },
                    { label: 'Engagement', value: '+12%', icon: TrendingUp, color: 'text-brand-400', bg: 'bg-brand-500/10' },
                ].map((stat, i) => (
                    <div key={i} className="bg-dark-surface border border-white/5 p-6 rounded-2xl">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`${stat.bg} p-3 rounded-xl`}>
                                <stat.icon className={`w-6 h-6 ${stat.color}`} />
                            </div>
                            <span className="text-xs font-medium bg-white/5 px-2 py-1 rounded-full text-zinc-400">Last 30 days</span>
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-zinc-500 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-dark-surface border border-white/5 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
                <div className="space-y-4">
                    {[
                        { action: 'Created new project', project: 'SaaS Analytics', time: '2 hours ago' },
                        { action: 'Ran validator', project: 'E-commerce Plugin', time: 'Yesterday' },
                        { action: 'Updated roadmap', project: 'Mobile App', time: '3 days ago' },
                    ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 hover:bg-white/5 rounded-xl transition-colors border border-transparent hover:border-white/5">
                            <div className="w-2 h-2 rounded-full bg-brand-400"></div>
                            <div className="flex-1">
                                <p className="text-white font-medium">{activity.action}</p>
                                <p className="text-sm text-zinc-500">{activity.project}</p>
                            </div>
                            <span className="text-sm text-zinc-600">{activity.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
