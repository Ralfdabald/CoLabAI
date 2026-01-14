import { Header } from '../../components/Header';
import { Hero } from '../../components/Hero';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';
import { BackgroundEffects } from '../../components/ui/BackgroundEffects';
import { Pricing } from '../../components/Pricing';

export const Home = () => {
    // No waitlist state needed anymore
    const noOp = () => { };

    return (
        <>
            <BackgroundEffects />

            <div className="relative z-10">
                <Header onOpenWaitlist={noOp} />
                <main>
                    <Hero onOpenWaitlist={noOp} />
                    <Features />
                    <Testimonials />
                    <Pricing onOpenWaitlist={noOp} />
                    <CTA />
                </main>
                <Footer />
            </div>
        </>
    );
};
