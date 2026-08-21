import React from "react";
import { FaDotCircle } from "react-icons/fa";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "REST APIs"],
        },
        {
            title: "Database",
            skills: ["MongoDB", "MySQL"],
        },
        {
            title: "Programming & Tools",
            skills: ["C++", "Python", "DSA", "Git", "GitHub"],
        },
        {
            title: "Currently Exploring",
            skills: ["AI Integration", "Open Source"],
        },
    ];

    return (
        <section
            id="skills"
            className="scroll-mt-10 min-h-screen px-5 py-20 border-t"
        >
            <div className="text-center mb-12 text-black">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Skills
                </h2>

                <div className='flex justify-center mt-5 font-sans'>
                          <p className='flex items-center gap-2 border w-fit px-4 py-2 border-gray-500 rounded-3xl'><FaDotCircle size={16} className='text-gray-600' />My journey in technology, development, and continuous learning.</p>
                        </div>
                      </div>

            {/* Skill Cards */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="
                            border border-gray-200
                            rounded-2xl
                            p-6
                            bg-white
                            shadow-sm
                            transition-all
                            duration-300
                            ease-out
                            hover:-translate-y-2
                            hover:scale-[1.02]
                            hover:shadow-lg
                        "
                    >
                        <h3 className="text-xl font-bold mb-5">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="
                                        px-3 py-1.5
                                        rounded-full
                                        bg-gray-100
                                        text-gray-700
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-300
                                        hover:bg-black
                                        hover:text-white
                                        hover:-translate-y-1
                                    "
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;