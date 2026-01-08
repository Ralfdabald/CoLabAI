import React from 'react';
import { SpotlightCard } from './ui/SpotlightCard';
import { Target, Users, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Market Validation Engine",
    subtitle: "Don't build what nobody wants.",
    description: "Our AI scans 50,000+ market signals, reddit threads, and search trends to validate your problem-solution fit before you write a single line of code.",
    icon: Target,
    outcome: "Save 6 months of dev time"
  },
  {
    title: "The Co-Founder Network",
    subtitle: "Never build alone.",
    description: "Access our vetted network of 5,000+ technical, design, and marketing co-founders who are actively looking for verified projects to join.",
    icon: Users,
    outcome: "Team built in 48 hours"
  },
  {
    title: "Investor-Ready Assets",
    subtitle: "Fundraising on autopilot.",
    description: "Automatically generate pitch decks, financial models, and executive summaries that are formatted exactly how VCs want to see them.",
    icon: Zap,
    outcome: "3x Higher funding success"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 relative z-10 bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Price is what you pay. <br/>
            <span className="text-brand-400">Value is what you get.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Most founders spend $50k+ and 12 months just to find out their idea won't work. 
            We give you the answer in weeks for a fraction of the cost.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard key={index} className="group min-h-[350px] flex flex-col justify-between hover:border-brand-500/30 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 group-hover:scale-105 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm font-semibold text-brand-300 mb-4 uppercase tracking-wide">
                  {feature.subtitle}
                </p>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
              
              <div className="mt-8 pt-4 border-t border-white/5">
                 <div className="flex items-center gap-2 text-brand-200 bg-brand-500/5 px-3 py-2 rounded-lg border border-brand-500/10">
                    <CheckCircle2 className="w-4 h-4 text-brand-500" />
                    <span className="text-xs font-bold">{feature.outcome}</span>
                 </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};