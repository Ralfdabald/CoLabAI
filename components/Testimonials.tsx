import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    content: "I was skeptical about AI validation, but CoLab correctly predicted our pivot before we even launched. Saved us 6 months of development on the wrong feature set.",
    author: "Sarah Jenkins",
    role: "CEO, FinFlow",
    rating: 5
  },
  {
    content: "The co-founder matching is scary accurate. I matched with a technical lead who had the exact domain expertise I was missing. We built our MVP in 3 weeks.",
    author: "James Chen",
    role: "Founder, SaaSy",
    rating: 5
  },
  {
    content: "As a solo non-technical founder, this platform is a superpower. The investor-ready assets feature generated a deck that got me meetings with tier-1 VCs.",
    author: "Elena Rodriguez",
    role: "CTO, HealthAI",
    rating: 5
  },
  {
    content: "The 30-day sprint structure kept us accountable. We went from 'just an idea' to $5k MRR in exactly 28 days. The roadmap generation is a game changer.",
    author: "Marcus Johnson",
    role: "Founder, RetailTech",
    rating: 5
  },
  {
    content: "I've been through YC and Techstars. CoLab's automated validation tools provide 80% of the value of an accelerator program for a fraction of the cost.",
    author: "David Park",
    role: "Serial Entrepreneur",
    rating: 5
  },
  {
    content: "Finally, a tool that focuses on revenue and customers instead of just vanity metrics. If you're serious about building a business, start here.",
    author: "Priya Patel",
    role: "Indie Hacker",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-dark-bg relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-300 text-sm font-semibold mb-4">
            Proven Results
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We don't just talk. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">
              We build innovators.
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            See how founders like you are using CoLab AI to bypass the failure statistics and build massive value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-dark-surface border border-white/5 hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-brand-500/20 mb-4" />
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-sm font-bold text-white border border-white/10">
                    {testimonial.author.charAt(0)}
                </div>
                <div>
                    <div className="text-sm font-bold text-white">{testimonial.author}</div>
                    <div className="text-xs text-brand-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};