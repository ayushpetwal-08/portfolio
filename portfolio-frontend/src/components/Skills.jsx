import React from "react";
import { 
    Layout, 
    Server, 
    Database, 
    Code2, 
    Compass, 
    Terminal, 
    Cpu 
} from "lucide-react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Layout,
            color: "from-cyan-500/20 to-blue-500/10",
            borderColor: "group-hover:border-cyan-500/40",
            iconColor: "text-cyan-400",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Redux Toolkit"],
        },
        {
            title: "Backend Infrastructure",
            icon: Server,
            color: "from-indigo-500/20 to-purple-500/10",
            borderColor: "group-hover:border-indigo-500/40",
            iconColor: "text-indigo-400",
            skills: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "JWT / Auth"],
        },
        {
            title: "Database Systems",
            icon: Database,
            color: "from-emerald-500/20 to-teal-500/10",
            borderColor: "group-hover:border-emerald-500/40",
            iconColor: "text-emerald-400",
            skills: ["MongoDB", "Mongoose", "MySQL",],
        },
        {
            title: "Languages & Core CS",
            icon: Code2,
            color: "from-amber-500/20 to-orange-500/10",
            borderColor: "group-hover:border-amber-500/40",
            iconColor: "text-amber-400",
            skills: ["C++","JavaScript", "Python", "Data Structures", "Algorithms", "OOPs Concepts"],
        },
        {
            title: "Tools & DevOps",
            icon: Cpu,
            color: "from-fuchsia-500/20 to-pink-500/10",
            borderColor: "group-hover:border-fuchsia-500/40",
            iconColor: "text-fuchsia-400",
            skills: ["Git", "GitHub", "Postman", "VS Code", "Linux / CLI"],
        },
        {
            title: "Currently Exploring",
            icon: Compass,
            color: "from-sky-500/20 to-indigo-500/10",
            borderColor: "group-hover:border-sky-500/40",
            iconColor: "text-sky-400",
            skills: ["AI Model Integration", "Open Source", "Docker", "System Design"],
        },
    ];

    return (
        <section
            id="skills"
            className="scroll-mt-20 min-h-screen px-6 py-24 bg-zinc-950 text-white relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute top-1/3 right-10 h-96 w-96 rounded-full bg-cyan-600/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 text-cyan-400 text-xs font-mono mb-4 shadow-inner">
                        <Terminal size={14} />
                        <span>tech-stack --list</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Technical <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Arsenal</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
                        Technologies, frameworks, and core engineering concepts I work with daily.
                    </p>
                </div>

                {/* Skill Category Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={category.title}
                                className={`group relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-2xl ${category.borderColor}`}
                            >
                                {/* Accent Gradient Overlay */}
                                <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${category.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`} />

                                <div className="relative z-10 flex flex-col justify-between h-full">
                                    
                                    {/* Card Top Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-3 rounded-2xl border border-white/10 bg-zinc-800/80 ${category.iconColor}`}>
                                                <IconComponent size={22} />
                                            </div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                                                {category.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Skill Pills */}
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3.5 py-1.5 rounded-xl border border-white/5 bg-zinc-800/60 text-zinc-300 text-xs font-mono font-medium transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-800 hover:text-white hover:scale-105"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Skills;