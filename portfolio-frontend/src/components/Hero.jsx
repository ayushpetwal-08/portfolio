import React, { useRef } from "react";
import { File, ArrowUpRight, Terminal, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profileImage from "../assets/profileImage.jpeg";

const Hero = () => {
    const text = "Full Stack Developer | AI & Systems Enthusiast";
    const heroRef = useRef(null);

    const handleMouseMove = (e) => {
        const el = heroRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
    };

    return (
        <>
            <style>{`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(28px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-20px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes floatSlow {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(1deg); }
                }
                @keyframes floatReverse {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(10px) rotate(-1deg); }
                }
                .fade-up { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .fade-left { opacity: 0; animation: fadeInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .float-slow { animation: floatSlow 6s ease-in-out infinite; }
                .float-reverse { animation: floatReverse 7s ease-in-out infinite; }
                
                .cursor-glow::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(99, 102, 241, 0.08), transparent 60%);
                    pointer-events: none;
                    z-index: 1;
                }
                .grid-bg {
                    background-size: 40px 40px;
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                }
                .watermark {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: clamp(5rem, 18vw, 15rem);
                    font-weight: 900;
                    line-height: 1;
                    color: transparent;
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.03);
                    letter-spacing: -0.04em;
                    white-space: nowrap;
                    pointer-events: none;
                    z-index: 0;
                }
            `}</style>

            <main
                id="home"
                ref={heroRef}
                onMouseMove={handleMouseMove}
                className="cursor-glow grid-bg relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden bg-zinc-950 text-white"
            >
                {/* Background Watermark */}
                <span className="watermark">PETWAL</span>

                {/* Ambient Radial Lighting */}
                <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-linear-to-tr from-indigo-600/15 to-cyan-500/15 blur-[120px]" />
                <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

                <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">

                    {/* Vertical Social Rail */}
                    <div
                        className="fade-left hidden md:flex flex-col items-center gap-5 shrink-0"
                        style={{ animationDelay: "0.6s" }}
                    >
                        <a
                            href="https://github.com/ayushpetwal-08"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="p-2.5 rounded-xl border border-white/5 bg-zinc-900/60 text-zinc-400 transition-all duration-300 hover:border-cyan-500/40 hover:text-cyan-400 hover:scale-110 shadow-lg"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ayush-petwal-99b0862bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="p-2.5 rounded-xl border border-white/5 bg-zinc-900/60 text-zinc-400 transition-all duration-300 hover:border-indigo-500/40 hover:text-indigo-400 hover:scale-110 shadow-lg"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <div className="h-16 w-px bg-linear-to-b from-zinc-700 via-zinc-800 to-transparent" />
                    </div>

                    {/* Left / Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        
                        {/* Status Tag */}
                        <div
                            className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium mb-5"
                            style={{ animationDelay: "0.05s" }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Available for Engineering Roles
                        </div>

                        {/* Title */}
                        <h1
                            className="fade-up text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
                            style={{ animationDelay: "0.15s" }}
                        >
                            Hi, I'm <br className="hidden sm:inline" />
                            <span className="bg-linear-to-r from-white via-zinc-200 to-cyan-400 bg-clip-text text-transparent">
                                Ayush Petwal
                            </span>
                        </h1>

                        {/* Interactive Dynamic Subtitle */}
                        <h2
                            className="fade-up mt-4 text-lg sm:text-2xl font-mono font-semibold text-cyan-400/90 flex flex-wrap justify-center md:justify-start gap-1"
                            style={{ animationDelay: "0.3s" }}
                        >
                            <Terminal size={22} className="text-indigo-400 self-center mr-1.5" />
                            {text.split("").map((char, index) => (
                                <span
                                    key={index}
                                    className="inline-block transition-transform duration-200 hover:-translate-y-1 hover:text-indigo-300 cursor-default"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </h2>

                        {/* Bio Description */}
                        <p
                            className="fade-up mt-5 max-w-xl text-zinc-400 text-sm sm:text-base leading-relaxed border-l-2 border-indigo-500/40 pl-4 py-1 mx-auto md:mx-0"
                            style={{ animationDelay: "0.45s" }}
                        >
                            Specializing in building scalable distributed systems, modern web applications, and AI integrations. Focused on high-performance infrastructure, cloud-native deployments, and crisp user experiences.
                        </p>

                        {/* CTA Buttons */}
                        <div className="fade-up flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8" style={{ animationDelay: "0.6s" }}>
                            <a
                                href="#projects"
                                className="group relative inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 via-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-cyan-500/35 hover:scale-[1.02]"
                            >
                                <span>Explore Projects</span>
                                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </a>

                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/80 px-5 py-3 text-sm font-medium text-zinc-200 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                            >
                                <File size={16} className="text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                                <span>Resume</span>
                            </a>
                        </div>

                        {/* Mobile Social Rail */}
                        <div className="fade-up flex md:hidden items-center justify-center gap-6 mt-8" style={{ animationDelay: "0.7s" }}>
                            <a
                                href="https://github.com/ayushpetwal-08"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-white transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ayush-petwal-99b0862bb/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-400 hover:text-cyan-400 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right / Visual Image Frame */}
                    <div className="fade-up relative shrink-0" style={{ animationDelay: "0.35s" }}>
                        <div className="float-slow relative">
                            
                            {/* Ambient Glow Frame */}
                            <div className="absolute -inset-1.5 rounded-3xl bg-linear-to-r from-indigo-500 to-cyan-500 opacity-30 blur-lg transition duration-500 group-hover:opacity-60" />

                            {/* Profile Image */}
                            <div className="relative rounded-3xl border border-white/10 bg-zinc-900 overflow-hidden shadow-2xl">
                                <img
                                    src={profileImage}
                                    alt="Ayush Petwal"
                                    className="w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 object-cover object-center grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent" />
                            </div>

                            {/* Floating Tech Badge 1 (Top Right) */}
                            <div className="float-reverse absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 shadow-xl">
                                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-400">
                                    <Code2 size={16} />
                                </div>
                                <div className="text-[11px] font-mono">
                                    <p className="text-zinc-400">Stack</p>
                                    <p className="font-bold text-white">MERN + DSA / AI</p>
                                </div>
                            </div>

                            {/* Floating Tech Badge 2 (Bottom Left) */}
                            <div className="absolute -bottom-5 -left-5 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 shadow-2xl max-w-xs">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                                    <Sparkles size={16} />
                                </div>
                                <div className="text-xs">
                                    <p className="font-semibold text-white">Computer Science</p>
                                    <p className="text-[10px] text-zinc-400 font-mono">Systems & Algorithms Focus</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Hero;