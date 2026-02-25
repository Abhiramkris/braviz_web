import React from 'react';
import Hero from '../components/Hero';
import TrustFeatures from '../components/TrustFeatures';
import Industries from '../components/Industries';
import OurCommitment from '../components/OurCommitment';
import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <main className="relative min-h-screen bg-slate-50 overflow-hidden w-full flex flex-col pt-20">
            {/* Background Video Integration (Light Mode) */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-15 overflow-hidden mix-blend-multiply">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full scale-105"
                >
                    <source src="/assets/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* White gradient overlay to soften the video completely into the background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white/80 to-slate-50 z-10" />
            </div>

            {/* Light Mode Specific Gradients */}
            {/* Smooth gradient on top right using #263985 */}
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[70%] rounded-full bg-[#263985]/10 blur-[120px] z-10 pointer-events-none" />
            {/* Subtle gradient accent with #3A968F */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-[#3A968F]/15 blur-[120px] z-10 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-20 flex-grow flex flex-col items-start w-full gap-24">
                <Hero />
                <TrustFeatures />
                <Industries />
                <OurCommitment />
            </div>
        </main>
    );
};

export default LandingPage;
