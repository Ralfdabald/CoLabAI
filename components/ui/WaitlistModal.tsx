import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface WaitlistModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            setTimeout(() => {
                onClose();
                setSubmitted(false);
                setEmail('');
            }, 2000);
        }, 800);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-blue-500" />

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-1 text-zinc-500 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="p-8">
                            {!submitted ? (
                                <>
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h2>
                                        <p className="text-zinc-400">Get early access to CoLab AI and start validating your ideas instantly.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="founder@startup.com"
                                                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 placeholder:text-zinc-600"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                                        >
                                            <span>Join Now</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </button>

                                        <p className="text-xs text-center text-zinc-500 mt-4">
                                            Limited spots available for the beta.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                <div className="flex flex-col items-center text-center py-8">
                                    <div className="w-16 h-16 bg-brand-500/10 rounded-full flex items-center justify-center text-brand-500 mb-4">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                                    <p className="text-zinc-400">We'll be in touch shortly.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
