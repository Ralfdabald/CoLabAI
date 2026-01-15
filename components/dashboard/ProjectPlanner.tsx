import React, { useState } from 'react';
import { Target, Users, Megaphone, ShieldCheck, ArrowRight, CheckCircle2, Circle, Save } from 'lucide-react';
import { Button } from '../ui/Button';

const STEPS = [
    { title: "Ideation", icon: Target, description: "Define your core value prop and target audience." },
    { title: "Market Fit", icon: Users, description: "Analyze competitors and market demand." },
    { title: "Marketing", icon: Megaphone, description: "Build your go-to-market strategy." },
    { title: "Launch", icon: ShieldCheck, description: "Prepare for your 30-day build sprint." }
];

export const ProjectPlanner = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Strategy Planner</h2>
                    <p className="text-zinc-400">Map out your business execution roadmap.</p>
                </div>
                <Button variant="secondary" className="flex items-center gap-2 border-white/10">
                    <Save className="w-4 h-4" />
                    Save Draft
                </Button>
            </div>

            {/* Stepper */}
            <div className="bg-dark-surface border border-white/5 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative">
                    {/* Progress Line (Desktop) */}
                    <div className="hidden md:block absolute top-7 left-10 right-10 h-0.5 bg-white/5 z-0">
                        <div
                            className="h-full bg-brand-500 transition-all duration-500"
                            style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                        />
                    </div>

                    {STEPS.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentStep(index)}
                            className="flex md:flex-col items-center gap-4 md:text-center relative z-10 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 ${currentStep === index
                                    ? 'bg-brand-500 border-brand-400 text-white shadow-lg shadow-brand-500/20'
                                    : currentStep > index
                                        ? 'bg-brand-500/20 border-brand-500/30 text-brand-400'
                                        : 'bg-zinc-800 border-zinc-700 text-zinc-500 group-hover:border-zinc-500'
                                }`}>
                                {currentStep > index ? <CheckCircle2 className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                            </div>
                            <div className="flex-1 md:mt-4">
                                <p className={`font-bold text-sm tracking-widest uppercase transition-colors ${currentStep === index ? 'text-white' : 'text-zinc-500'}`}>
                                    {step.title}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-dark-surface border border-white/5 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-500" />

                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        {React.createElement(STEPS[currentStep].icon, { className: "w-6 h-6 text-brand-400" })}
                        {STEPS[currentStep].title} Strategy
                    </h3>
                    <p className="text-zinc-400">{STEPS[currentStep].description}</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <label className="block text-sm font-bold text-zinc-500 uppercase tracking-widest">Crucial Milestones</label>
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-xl p-4 group hover:border-brand-500/30 transition-all cursor-pointer">
                                <Circle className="w-5 h-5 text-zinc-600 group-hover:text-brand-400" />
                                <span className="text-zinc-300">Strategy milestone {currentStep + 1}.{i} description goes here...</span>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <label className="block text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Strategic Notes</label>
                        <textarea
                            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 h-32 resize-none placeholder:text-zinc-600"
                            placeholder="Draft your thoughts for this business stage..."
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/5">
                    <button
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        className={`text-zinc-400 hover:text-white font-bold text-sm transition-colors uppercase tracking-widest ${currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                        Back
                    </button>
                    <Button
                        onClick={() => setCurrentStep(Math.min(STEPS.length - 1, currentStep + 1))}
                        className="flex items-center gap-2 group shadow-xl"
                    >
                        {currentStep === STEPS.length - 1 ? 'Complete Plan' : 'Next Step'}
                        <ArrowRight className={`w-4 h-4 transition-transform ${currentStep === STEPS.length - 1 ? '' : 'group-hover:translate-x-1'}`} />
                    </Button>
                </div>
            </div>
        </div>
    );
};
