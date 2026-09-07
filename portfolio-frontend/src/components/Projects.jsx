import React, { useEffect, useState } from "react";
import { ExternalLink, Terminal, FolderGit2, AlertTriangle, Loader2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/projects`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch projects database");
                }

                const data = await response.json();
                setProjects(data);
            } catch (err) {
                setError(err.message || "Something went wrong while fetching projects.");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section
            id="projects"
            className="scroll-mt-20 min-h-screen px-6 py-24 bg-zinc-950 text-white relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute top-1/4 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-96 w-96 rounded-full bg-cyan-600/10 blur-[130px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 text-cyan-400 text-xs font-mono mb-4 shadow-inner">
                        <Terminal size={14} />
                        <span>git log --projects</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Featured <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                        A collection of full-stack web applications, backend APIs, and distributed tools I've engineered.
                    </p>
                </div>

                {/* State: Skeleton Loading */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div 
                                key={item} 
                                className="rounded-3xl border border-white/5 bg-zinc-900/40 p-6 flex flex-col justify-between h-105 animate-pulse"
                            >
                                <div>
                                    <div className="h-44 w-full bg-zinc-800/60 rounded-2xl mb-6" />
                                    <div className="h-6 w-3/4 bg-zinc-800/80 rounded-lg mb-3" />
                                    <div className="h-4 w-full bg-zinc-800/40 rounded mb-2" />
                                    <div className="h-4 w-2/3 bg-zinc-800/40 rounded" />
                                </div>
                                <div className="flex gap-2 pt-4">
                                    <div className="h-8 w-16 bg-zinc-800/60 rounded-xl" />
                                    <div className="h-8 w-16 bg-zinc-800/60 rounded-xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* State: Error */}
                {error && !loading && (
                    <div className="flex flex-col items-center justify-center p-12 rounded-3xl border border-red-500/20 bg-red-500/5 text-center max-w-lg mx-auto">
                        <AlertTriangle className="text-red-400 mb-3" size={36} />
                        <h3 className="text-lg font-bold text-white mb-1">Failed to Load Projects</h3>
                        <p className="text-xs text-zinc-400 font-mono">{error}</p>
                    </div>
                )}

                {/* State: Projects List */}
                {!loading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => {
                            const isCompleted = project.status === "completed";

                            return (
                                <div
                                    key={project._id || project.title}
                                    className="group relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 shadow-xl hover:shadow-2xl"
                                >
                                    {/* Ambient Card Hover Glow */}
                                    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                                    <div>
                                        {/* Project Preview Image / Terminal Header */}
                                        <div className="relative h-48 w-full overflow-hidden bg-zinc-900 border-b border-white/10 flex items-center justify-center">
                                            {project.image ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="flex flex-col items-center gap-2 text-zinc-600 group-hover:text-indigo-400 transition-colors">
                                                    <FolderGit2 size={38} />
                                                    <span className="text-xs font-mono">system://project_build</span>
                                                </div>
                                            )}

                                            {/* Status Badge */}
                                            <div className="absolute top-3 right-3">
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border backdrop-blur-md shadow-md ${
                                                        isCompleted
                                                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                                            : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                                                    }`}
                                                >
                                                    <span className={`h-1.5 w-1.5 rounded-full ${isCompleted ? "bg-emerald-400" : "bg-amber-400 animate-pulse"}`} />
                                                    {isCompleted ? "Complete" : "In Progress"}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Body */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                {project.title}
                                            </h3>

                                            <p className="mt-3 text-zinc-400 text-sm leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack Pills */}
                                            <div className="flex flex-wrap gap-1.5 mt-5">
                                                {project.technologies?.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 rounded-lg border border-white/5 bg-zinc-800/80 text-zinc-300 text-[11px] font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions Footer */}
                                    <div className="px-6 pb-6 pt-2 flex items-center gap-3 relative z-10">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-800/60 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition-all duration-300 hover:border-white/20 hover:bg-zinc-800 hover:text-white"
                                            >
                                                <FaGithub size={15} />
                                                <span>GitHub</span>
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-cyan-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20"
                                            >
                                                <ExternalLink size={14} />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                )}

            </div>
        </section>
    );
};

export default Projects;