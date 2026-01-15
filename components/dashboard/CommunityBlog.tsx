import React, { useState } from 'react';
import { MessageSquare, Heart, Share2, Users, Flame, Clock, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

const POSTS = [
    {
        id: 1,
        author: {
            name: "Sarah Chen",
            role: "SaaS Founder",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
        },
        project: "EcoTrack AI",
        content: "Just finished validating my supply chain tracking idea! Looking for a co-founder with supply chain experience to help with the 30-day build sprint.",
        likes: 24,
        comments: 12,
        tags: ["Eco-Tech", "Collaboration"],
        time: "2h ago",
        trending: true
    },
    {
        id: 2,
        author: {
            name: "Marcus Road",
            role: "Product Designer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
        },
        project: "SoloSync",
        content: "Working on a strategy for a decentralized task manager. Anyone interested in helping with the market analysis part?",
        likes: 18,
        comments: 5,
        tags: ["Web3", "Productivity"],
        time: "5h ago",
        trending: false
    },
    {
        id: 3,
        author: {
            name: "Elena Vance",
            role: "AI Engineer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
        },
        project: "MediScan AI",
        content: "Our validation results just came in - 92/100 viability score! We are moving to the Strategy stage tomorrow. Any advice on early stage VC outreach?",
        likes: 45,
        comments: 21,
        tags: ["Healthcare", "AI"],
        time: "1d ago",
        trending: true
    }
];

export const CommunityBlog = () => {
    const [filter, setFilter] = useState('trending');

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Community Feed</h2>
                    <p className="text-zinc-400">Share your progress and find collaborators.</p>
                </div>
                <div className="flex bg-dark-surface p-1 rounded-xl border border-white/5 self-start sm:self-auto">
                    <button
                        onClick={() => setFilter('trending')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${filter === 'trending' ? 'bg-brand-500 text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        <Flame className="w-4 h-4" />
                        Trending
                    </button>
                    <button
                        onClick={() => setFilter('latest')}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${filter === 'latest' ? 'bg-brand-500 text-white' : 'text-zinc-400 hover:text-white'}`}
                    >
                        <Clock className="w-4 h-4" />
                        Latest
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                {POSTS.map((post) => (
                    <div key={post.id} className="bg-dark-surface border border-white/5 rounded-2xl p-6 hover:border-brand-500/30 transition-all group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border border-zinc-700 bg-zinc-800" />
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-brand-400 transition-colors uppercase tracking-tight">{post.author.name}</h4>
                                    <p className="text-xs text-zinc-500">{post.author.role} • {post.time}</p>
                                </div>
                            </div>
                            {post.trending && (
                                <span className="bg-orange-500/10 text-orange-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
                                    <Flame className="w-3 h-3" />
                                    TRENDING
                                </span>
                            )}
                        </div>

                        <div className="mb-4">
                            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold mb-3">
                                <Sparkles className="w-3 h-3" />
                                {post.project}
                            </div>
                            <p className="text-zinc-300 leading-relaxed">{post.content}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.map((tag) => (
                                <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/5">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors">
                                    <Heart className="w-4 h-4" />
                                    <span className="text-xs font-semibold">{post.likes}</span>
                                </button>
                                <button className="flex items-center gap-2 text-zinc-400 hover:text-brand-400 transition-colors">
                                    <MessageSquare className="w-4 h-4" />
                                    <span className="text-xs font-semibold">{post.comments}</span>
                                </button>
                                <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                            <Button variant="secondary" className="px-4 py-2 text-xs flex items-center gap-2 shadow-lg">
                                <Users className="w-3 h-3" />
                                Collaborate
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <Button variant="primary" className="w-full py-6 text-lg rounded-2xl border-2 border-brand-400/20 hover:border-brand-400/50 shadow-brand-500/10 shadow-xl mt-8">
                <Sparkles className="w-5 h-5 mr-3" />
                Share Your Progress
            </Button>
        </div>
    );
};
