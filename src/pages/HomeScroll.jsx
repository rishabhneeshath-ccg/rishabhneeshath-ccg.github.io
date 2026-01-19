import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import HeroDevice from '../components/HeroDevice';
import Footer from '../components/Footer';
import EngineerPage from './EngineerPage';
import CreatorPage from './CreatorPage';

const HomeScroll = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth scroll progress
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Hero Animations
    const deviceOpacity = useTransform(smoothProgress, [0, 0.4], [1, 0]);
    const textParallax = useTransform(smoothProgress, [0, 0.4], [0, -50]); // Subtle parallax

    // Ensure we start at the top
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div ref={containerRef} className="bg-background min-h-screen relative text-white selection:bg-accent selection:text-white">

            {/* NAVIGATOR (Top Left) */}
            <div className="fixed top-8 left-8 z-50 mix-blend-mode-difference text-white">
                <button className="hover:text-accent transition-colors cursor-pointer">
                    {/* Custom Creeper Icon */}
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M8 8h3v3H8zM13 8h3v3h-3z" fill="currentColor" stroke="none" />
                        <path d="M10 11h4v2h2v4h-2v-2h-4v2H8v-4h2z" fill="currentColor" stroke="none" />
                    </svg>
                </button>
            </div>

            {/* HEADER TEXT (Positioned after mid-point) */}
            <div className="absolute top-8 left-[60%] z-50 text-left font-sans text-lg md:text-xl font-bold text-[#888] leading-tight select-none hidden md:block group cursor-default">
                <p>
                    <span className="transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Exploring </span>
                    <span className="transition-colors duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_15px_rgba(255,79,0,0.8)]">tech.</span>
                </p>
                <p>
                    <span className="transition-colors duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Solving </span>
                    <span className="transition-colors duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_15px_rgba(255,79,0,0.8)]">problems.</span>
                </p>
            </div>

            {/* 1. HERO SECTION */}
            <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden z-10 px-2 lg:px-4">

                {/* MASSIVE TYPOGRAPHY */}
                <div className="absolute inset-0 z-0 pointer-events-none select-none flex flex-col justify-end items-center pb-0">
                    <motion.div
                        style={{ y: textParallax }}
                        className="flex flex-col items-start leading-[0.80]"
                    >
                        {/* Adjusted size to 21.5vw - calculated to fit "neeshath" just inside screen width */}
                        <h1 className="text-[21.5vw] font-black font-sans tracking-tight text-[#e5e5e5] lowercase z-10 translate-y-[2vw]">
                            <span className="text-accent">r</span>ishabh
                        </h1>
                        <h1 className="text-[21.5vw] font-black font-sans tracking-tight text-[#e5e5e5] lowercase z-0">
                            <span className="text-accent">n</span>eeshath
                        </h1>
                    </motion.div>
                </div>

                {/* The Device (Centered, Original Size, Not Cropped) */}
                <motion.div
                    style={{ opacity: deviceOpacity }}
                    className="relative z-20 shadow-2xl w-full max-w-[90vw] md:max-w-4xl lg:max-w-5xl aspect-video flex items-center justify-center"
                >
                    <HeroDevice />
                </motion.div>

            </section>

            {/* Spacer */}
            <div className="h-[50vh]" />

            {/* 2. ENGINEER SECTION */}
            <div className="relative z-30 bg-background border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <EngineerPage />
            </div>

            {/* 3. CREATOR SECTION */}
            <div className="relative z-30 bg-[#151515] border-t border-white/10">
                <CreatorPage />
            </div>

            {/* 4. FOOTER */}
            <div className="relative z-30">
                <Footer />
            </div>

        </div>
    );
};

export default HomeScroll;
