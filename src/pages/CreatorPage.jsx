import React from 'react';
import { ArrowLeft, Music, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const CreatorPage = () => {
    return (
        <div className="min-h-screen bg-[#1a1a1a] text-gray-200">
            {/* Header */}
            <header className="sticky top-0 bg-[#1a1a1a]/90 backdrop-blur-md z-40 border-b border-white/5">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors text-white/60">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-mono text-sm uppercase tracking-wide">Back</span>
                    </Link>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-12">
                {/* Intro */}
                <div className="mb-24 text-center">
                    <span className="font-mono text-accent text-xs tracking-[0.3em] uppercase mb-4 block">Experimental Frequency</span>
                    <h1 className="text-5xl md:text-8xl font-bold font-serif italic text-white mb-6">
                        The Creator
                    </h1>
                    <p className="max-w-md mx-auto text-lg text-gray-400 font-light">
                        Capturing moments in time. Synthesis of sound and vision.
                    </p>
                </div>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                    <div className="aspect-square bg-neutral-800 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop" alt="Music" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <Music className="w-6 h-6 text-white mb-2" />
                            <h3 className="text-xl font-bold text-white">Sonic Landscapes</h3>
                            <p className="text-sm text-gray-300">Ambient / Drone Experiments</p>
                        </div>
                    </div>

                    <div className="aspect-square bg-neutral-800 relative overflow-hidden group md:mt-16">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2101&auto=format&fit=crop" alt="Photography" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 left-6 z-20">
                            <Image className="w-6 h-6 text-white mb-2" />
                            <h3 className="text-xl font-bold text-white">Digital Photography</h3>
                            <p className="text-sm text-gray-300">Urban Exploration</p>
                        </div>
                    </div>
                </div>

                {/* Personal Blog / Thoughts */}
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-serif text-3xl text-white mb-8 italic text-center">Journal</h2>
                    <div className="space-y-12">
                        <article className="text-center group cursor-pointer">
                            <span className="font-mono text-xs text-accent tracking-widest block mb-2">MARCH 10, 2024</span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-3">On Creative Block and Brutalism</h3>
                            <p className="text-gray-500 leading-relaxed line-clamp-2 group-hover:text-gray-400 transition-colors">
                                Exploring the relationship between structural rigidity in architecture and the fluidity of the creative process...
                            </p>
                        </article>
                        <article className="text-center group cursor-pointer">
                            <span className="font-mono text-xs text-accent tracking-widest block mb-2">FEB 28, 2024</span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors mb-3">Analog Waves</h3>
                            <p className="text-gray-500 leading-relaxed line-clamp-2 group-hover:text-gray-400 transition-colors">
                                Why I returned to cassette tapes in an era of lossless streaming. The texture of noise...
                            </p>
                        </article>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreatorPage;
