import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Palette } from 'lucide-react';

const LandingSplit = () => {
    const navigate = useNavigate();
    const [hoveredSide, setHoveredSide] = useState(null);

    // Animation variants
    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.8 } },
    };

    const splitVariants = {
        initial: { width: '50%' },
        hover: (side) => ({
            width: hoveredSide === side ? '60%' : hoveredSide ? '40%' : '50%',
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        }),
    };

    return (
        <motion.div
            className="h-screen w-full flex flex-col md:flex-row bg-background overflow-hidden relative"
            variants={containerVariants}
            initial="initial"
            animate="animate"
        >
            {/* Absolute Center Divider (Visual) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-20 hidden md:block" />

            {/* LEFT: ENGINEERING */}
            <motion.div
                className="relative h-1/2 md:h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 group cursor-pointer"
                variants={splitVariants}
                custom="engineer"
                animate="hover"
                onMouseEnter={() => setHoveredSide('engineer')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => navigate('/engineer')}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" />

                <div className="relative z-30 flex flex-col items-center text-center p-8">
                    <Code className="w-12 h-12 mb-4 text-white/50 group-hover:text-accent transition-colors duration-300" />
                    <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter mb-2 group-hover:translate-y-[-5px] transition-transform duration-300">
                        ENGINEER
                    </h2>
                    <p className="font-sans text-sm md:text-base text-gray-400 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Systems. Architecture. Low-level.
                    </p>
                    <motion.div
                        className="mt-6 flex items-center gap-2 text-accent font-mono text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                    >
                        Config <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </div>
            </motion.div>

            {/* RIGHT: CREATIVE */}
            <motion.div
                className="relative h-1/2 md:h-full flex items-center justify-center group cursor-pointer"
                variants={splitVariants}
                custom="creative"
                animate="hover"
                onMouseEnter={() => setHoveredSide('creative')}
                onMouseLeave={() => setHoveredSide(null)}
                onClick={() => navigate('/creator')}
            >
                <div className="absolute inset-0 bg-gradient-to-bl from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700" />

                <div className="relative z-30 flex flex-col items-center text-center p-8">
                    <Palette className="w-12 h-12 mb-4 text-white/50 group-hover:text-accent transition-colors duration-300" />
                    <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter mb-2 group-hover:translate-y-[-5px] transition-transform duration-300">
                        CREATOR
                    </h2>
                    <p className="font-sans text-sm md:text-base text-gray-400 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Visuals. Audio. Expression.
                    </p>
                    <motion.div
                        className="mt-6 flex items-center gap-2 text-accent font-mono text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"
                    >
                        Explore <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LandingSplit;
