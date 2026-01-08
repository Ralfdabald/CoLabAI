import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark-bg text-sm">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-500/20 flex items-center justify-center text-brand-400 font-bold text-xs">C</div>
            <span className="text-gray-300 font-semibold">CoLab AI</span>
        </div>
        
        <div className="flex gap-8 text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="text-gray-600">
            © 2026 CoLab AI Inc.
        </div>
      </div>
    </footer>
  );
};