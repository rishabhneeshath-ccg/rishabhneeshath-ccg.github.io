import React from 'react';
import { Terminal, Database, Cpu, ArrowLeft, ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: "HindiVADER",
        description: "Sentiment analysis tool optimized for Hindi-English code-mixed text using VADER lexicon adaptation.",
        tags: ["NLP", "Python", "Sentiment Analysis"],
        icon: <Terminal className="w-5 h-5" />,
        status: "Research"
    },
    {
        title: "Compiler Construction",
        description: "A custom C-subset compiler featuring lexical analysis, parsing, and intermediate code generation.",
        tags: ["C++", "LLVM", "Compilers"],
        icon: <Cpu className="w-5 h-5" />,
        status: "Completed"
    },
    {
        title: "SVM-SMOTE Analysis",
        description: "Comparative study of minority oversampling techniques for imbalanced datasets in fraud detection.",
        tags: ["ML", "Scikit-Learn", "Data Science"],
        icon: <Database className="w-5 h-5" />,
        status: "Published"
    }
];

const EngineerPage = () => {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
            {/* Header */}
            <header className="border-b border-white/10 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-40">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="font-mono text-sm uppercase tracking-wider">Back to Node</span>
                    </Link>
                    <div className="font-mono text-xs text-white/30 uppercase tracking-[0.2em]">System Status: Online</div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12 relative">
                {/* Industrial Background Element */}
                <div className="absolute top-0 right-0 w-1/2 h-96 bg-[url('https://images.unsplash.com/photo-1555664424-778a69f29c86?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mask-image-linear-to-b" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }} />

                {/* Intro */}
                <div className="mb-20 relative z-10">
                    <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase">System Architecture</span>
                        <div className="h-px bg-accent/30 flex-1" />
                    </div>
                    <h1 className="text-5xl md:text-9xl font-bold font-mono text-white mb-6 uppercase tracking-tighter mix-blend-screen">
                        Engineer<span className="text-accent">_</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-gray-400 font-light border-l-2 border-accent pl-6">
                        Building robust systems at the intersection of low-level architecture and machine intelligence.
                        Focus on performance, scalability, and type safety.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="mb-24">
                    <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-2xl font-mono text-white flex items-center gap-3">
                            <Terminal className="text-accent" /> Active Protocols
                        </h2>
                        <span className="font-mono text-xs text-white/40">INDEX: 001</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, idx) => (
                            <div
                                key={idx}
                                className="group relative bg-[#111] border border-white/5 hover:border-accent/50 p-6 transition-colors duration-300"
                            >
                                <div className="absolute top-4 right-4 text-xs font-mono text-white/20 group-hover:text-accent">{project.status}</div>
                                <div className="mb-6 p-3 bg-white/5 w-fit rounded-sm group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="text-xs font-mono px-2 py-1 bg-white/5 text-white/60 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Writeups */}
                <div>
                    <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-2xl font-mono text-white flex items-center gap-3">
                            <FileText className="text-accent" /> Technical Logs
                        </h2>
                        <span className="font-mono text-xs text-white/40">INDEX: 002</span>
                    </div>

                    <div className="space-y-4">
                        {[1, 2].map((item) => (
                            <div key={item} className="group flex flex-col md:flex-row items-baseline gap-4 md:gap-8 p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
                                <span className="font-mono text-xs text-accent whitespace-nowrap">2024-03-1{item}</span>
                                <h3 className="text-lg font-medium text-white group-hover:text-accent transition-colors flex-1">
                                    Optimizing Memory Alignment in Rust Structures
                                </h3>
                                <span className="text-xs text-gray-500 font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    READ ENTRY <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default EngineerPage;
