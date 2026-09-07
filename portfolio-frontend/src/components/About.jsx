import React from 'react';
import { 
    User, 
    GraduationCap, 
    Code2, 
    Cpu, 
    Sparkles, 
    CheckCircle2, 
    Terminal, 
    Briefcase 
} from 'lucide-react';

const About = () => {
    const highlights = [
        "Pursuing BCA with focus on Computer Science Fundamentals",
        "Full Stack Development using MERN (MongoDB, Express, React, Node)",
        "Strong Foundation in Data Structures & Algorithms (C++)",
        "Building AI-integrated tools & High-performance backend microservices",
        "Active Open Source contributor & System Architecture Explorer"
    ];

    const cards = [
        {
            icon: GraduationCap,
            title: "Education",
            desc: "Bachelor of Computer Applications (BCA)",
            sub: "Focus on CS, Networking & Software Engineering",
            color: "from-cyan-500/20 to-blue-500/10",
            border: "group-hover:border-cyan-500/40",
            iconColor: "text-cyan-400"
        },
        {
            icon: Code2,
            title: "Full Stack Stack",
            desc: "React.js, Node.js, Express, MongoDB",
            sub: "Tailwind, REST APIs, Microservices",
            color: "from-indigo-500/20 to-purple-500/10",
            border: "group-hover:border-indigo-500/40",
            iconColor: "text-indigo-400"
        },
        {
            icon: Cpu,
            title: "Problem Solving",
            desc: "Data Structures & Algorithms in C++",
            sub: "300+ LeetCode / DSA Problems Solved",
            color: "from-emerald-500/20 to-teal-500/10",
            border: "group-hover:border-emerald-500/40",
            iconColor: "text-emerald-400"
        },
        {
            icon: Sparkles,
            title: "Next-Gen Focus",
            desc: "AI Integration & Infra Tools",
            sub: "vLLM, Observability & Distributed Systems",
            color: "from-amber-500/20 to-orange-500/10",
            border: "group-hover:border-amber-500/40",
            iconColor: "text-amber-400"
        }
    ];

    return (
        <section
            id="about"
            className="scroll-mt-20 min-h-screen px-6 py-24 bg-zinc-950 text-white relative overflow-hidden"
        >
            {/* Background Ambient Glow */}
            <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 text-cyan-400 text-xs font-mono mb-4 shadow-inner">
                        <Terminal size={14} />
                        <span>whoami --verbose</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        About <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                        My journey in software engineering, system architecture, and continuous learning.
                    </p>
                </div>

                {/* Main Content Layout (Bento Grid Style) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Column: Who I Am (Large Bio Card) */}
                    <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-8 flex flex-col justify-between relative group hover:border-indigo-500/30 transition-all duration-300 shadow-2xl">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                                    <User size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Who I Am</h3>
                                    <p className="text-xs font-mono text-zinc-400">Software Engineer & Student</p>
                                </div>
                            </div>

                            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                                Passionate software developer driven by a strong desire to craft efficient web applications and understand core computer science fundamentals.
                            </p>

                            <ul className="space-y-3.5">
                                {highlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Stats Banner inside Left Card */}
                        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-2xl font-extrabold text-white">300+</p>
                                <p className="text-xs text-zinc-400 font-mono">DSA Problems</p>
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold text-cyan-400">MERN + AI</p>
                                <p className="text-xs text-zinc-400 font-mono">Primary Focus</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Focus Areas Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {cards.map((card, index) => {
                            const IconComponent = card.icon;
                            return (
                                <div
                                    key={index}
                                    className={`group relative rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl ${card.border}`}
                                >
                                    {/* Accent Gradient Glow */}
                                    <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${card.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`} />

                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className={`p-3 rounded-2xl border border-white/10 bg-zinc-800/80 ${card.iconColor}`}>
                                                <IconComponent size={22} />
                                            </div>
                                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                                                {card.title}
                                            </h4>
                                            <p className="text-sm font-medium text-zinc-200 mb-1">
                                                {card.desc}
                                            </p>
                                            <p className="text-xs text-zinc-400">
                                                {card.sub}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;