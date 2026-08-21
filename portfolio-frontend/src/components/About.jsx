import React from 'react'
import { FaDotCircle } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-10 min-h-screen px-5 py-20 border-t"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          About Me
        </h2>
        <div className='flex justify-center mt-5 font-sans'>
          <p className='flex items-center gap-2 border w-fit px-4 py-2 border-slate-600 rounded-3xl'><FaDotCircle size={16} className='text-slate-600' />My journey in technology, development, and continuous learning.</p>
        </div>
      </div>

      {/* Left & Right */}

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div className="border rounded-2xl p-6 md:p-8 shadow-2xl 
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-lg">
          <h3 className="text-2xl font-bold mb-6">
            Who I Am
          </h3>

          <ul className="space-y-4 text-black">
            <li>• BCA Student</li>
            <li>• Aspiring Full Stack Developer</li>
            <li>• Passionate about building real-world web applications</li>
            <li>• React & Node.js Developer</li>
            <li>• MongoDB & REST API Development</li>
            <li>• C++ & Data Structures and Algorithms</li>
            <li>• Exploring AI Integration</li>
            <li>• Continuous Learner</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          <div className="border rounded-2xl p-6 shadow-2xl
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Education
            </h3>
            <p className="text-black">
              Bachelor of Computer Applications
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-2xl
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Full Stack
            </h3>
            <p className="text-black">
              React, Node.js, Express.js & MongoDB
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-2xl
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Problem Solving
            </h3>
            <p className="text-black">
              C++ & Data Structures and Algorithms
            </p>
          </div>

          <div className="border rounded-2xl p-6 shadow-2xl
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">
              Currently Learning
            </h3>
            <p className="text-black">
              AI Integration & Open Source
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About





{/* <div className='flex justify-center mt-5 font-sans'>
        <p className='flex items-center gap-2 border w-fit px-4 py-2 border-blue-800 rounded-3xl'><FaDotCircle size={16} className='text-blue-700' />A little bit about my journey</p>
      </div> */}