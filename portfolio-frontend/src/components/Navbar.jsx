import React, { useState } from "react";
import { Menu, TrendingUp, X } from "lucide-react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certifications", href: "#certifications"},
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 h-12 w-full bg-black text-white shadow-lg">
            <div className="mx-auto flex h-full items-center justify-between px-6 md:px-16 lg:px-24 xl:px-50">

                {/* Logo */}
                <a href="#home" className="flex items-center gap-1">
                   <TrendingUp size={23} />
                    <span className="text-2xl font-semibold">
                        Ayush
                    </span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-10 text-sm font-medium md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="transition-colors duration-300 hover:text-gray-400"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() =>
                        setIsMobileMenuOpen(!isMobileMenuOpen)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-slate-800 md:hidden"
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-slate-700 bg-slate-900 transition-all duration-300 ease-in-out md:hidden ${
                    isMobileMenuOpen
                        ? "max-h-96 translate-y-0 opacity-100"
                        : "max-h-0 -translate-y-2 opacity-0"
                }`}
            >
                <ul className="flex flex-col items-center gap-5 py-5 text-sm font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={closeMobileMenu}
                                className="transition-colors duration-300 hover:text-gray-400"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;