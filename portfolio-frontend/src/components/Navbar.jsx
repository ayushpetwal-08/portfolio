import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight, Sparkles, Eye } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [views, setViews] = useState(0);

    // Fair Session-based View Counter Logic
    useEffect(() => {
        // 1. Storage se total views fetch karein
        const storedViews = localStorage.getItem("portfolio_total_views");
        let currentViews = storedViews ? parseInt(storedViews, 10) : 142; // Starting baseline count

        // 2. Check karein kya user is session mein pehle aa chuka hai?
        const hasVisitedThisSession = sessionStorage.getItem("portfolio_session_visited");

        if (!hasVisitedThisSession) {
            // Agar pehli baar aaya hai is session mein: Count +1 & lock session
            currentViews += 1;
            localStorage.setItem("portfolio_total_views", currentViews.toString());
            sessionStorage.setItem("portfolio_session_visited", "true");
        }

        setViews(currentViews);
    }, []);

    // Scroll state for extra glow/blur effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
            <nav
                className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 ${
                    scrolled
                        ? "border-white/15 bg-zinc-950/80 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl"
                        : "border-white/10 bg-zinc-950/50 backdrop-blur-md"
                }`}
            >
                <div className="flex h-16 items-center justify-between px-5 md:px-8">
                    
                    {/* Logo & Status Badge */}
                    <a href="#home" className="group flex items-center gap-3">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 text-indigo-400 shadow-inner transition-transform duration-300 group-hover:scale-105 group-hover:border-cyan-400/50">
                            <Terminal size={20} className="text-cyan-400 transition-transform duration-300 group-hover:rotate-6" />
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-wider text-white group-hover:text-cyan-300 transition-colors">
                                AYUSH<span className="text-indigo-500">.</span>
                            </span>
                            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-1">
                                AI / Systems
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-1 rounded-full border border-white/5 bg-zinc-900/60 p-1.5 lg:flex">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="group relative rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:text-white"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <span className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-white/10" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Live Views Counter + CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <div
                            title="Unique Session Views"
                            className="flex items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-mono text-cyan-400 shadow-inner"
                        >
                            <Eye size={14} className="animate-pulse text-cyan-400 shrink-0" />
                            <span>{views} views</span>
                        </div>

                        <a
                            href="#contact"
                            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-indigo-600 to-cyan-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:shadow-cyan-500/30 hover:scale-[1.02]"
                        >
                            <span>Let's Talk</span>
                            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>

                    {/* Mobile Menu & Views */}
                    <div className="flex items-center gap-2 md:hidden">
                        <div className="flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-[11px] font-mono text-cyan-400">
                            <Eye size={12} className="animate-pulse" />
                            <span>{views}</span>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/80 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
                        isMobileMenuOpen ? "max-h-96 opacity-100 border-t border-white/10" : "max-h-0 opacity-0"
                    }`}
                >
                    <ul className="flex flex-col gap-2 p-5 text-sm">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between rounded-xl px-4 py-2.5 text-zinc-300 transition-colors hover:bg-white/5 hover:text-cyan-400"
                                >
                                    <span>{link.name}</span>
                                    <Sparkles size={14} className="opacity-40" />
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-center text-xs font-semibold text-white"
                            >
                                Let's Talk <ArrowUpRight size={14} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;