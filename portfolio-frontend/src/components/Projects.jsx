import React, { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaDotCircle } from "react-icons/fa";

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
                    throw new Error("Failed to fetch projects");
                }

                const data = await response.json();

                setProjects(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Loading
    if (loading) {
        return (
            <section
                id="projects"
                className="scroll-mt-1 min-h-screen flex items-center justify-center"
            >
                <p className="text-gray-500">
                    Loading projects...
                </p>
            </section>
        );
    }

    // Error
    if (error) {
        return (
            <section
                id="projects"
                className="scroll-mt-1 min-h-screen flex items-center justify-center"
            >
                <p className="text-red-500">
                    {error}
                </p>
            </section>
        );
    }

    return (
        <section
            id="projects"
            className="scroll-mt-1 min-h-screen px-5 py-20 border-t"
        >
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold">
                    My Projects
                </h2>

                <div className="flex justify-center mt-5">
                    <p className="flex items-center gap-2 border border-slate-300 px-4 py-2 rounded-full text-sm text-slate-600">
                        <FaDotCircle size={14} />
                        Some of the projects I have built
                    </p>
                </div>
            </div>

            {/* Projects */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                {projects.map((project) => (
                    <div
                        key={project._id}
                        className="
                            flex flex-col
                            overflow-hidden
                            rounded-2xl
                            border border-gray-200
                            bg-white
                            shadow-sm
                            transition-all
                            duration-300
                            ease-out
                            hover:-translate-y-2
                            hover:shadow-xl
                        "
                    >
                        {/* Project Preview */}
                        <div className="h-48 bg-gray-100 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">
                                Project Preview
                            </span>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-6">

                            {/* Title + Status */}
                            <div className="flex items-start justify-between gap-3">
                                <h3 className="text-xl font-bold leading-tight">
                                    {project.title}
                                </h3>

                                {/* Status */}
                                <span
                                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium border ${
                                        project.status === "completed"
                                            ? "bg-green-50 text-green-700 border-green-200"
                                            : "bg-blue-50 text-blue-700 border-blue-200"
                                    }`}
                                >
                                    {project.status === "completed"
                                        ? "Complete"
                                        : "In Progress"}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="
                                            px-2.5 py-1
                                            rounded-full
                                            bg-gray-100
                                            text-gray-700
                                            text-xs
                                            font-medium
                                            transition-all
                                            duration-300
                                            hover:bg-gray-200
                                        "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-3 mt-auto pt-6">

                                {/* GitHub */}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex items-center gap-2
                                            border border-gray-300
                                            rounded-lg
                                            px-4 py-2
                                            text-sm
                                            transition-all
                                            duration-300
                                            hover:bg-black
                                            hover:text-white
                                            hover:border-black
                                        "
                                    >
                                        <FaGithub size={17} />
                                        GitHub
                                    </a>
                                )}

                                {/* Live Demo */}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            flex items-center gap-2
                                            rounded-lg
                                            px-4 py-2
                                            bg-black
                                            text-white
                                            text-sm
                                            transition-all
                                            duration-300
                                            hover:bg-gray-800
                                            hover:-translate-y-0.5
                                        "
                                    >
                                        <ExternalLink size={17} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Projects;