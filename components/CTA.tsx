import React from 'react';
import { Button } from './ui/Button';
import { Rocket, Check } from 'lucide-react';

export const CTA = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Gradients specific to CTA */}
            <div className="absolute inset-0 bg-brand-900/10" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center p-6 sm:p-10 md:p-16 rounded-3xl bg-dark-surface border border-white/10 relative overflow-hidden group">

                    {/* Hover shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                    <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

                    <div className="relative z-10">
                        <Rocket className="w-12 h-12 text-brand-400 mx-auto mb-6" />

                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Ready to Build Your Empire?
                        </h2>

                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                            Stop dreaming about your business and start running it. Join the accelerator today and get your first customer in 30 days.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                            <a
                                href="/signup"
                                className="w-full sm:w-auto text-lg px-8 py-4 h-14 inline-flex items-center justify-center rounded-lg bg-brand-500 text-white font-bold hover:bg-brand-600 transition-colors"
                            >
                                Start Your 30-Day Sprint
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-brand-500" /> No equity taken
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-brand-500" /> Cancel anytime
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-brand-500" /> 100% Money-back guarantee
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};