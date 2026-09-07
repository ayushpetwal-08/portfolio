import React, { useState } from "react";
import { Mail, Send, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contacts`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong. Please try again.");
            }

            setSuccess("Message sent successfully! I'll get back to you soon.");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            id="contact"
            className="scroll-mt-20 min-h-screen px-6 py-24 bg-zinc-950 text-white relative overflow-hidden"
        >
            {/* Ambient Lighting Background */}
            <div className="pointer-events-none absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-600/10 blur-[130px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900/80 text-cyan-400 text-xs font-mono mb-4 shadow-inner">
                        <MessageSquare size={14} />
                        <span>contact_initiate.sh</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Get In <span className="bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-lg mx-auto text-sm sm:text-base">
                        Have a project, job opportunity, or just want to connect? Send me a message!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
                    
                    {/* Left Column - Details */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Let's collaborate.
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                I'm always open to discussing web engineering opportunities, technical challenges, or new full-stack projects.
                            </p>

                            {/* Email Badge */}
                            <a
                                href="mailto:ayushpetwal34@gmail.com"
                                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300"
                            >
                                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div className="overflow-hidden">
                                    <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Direct Email</div>
                                    <div className="text-sm font-semibold text-zinc-200 group-hover:text-cyan-300 transition-colors truncate">
                                        ayushpetwal34@gmail.com
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-4">
                                Connect on Social Platforms
                            </span>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/ayushpetwal-08"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-white/20 transition-all duration-300 text-sm font-medium"
                                >
                                    <FaGithub size={18} />
                                    <span>GitHub</span>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/ayush-petwal-99b0862bb/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-zinc-900/50 text-zinc-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 text-sm font-medium"
                                >
                                    <FaLinkedin size={18} className="text-cyan-400" />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Glassmorphic Form */}
                    <div className="lg:col-span-7">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative"
                        >
                            {/* Name Input */}
                            <div className="mb-6">
                                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Alex Morgan"
                                    required
                                    className="w-full rounded-xl bg-zinc-950/80 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-6">
                                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="e.g. alex@example.com"
                                    required
                                    className="w-full rounded-xl bg-zinc-950/80 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>

                            {/* Message Input */}
                            <div className="mb-6">
                                <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Write your project details or message..."
                                    required
                                    className="w-full rounded-xl bg-zinc-950/80 border border-white/10 px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none resize-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 via-cyan-600 to-indigo-600 bg-size-[200%_auto] hover:bg-right px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-cyan-500/20"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        <span>Transmitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={16} />
                                    </>
                                )}
                            </button>

                            {/* Feedback Alerts */}
                            {success && (
                                <div className="mt-4 flex items-center gap-2 p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono">
                                    <CheckCircle2 size={16} className="shrink-0" />
                                    <span>{success}</span>
                                </div>
                            )}

                            {error && (
                                <div className="mt-4 flex items-center gap-2 p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono">
                                    <AlertCircle size={16} className="shrink-0" />
                                    <span>{error}</span>
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;