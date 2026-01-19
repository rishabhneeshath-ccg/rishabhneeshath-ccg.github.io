import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Activity, Volume2, Mic, Settings } from 'lucide-react';

const HeroDevice = () => {
    const [lines, setLines] = React.useState([
        { text: "init portfolio --mode=brutalist", type: "command" },
        { text: "Compiling assets...", type: "output" },
        { text: "Optimizing core modules...", type: "output" },
    ]);

    // Jack State
    const [activeJacks, setActiveJacks] = React.useState([]);

    const toggleJack = (index) => {
        setActiveJacks(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    // Command Loop Logic
    React.useEffect(() => {
        const commands = [
            { text: "git push origin master", type: "command", delay: 800 },
            { text: "Delta compression using up to 12 threads", type: "output", delay: 400 },
            { text: "Compressing objects: 100% (4/4), done.", type: "output", delay: 400 },
            { text: "Writing objects: 100% (4/4), 1.2 KiB | 1.2 MiB/s, done.", type: "output", delay: 600 },
            { text: "npm run deploy", type: "command", delay: 1000 },
            { text: "Building production bundle...", type: "output", delay: 800 },
            { text: "√ Built in 2.4s", type: "output", delay: 400 },
            { text: "uploading to s3...", type: "output", delay: 600 },
            { text: "ssh user@neeshath.dev", type: "command", delay: 1200 },
            { text: "Authenticating public key...", type: "output", delay: 500 },
            { text: "Welcome to Ubuntu 24.04 LTS", type: "output", delay: 800 },
            { text: "./run-diagnostics.sh", type: "command", delay: 900 },
            { text: "Checking memory integrity... OK", type: "output", delay: 300 },
            { text: "Verifying audio buffers... OK", type: "output", delay: 300 },
        ];

        let currentIndex = 0;
        let timeoutId;

        const runLoop = () => {
            const item = commands[currentIndex];
            timeoutId = setTimeout(() => {
                setLines(prev => {
                    const newLines = [...prev, item];
                    if (newLines.length > 8) return newLines.slice(1); // Keep last 8 lines
                    return newLines;
                });

                currentIndex = (currentIndex + 1) % commands.length;
                runLoop();
            }, item.delay);
        };

        runLoop();
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-[#222] rounded-xl border border-[#444] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row">
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* SCREWS */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#111] border border-[#333] flex items-center justify-center"><div className="w-1.5 h-0.5 bg-[#444] rotate-45" /></div>
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#111] border border-[#333] flex items-center justify-center"><div className="w-1.5 h-0.5 bg-[#444] rotate-45" /></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-[#111] border border-[#333] flex items-center justify-center"><div className="w-1.5 h-0.5 bg-[#444] rotate-45" /></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#111] border border-[#333] flex items-center justify-center"><div className="w-1.5 h-0.5 bg-[#444] rotate-45" /></div>

            {/* LEFT: TERMINAL SCREEN */}
            <div className="flex-1 p-6 md:p-8 flex flex-col border-b md:border-b-0 md:border-r border-[#333] bg-black/90 relative overflow-hidden font-mono text-xs md:text-sm">

                {/* Header */}
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="ml-auto text-[10px] text-gray-500">BASH</span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-end gap-1">
                    {lines.map((line, i) => (
                        <div key={i} className={`${line.type === 'command' ? 'text-blue-400' : 'text-gray-400'}`}>
                            {line.type === 'command' && (
                                <span className="text-green-500 mr-2">user@sys:~$</span>
                            )}
                            {line.text}
                        </div>
                    ))}
                    {/* Cursor Line */}
                    <div className="flex items-center text-green-500">
                        <span className="mr-2">user@sys:~$</span>
                        <span className="w-2 h-4 bg-green-500 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* RIGHT: AUDIO INTERFACE */}
            <div className="w-full md:w-1/3 bg-[#151515] p-6 relative flex flex-col justify-between">
                {/* TOP: DISPLAY & METERS */}
                <div className="bg-[#0f0f0f] rounded border border-white/5 p-3 mb-4 flex flex-col h-24">
                    <div className="flex justify-between items-center mb-2 shrink-0">
                        <span className="text-[10px] uppercase font-mono text-accent">Master Out</span>
                        <Activity className="w-3 h-3 text-accent" />
                    </div>

                    {/* DYNAMIC EQ GRAPH */}
                    <div className="relative flex-1 w-full overflow-hidden bg-[#050505] rounded-sm border border-white/5">
                        {/* Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2">
                            <div className="border-r border-white/5" />
                            <div className="border-r border-white/5" />
                            <div className="border-r border-white/5" />
                            <div className="border-b border-white/5 col-span-4 row-start-2" />
                        </div>

                        {/* Animated Path 1 (Fill) */}
                        <motion.svg
                            className="absolute inset-0 w-full h-full opacity-30"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 100"
                        >
                            <motion.path
                                fill="currentColor"
                                className="text-accent"
                                initial={{ d: "M0,100 L0,50 L20,40 L40,60 L60,30 L80,70 L100,50 L100,100 Z" }}
                                animate={{
                                    d: [
                                        "M0,100 L0,80 L20,60 L40,70 L60,40 L80,60 L100,80 L100,100 Z",
                                        "M0,100 L0,40 L20,30 L40,80 L60,20 L80,90 L100,40 L100,100 Z",
                                        "M0,100 L0,60 L20,80 L40,40 L60,60 L80,30 L100,60 L100,100 Z",
                                        "M0,100 L0,80 L20,60 L40,70 L60,40 L80,60 L100,80 L100,100 Z"
                                    ]
                                }}
                                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.svg>

                        {/* Animated Path 2 (Line - High Frequency jitter) */}
                        <motion.svg
                            className="absolute inset-0 w-full h-full"
                            preserveAspectRatio="none"
                            viewBox="0 0 100 100"
                        >
                            <motion.path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="text-accent"
                                initial={{ d: "M0,50 L20,40 L40,60 L60,30 L80,70 L100,50" }}
                                animate={{
                                    d: [
                                        "M0,50 L10,40 L20,60 L30,30 L40,70 L50,40 L60,60 L70,20 L80,80 L90,40 L100,50",
                                        "M0,50 L10,60 L20,30 L30,70 L40,20 L50,80 L60,30 L70,60 L80,40 L90,70 L100,50",
                                        "M0,50 L10,30 L20,70 L30,40 L40,60 L50,30 L60,80 L70,40 L80,70 L90,20 L100,50"
                                    ]
                                }}
                                transition={{ duration: 0.2, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.svg>
                    </div>
                </div>

                {/* MIDDLE: KNOBS */}
                <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] relative flex items-center justify-center transform hover:rotate-45 transition-transform duration-300 cursor-pointer">
                                <div className="w-1 h-3 bg-white/20 absolute top-1 rounded-full" />
                            </div>
                            <span className="text-[9px] font-mono text-gray-500 uppercase">CH-{i}</span>
                        </div>
                    ))}
                </div>

                {/* BOTTOM: JACKS */}
                <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-4">
                    <div
                        onClick={() => toggleJack(0)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 cursor-pointer flex items-center justify-center ${activeJacks.includes(0) ? 'border-accent bg-accent/20 shadow-[0_0_15px_rgba(255,79,0,0.5)]' : 'border-[#333] bg-[#000] shadow-[inset_0_0_10px_rgba(0,0,0,1)] hover:border-[#555]'}`}
                    >
                        <div className={`w-4 h-4 rounded-full transition-colors duration-300 ${activeJacks.includes(0) ? 'bg-accent' : 'bg-[#111]'}`} />
                    </div>

                    <div
                        onClick={() => toggleJack(1)}
                        className={`w-8 h-8 rounded-full border-2 transition-all duration-300 cursor-pointer flex items-center justify-center ${activeJacks.includes(1) ? 'border-accent bg-accent/20 shadow-[0_0_15px_rgba(255,79,0,0.5)]' : 'border-[#333] bg-[#000] shadow-[inset_0_0_10px_rgba(0,0,0,1)] hover:border-[#555]'}`}
                    >
                        <div className={`w-4 h-4 rounded-full transition-colors duration-300 ${activeJacks.includes(1) ? 'bg-accent' : 'bg-[#111]'}`} />
                    </div>

                    <Mic className={`w-4 h-4 transition-colors duration-300 ${activeJacks.length > 0 ? 'text-accent' : 'text-gray-600'}`} />
                </div>
            </div>
        </div>
    );
};

export default HeroDevice;
