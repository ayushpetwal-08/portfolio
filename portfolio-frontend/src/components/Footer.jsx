import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="border-t bg-slate-900 text-white">
            <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Copyright */}
                <p className="text-sm text-gray-400 text-center">
                    © {new Date().getFullYear()} Ayush Petwal. All rights reserved.
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/ayushpetwal-08"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110"
                    >
                        <FaGithub size={22} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ayush-petwal-99b0862bb/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 hover:scale-110"
                    >
                        <FaLinkedin size={22} />
                    </a>
                </div>

                {/* Back to Top */}
                <a
                    href="#home"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                    Back to Top ↑
                </a>
            </div>
        </footer>
    );
};

export default Footer;