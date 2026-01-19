import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-black border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <h3 className="text-2xl font-mono font-bold text-white mb-2">RISHABH NEESHATH</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                        Designing systems for the future of audio and computation.
                    </p>
                </div>

                <div className="flex flex-col items-end gap-4">
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-accent transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                    <div className="font-mono text-xs text-gray-600">
                        © {new Date().getFullYear()} / SYSTEM_NORMAL
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
