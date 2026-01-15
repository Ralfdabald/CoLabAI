import { Clock, CheckCircle, TrendingUp, Zap, ArrowRight, BarChart3, PieChart, Activity, Users } from 'lucide-react';
import { Button } from '../ui/Button';

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

            {/* Dashboard Visuals & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Activity Chart Card */}
                <div className="bg-dark-surface border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col group">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Activity className="w-5 h-5 text-brand-400" />
                                Growth Potential
                            </h3>
                            <p className="text-sm text-zinc-500 mt-1">Simulated market impact over time</p>
                        </div>
                        <div className="p-2 bg-white/5 rounded-lg">
                            <BarChart3 className="w-5 h-5 text-zinc-400 group-hover:text-brand-400 transition-colors" />
                        </div>
                    </div>

                    <div className="flex-1 min-h-[200px] flex items-end gap-2 px-2 pb-4">
                        {[40, 65, 55, 85, 75, 95, 80, 100, 90, 100, 100, 100].map((h, i) => (
                            <div key={i} className="flex-1 bg-brand-500/10 rounded-t-lg relative group/bar overflow-hidden">
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-brand-500 transition-all duration-1000 ease-out"
                                    style={{ height: `${h}%` }}
                                />
                                {/* Hover tooltip concept */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 bg-zinc-900 border border-white/10 text-white text-[10px] font-bold py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                    {h}%
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[10px] font-bold text-zinc-600 uppercase tracking-widest px-2">
                        <span>JAN</span>
                        <span>MAR</span>
                        <span>MAY</span>
                        <span>JUL</span>
                        <span>SEP</span>
                        <span>DEC</span>
                    </div>
                </div>

                {/* Quick Actions & Tips */}
                <div className="space-y-6">
                    <div className="bg-dark-surface border border-brand-500/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl transition-all duration-500 group-hover:bg-brand-500/20" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-brand-500 rounded-lg">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Daily Tip</h3>
                            </div>
                            <p className="text-zinc-400 leading-relaxed mb-8">
                                AI-driven analysis shows that focusing on <span className="text-brand-300 font-semibold underline decoration-brand-500/50">niche communities</span> increases product-market fit speed by 34%.
                            </p>
                            <Button variant="primary" className="w-full flex items-center justify-center gap-2 shadow-lg shadow-brand-500/10">
                                Apply Strategy <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-dark-surface border border-white/5 p-4 rounded-xl hover:border-brand-500/30 transition-all flex flex-col items-center gap-3 group">
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-500/10 transition-colors">
                                <PieChart className="w-5 h-5 text-zinc-400 group-hover:text-brand-400" />
                            </div>
                            <span className="text-xs font-bold text-zinc-500 group-hover:text-white uppercase tracking-widest">Market Repo</span>
                        </button>
                        <button className="bg-dark-surface border border-white/5 p-4 rounded-xl hover:border-brand-500/30 transition-all flex flex-col items-center gap-3 group">
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-brand-500/10 transition-colors">
                                <Users className="w-5 h-5 text-zinc-400 group-hover:text-brand-400" />
                            </div>
                            <span className="text-xs font-bold text-zinc-500 group-hover:text-white uppercase tracking-widest">Search Peers</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-dark-surface border border-white/5 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                    <button className="text-sm text-brand-400 hover:text-brand-300 font-semibold">View All</button>
                </div>
                <div className="space-y-4">
                    {[
                        { action: 'Created new project', project: 'SaaS Analytics', time: '2 hours ago', icon: '✨' },
                        { action: 'Ran validator', project: 'E-commerce Plugin', time: 'Yesterday', icon: '🔍' },
                        { action: 'Updated roadmap', project: 'Mobile App', time: '3 days ago', icon: '📋' },
                    ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 hover:bg-brand-500/5 rounded-xl transition-all border border-transparent hover:border-brand-500/20 group">
                            <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-lg">{activity.icon}</div>
                            <div className="flex-1">
                                <p className="text-white font-bold group-hover:text-brand-400 transition-colors">{activity.action}</p>
                                <p className="text-sm text-zinc-500">{activity.project}</p>
                            </div>
                            <span className="text-sm text-zinc-600 font-medium">{activity.time}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
