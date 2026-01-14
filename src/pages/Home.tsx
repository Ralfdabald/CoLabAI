import { useState } from 'react';
import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { BackgroundEffects } from '../../components/ui/BackgroundEffects';
import { Pricing } from '../../components/Pricing';
import { WaitlistModal } from '../../components/ui/WaitlistModal';

export const Home = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <>
            <BackgroundEffects />

            <div className="relative z-10">
                <Header onOpenWaitlist={() => setIsWaitlistOpen(true)} />
                <main>
                    <Hero onOpenWaitlist={() => setIsWaitlistOpen(true)} />
                    <Features />
                    <Testimonials />
                    <Pricing onOpenWaitlist={() => setIsWaitlistOpen(true)} />
                    <CTA onOpenWaitlist={() => setIsWaitlistOpen(true)} />
                </main>
                <Footer />
            </div>

            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </>
    );
};
