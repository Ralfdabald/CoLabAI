import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for exploring validaton.",
        features: [
            "5 Validation Credits / mo",
            "Basic Market Analysis",
            "Community Access",
            "Public Roadmap"
        ],
        highlight: false
    },
    {
        name: "Founder",
        price: "$5",
        period: "/mo",
        description: "For serious builders.",
        features: [
            "50 Validation Credits / mo",
            "Deep Competitor Analysis",
            "Co-Founder Matching",
            "Investor-Ready Exports",
            "Private Roadmap"
        ],
        highlight: true,
        badge: "Most Popular"
    },
    {
        name: "Visionary",
        price: "$20",
        period: "/yr",
        description: "Unlimited power for serial entrepreneurs.",
        features: [
            "Unlimited Validation Credits",
            "Priority Co-Founder Matching",
            "1-on-1 Strategy Call",
            "API Access",
            "Early Access to New Features"
        ],
        highlight: false,
        badge: "Best Value"
    }
];

interface PricingProps {
    onOpenWaitlist: () => void;
}

export const Pricing = ({ onOpenWaitlist }: PricingProps) => {
    return (
        <section id="pricing" className="py-24 bg-dark-bg relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Simple Pricing for <br />
                        <span className="text-brand-400">Future Unicorns</span>
                    </h2>
                    <p className="text-lg text-gray-400">
                        Start for free, upgrade as you scale. No hidden fees.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <SpotlightCard
                            key={index}
                            className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${plan.highlight
                                    ? 'bg-zinc-900/80 border-brand-500/50 shadow-2xl shadow-brand-500/10'
                                    : 'bg-dark-surface border-white/5 hover:border-brand-500/30'
                                }`}
                        >
                            {plan.badge && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {plan.badge}
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    {plan.period && <span className="text-gray-400">{plan.period}</span>}
                                </div>
                                <p className="text-gray-400 text-sm">{plan.description}</p>
                            </div>

                            <div className="flex-1 mb-8">
                                <ul className="space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? 'text-brand-400' : 'text-zinc-600'}`} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                variant={plan.highlight ? 'primary' : 'secondary'}
                                className="w-full justify-center"
                                onClick={onOpenWaitlist}
                            >
                                {plan.price === 'Free' ? 'Start for Free' : 'Get Started'}
                            </Button>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
