import React from "react";
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

const Certifications = () => {
    const certifications = [
        {
            title: "Software Engineer Intern",
            issuer: "HackerRank",
            date: "2026",
            credential: "b8f0fd6c9c99",
            link: "https://www.hackerrank.com/certificates/iframe/b8f0fd6c9c99",
        },
        {
            title: "JavaScript (Intermediate)",
            issuer: "HackerRank",
            date: "2026",
            credential: "9d097c517f64",
            link: "https://www.hackerrank.com/certificates/iframe/9d097c517f64",
        },
    ];

    return (
        <section
            id="certifications"
            className="scroll-mt-20 px-6 py-24 bg-zinc-950 text-white relative overflow-hidden"
        >
            {/* Ambient Glows */}
            <div className="pointer-events-none absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-cyan-600/10 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-10 left-1/3 h-80 w-80 rounded-full bg-indigo-600/10 blur-[120px]" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 text-cyan-400 text-xs font-mono mb-4 shadow-inner">
                        <ShieldCheck size={14} />
                        <span>verified_credentials.json</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Certifications & <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Badges</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-lg mx-auto text-sm sm:text-base">
                        Validated technical skill certifications and industry assessments from recognized platforms.
                    </p>
                </div>

                {/* Certification Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {certifications.map((cert) => (
                        <div
                            key={cert.credential}
                            className="group relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/40 shadow-xl hover:shadow-cyan-500/5"
                        >
                            {/* Hover Ambient Border Accent */}
                            <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-500/10 via-transparent to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                            <div>
                                {/* Card Header */}
                                <div className="flex items-start justify-between gap-4 mb-6">
                                    <div className="p-3.5 rounded-2xl bg-linear-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 text-cyan-400 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                        <Award size={30} />
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                                        <CheckCircle2 size={12} />
                                        Verified
                                    </span>
                                </div>

                                {/* Title & Issuer */}
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {cert.title}
                                </h3>

                                <div className="flex items-center justify-between mt-2 text-sm text-zinc-400">
                                    <span className="font-medium text-zinc-300">{cert.issuer}</span>
                                    <span className="text-xs font-mono text-zinc-500">Issued {cert.date}</span>
                                </div>

                                {/* Credential Box */}
                                <div className="mt-6 p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 font-mono text-xs text-zinc-400">
                                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">
                                        Credential ID
                                    </div>
                                    <div className="text-zinc-200 truncate select-all">
                                        {cert.credential}
                                    </div>
                                </div>
                            </div>

                            {/* External Link Action Button */}
                            <div className="mt-8 pt-4 border-t border-white/5">
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-800/80 border border-white/10 px-4 py-3 text-xs font-semibold text-zinc-200 transition-all duration-300 hover:bg-zinc-800 hover:border-cyan-500/40 hover:text-white group/btn"
                                >
                                    <span>Verify Credential</span>
                                    <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200 text-cyan-400" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;