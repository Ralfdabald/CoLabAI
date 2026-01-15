import React from 'react';
import { FolderHeart, MoreVertical, Layout, Rocket, LineChart, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

const PROJECTS = [
    {
        id: 1,
        name: "Uber for Tutors",
        score: 88,
        status: "Validated",
        lastEdited: "2 days ago",
        category: "Education",
        icon: Globe,
        color: "text-blue-400",
        bg: "bg-blue-500/10"
    },
    {
        id: 2,
        name: "Eco-Coffee Pods",
        score: 94,
        status: "Strategizing",
        lastEdited: "5 hours ago",
        category: "D2C",
        icon: Rocket,
        color: "text-brand-400",
        bg: "bg-brand-500/10"
    },
    {
        id: 3,
        name: "AI Lawyer Assistant",
        score: 72,
        status: "Market Research",
        lastEdited: "1 week ago",
        category: "LegalTech",
        icon: LineChart,
        color: "text-orange-400",
        bg: "bg-orange-500/10"
    }
];

export const SavedProjects = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">My Projects</h2>
                    <p className="text-zinc-400">Manage and track your business validations.</p>
                </div>
                <Button variant="primary" className="flex items-center gap-2">
                    <FolderHeart className="w-4 h-4" />
                    New Validation
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="bg-dark-surface border border-white/5 rounded-2xl p-6 hover:border-brand-500/30 transition-all flex flex-col group">
                        <div className="flex items-start justify-between mb-6">
                            <div className={`p-3 rounded-xl ${project.bg}`}>
                                <project.icon className={`w-6 h-6 ${project.color}`} />
                            </div>
                            <button className="p-2 text-zinc-500 hover:text-white transition-colors">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-400 transition-colors uppercase tracking-tight">{project.name}</h3>
                            <p className="text-sm text-zinc-500 mb-6">{project.category} • Edited {project.lastEdited}</p>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-zinc-400">Viability Score</span>
                                    <span className={`text-sm font-bold ${project.score >= 80 ? 'text-green-400' : 'text-orange-400'}`}>
                                        {project.score}/100
                                    </span>
                                </div>
                                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full transition-all duration-1000 ${project.score >= 80 ? 'bg-green-500' : 'bg-orange-500'}`}
                                        style={{ width: `${project.score}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-3">
                            <Button variant="secondary" className="py-2.5 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                Analytics
                            </Button>
                            <Button variant="primary" className="py-2.5 text-xs font-bold uppercase tracking-widest shadow-brand-500/10">
                                Open Plan
                            </Button>
                        </div>
                    </div>
                ))}

                {/* Create New Project Card Placeholder */}
                <button className="border-2 border-dashed border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border-brand-500/30 hover:bg-brand-500/5 transition-all text-zinc-500 hover:text-brand-400 min-h-[320px]">
                    <div className="p-4 rounded-full bg-white/5 flex items-center justify-center">
                        <Layout className="w-8 h-8" />
                    </div>
                    <span className="font-bold text-lg uppercase tracking-widest">Add New Project</span>
                </button>
            </div>
        </div>
    );
};
