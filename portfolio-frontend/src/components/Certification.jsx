import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";

const Certifications = () => {
    const certifications = [
        {
            title: "Software Engineer Inter",
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
            className="scroll-mt-1 min-h-screen px-5 py-20 border-t"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Certifications
                </h2>

                <div className='flex justify-center mt-2 font-sans'>
                    <p className='flex items-center gap-2 border w-fit px-4 py-2 border-slate-600 rounded-3xl'><FaDotCircle size={16} className='text-slate-600' />Certifications and achievements</p>
                </div>
            </div>

            {/* Certification Cards */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((certification) => (
                    <div
                        key={certification.title}
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
                            hover:shadow-lg
                        "
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 border rounded-xl bg-gray-100">
                                <Award size={28} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold">
                                    {certification.title}
                                </h3>

                                <p className="text-gray-600 mt-1">
                                    {certification.issuer}
                                </p>

                                <p className="text-sm text-gray-500 mt-2">
                                    Issued: {certification.date}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5">
                            <p className="text-sm text-gray-500">
                                Credential ID
                            </p>

                            <p className="text-sm font-medium break-all">
                                {certification.credential}
                            </p>
                        </div>

                        <a
                            href={certification.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                mt-5
                                inline-flex
                                items-center
                                gap-2
                                rounded-lg
                                bg-black
                                text-white
                                px-4 py-2
                                text-sm
                                transition-all
                                duration-300
                                hover:bg-gray-800
                            "
                        >
                            View Credential
                            <ExternalLink size={16} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;