import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400 relative overflow-hidden">
            {/* Ambient Background Blur */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-full max-w-4xl bg-linear-to-t from-cyan-500/5 to-transparent blur-3xl" />

            <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand & Copyright */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                        <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                            AP<span className="text-cyan-400">.</span>
                        </span>
                        <span className="hidden sm:inline text-zinc-700">|</span>
                        <p className="text-xs sm:text-sm text-zinc-400">
                            © {new Date().getFullYear()} <span className="text-zinc-200 font-medium">Ayush Petwal</span>. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/ayushpetwal-08"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="p-2.5 rounded-xl border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ayush-petwal-99b0862bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="p-2.5 rounded-xl border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-zinc-900/60 text-xs font-mono text-zinc-300 hover:text-white hover:border-cyan-500/40 hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
                    >
                        <span>Back to Top</span>
                        <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
                    </button>

                </div>

                {/* Sub-footer detail */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center text-[11px] font-mono text-zinc-600">
                    <span className="flex items-center gap-1.5">
                        Designed & Built with <Heart size={12} className="text-rose-500 fill-rose-500/20 inline" /> using React & Tailwind
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;