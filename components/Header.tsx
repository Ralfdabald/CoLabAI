import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Zap } from 'lucide-react';

interface HeaderProps {
  onOpenWaitlist: () => void;
}

export const Header = ({ onOpenWaitlist }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-2 bg-brand-500/10 rounded-lg group-hover:bg-brand-500/20 transition-colors">
            <Zap className="w-6 h-6 text-brand-400" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">CoLab<span className="text-brand-400">AI</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Features', 'Testimonials', 'Pricing'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-400 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={onOpenWaitlist} className="hidden sm:block text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Log in
          </button>
          <Button variant="primary" onClick={onOpenWaitlist}>Get Started</Button>
        </div>
      </div>
    </header>
  );
};