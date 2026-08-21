import React from "react";
import { File } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import profileImage from "../assets/profileImage.jpeg";
import { FaDotCircle } from "react-icons/fa";

const Hero = () => {
    const text = "Full Stack Developer";

    return (
        <main
            id="home"
            className="min-h-screen pt-24 pb-10 px-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
        >
            {/* Left Side */}
            <div className="px-2 sm:px-5 md:px-10 lg:px-16 xl:px-20 py-10">
                <div>
                    <h2 className="text-xl sm:text-2xl">
                        Hi👋,{" "}
                        <span className="font-bold">
                            I'm Ayush Petwal
                        </span>
                    </h2>

                    {/* Animated Heading */}
                    <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                        {text.split("").map((char, index) => (
                            <span
                                key={index}
                                className="
                                    inline-block
                                    transition-all
                                    duration-300
                                    ease-out
                                    hover:scale-125
                                    hover:bg-linear-to-r
                                    hover:from-red-500
                                    hover:via-yellow-400
                                    hover:to-blue-500
                                    hover:bg-clip-text
                                    hover:text-transparent
                                "
                            >
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg mt-4 max-w-xl text-gray-600 leading-relaxed">
                        I build modern web applications using React,
                        Node.js, Express.js and MongoDB. I also integrate
                        AI-powered features into modern, responsive web
                        applications.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 md:gap-5 mt-6">
                    <a
                        href="#projects"
                        className="
                            border border-gray-800
                            rounded-lg
                            px-4 py-2.5
                            transition-all
                            duration-300
                            hover:bg-black
                            hover:text-white
                        "
                    >
                        View Projects
                    </a>

                    <a
                        href="/Ayush_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            flex items-center gap-2
                            border border-gray-500
                            rounded-lg
                            px-5 py-2.5
                            bg-black
                            text-white
                            transition-all
                            duration-300
                            hover:bg-gray-800
                            hover:scale-105
                        "
                    >
                        Resume
                        <File size={20} />
                    </a>
                </div>

                {/* Social Links */}
                <div className="flex mt-5 gap-4">
                    <a
                        href="https://github.com/ayushpetwal-08"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-transform duration-300 hover:scale-110"
                    >
                        <FaGithub size={30} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ayush-petwal-99b0862bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-transform duration-300 hover:scale-110"
                    >
                        <FaLinkedin size={30} />
                    </a>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center">
                <img
                    src={profileImage}
                    alt="Ayush Petwal"
                    className="
            w-60 h-60
    sm:w-72 sm:h-72
    md:w-80 md:h-80
    lg:w-96 lg:h-96
    object-cover
    rounded-full
    shadow-xl
    grayscale
    hover:grayscale-0
    transition-all
    duration-500
    hover:scale-105
        "
                />

                <span
                    className="
                    flex items-center gap-2
            mt-5
            px-4 py-2
            rounded-full
            border border-green-500/30
            bg-green-50
            text-green-700
            text-sm font-medium
            shadow-sm
            transition-all
            duration-500
            hover:scale-105
        "
                >
                    <FaDotCircle size={15} />  Open to Internship/Job Opportunities
                </span>
            </div>
        </main>
    );
};

export default Hero;