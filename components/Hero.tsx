import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight, PlayCircle, Trophy, Sparkles } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center relative z-10 max-w-5xl mx-auto">
          
          {/* Badge Hook */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold mb-8 backdrop-blur-sm hover:bg-brand-500/20 transition-colors cursor-default"
          >
            <Trophy className="w-3 h-3 text-yellow-400" />
            <span className="uppercase tracking-wider">New: 30-Day Validation Sprint</span>
          </motion.div>

          {/* Main Headline - The Hook */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Validate Your Startup & Get <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-emerald-500">
              Paying Customers in 30 Days
            </span>
          </motion.h1>

          {/* Value Prop - The Promise */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed"
          >
            Or we pay your setup costs. Stop building in the dark. Our AI engine analyzes market demand, builds your roadmap, and connects you with the exact team you need to launch a revenue-generating business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Start Your Sprint
            </Button>
            <Button variant="secondary" icon={<PlayCircle className="w-4 h-4" />}>
              See Success Stories
            </Button>
          </motion.div>

          {/* Flirtation with Logos/Credibility */}
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="mt-16 pt-8 border-t border-white/5 w-full"
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by founders backed by</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Simple text placeholders for logos to match style */}
               <span className="text-xl font-bold font-serif text-white">Sequoia</span>
               <span className="text-xl font-bold text-white tracking-tighter">Y Combinator</span>
               <span className="text-xl font-bold text-white italic">Techstars</span>
               <span className="text-xl font-bold text-white font-mono">a16z</span>
            </div>
          </motion.div>
        </div>

        {/* Floating Abstract UI Elements (Parallax) */}
        <div className="absolute inset-0 pointer-events-none select-none">
            {/* Left Card - Revenue Graph */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-1/4 left-[5%] md:left-[5%] w-64 p-4 bg-dark-surface/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl hidden xl:block"
            >
              <div className="flex items-center justify-between mb-3">
                 <span className="text-xs font-semibold text-gray-400">Monthly Revenue</span>
                 <span className="text-brand-400 text-xs font-bold">+124%</span>
              </div>
              <div className="flex items-end gap-1 h-32 w-full">
                {[20, 35, 30, 50, 45, 60, 55, 80, 75, 100].map((h, i) => (
                   <div key={i} className="flex-1 bg-brand-500/20 rounded-t-sm relative group">
                      <div className={`absolute bottom-0 left-0 right-0 bg-brand-500 rounded-t-sm transition-all duration-1000`} style={{ height: `${h}%` }}></div>
                   </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card - Validation Status */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-1/4 right-[5%] md:right-[5%] w-72 p-4 bg-dark-surface/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl hidden xl:block"
            >
               <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-brand-500 animate-pulse"></div>
                  <span className="text-xs text-white font-medium">Idea Validation Complete</span>
               </div>
               <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs">
                     <span className="text-gray-400">Market Demand</span>
                     <span className="text-brand-300">Very High</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full w-[92%] bg-brand-500"></div>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                     <span className="text-gray-400">Competition</span>
                     <span className="text-yellow-400">Moderate</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                     <div className="h-full w-[45%] bg-yellow-400"></div>
                  </div>
               </div>
               <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <span className="text-xs text-brand-400 font-bold tracking-wide">GO FOR LAUNCH</span>
               </div>
            </motion.div>
        </div>
      </div>
      
      {/* Light Beam texture at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-48 bg-gradient-to-t from-brand-500/10 via-brand-500/5 to-transparent blur-3xl pointer-events-none" />
    </section>
  );
};