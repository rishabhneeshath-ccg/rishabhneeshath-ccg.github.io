import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Music, Mic2, Cpu, Zap } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
    const [bootLines, setBootLines] = useState([]);

    const bootSequence = [
        "EXIT LIGHT",
        "ENTER NIGHT",
        "TAKE MY HAND",
        "OFF TO NEVER-NEVER LAND..."
    ];

    useEffect(() => {
        let delay = 0;
        bootSequence.forEach((line, index) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                setBootLines(prev => [...prev, line]);
                if (index === bootSequence.length - 1) {
                    setTimeout(onComplete, 800);
                }
            }, delay);
        });
    }, []);

    return (
        <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center font-mono text-accent p-8"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="w-full max-w-md">
                <div className="flex justify-between items-end border-b border-accent/30 pb-2 mb-4">
                    <span className="text-xs uppercase tracking-widest">Bootloader v2.0</span>
                    <div className="flex gap-2">
                        <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 0.5 }}>
                            <Cpu className="w-4 h-4" />
                        </motion.div>
                        <Music className="w-4 h-4" />
                        <Zap className="w-4 h-4" />
                    </div>
                </div>

                <div className="h-64 overflow-hidden relative">
                    {bootLines.map((line, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-1 text-sm md:text-base text-accent/80"
                        >
                            <span className="opacity-50 mr-2">{`>`}</span> {line}
                        </motion.div>
                    ))}
                    <motion.div
                        className="w-2 h-4 bg-accent mt-1 inline-block"
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                    />
                </div>

                <motion.div
                    className="w-full bg-accent/20 h-1 mt-4"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2.5, ease: "circIn" }}
                >
                    <div className="h-full bg-accent shadow-[0_0_10px_#FF4F00]" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
