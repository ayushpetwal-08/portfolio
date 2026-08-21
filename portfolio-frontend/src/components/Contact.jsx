import React, { useState } from "react";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";

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
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 min-h-screen px-5 py-20 border-t"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Contact Me
        </h2>

        <div className="flex justify-center mt-2 font-sans">
          <p className="flex items-center gap-2 border w-fit px-4 py-2 border-slate-600 rounded-3xl text-sm">
            <FaDotCircle
              size={16}
              className="text-slate-600"
            />
            Have a project or opportunity in mind? Let's connect.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold">
            Let's Talk
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm always interested in learning, building
            new projects and exploring new opportunities.
            Feel free to reach out.
          </p>

          <a
            href="mailto:ayushpetwal34@gmail.com"
            className="flex items-center gap-3 mt-6 text-gray-700 hover:text-black transition"
          >
            <Mail size={20} />
            ayushpetwal34@gmail.com
          </a>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/ayushpetwal-08"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/ayush-petwal-99b0862bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="border rounded-2xl p-6 md:p-8 shadow-sm bg-white"
        >

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="
                w-full
                border
                rounded-lg
                px-4 py-3
                outline-none
                focus:ring-1
                focus:ring-black
              "
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
              className="
                w-full
                border
                rounded-lg
                px-4 py-3
                outline-none
                focus:ring-1
                focus:ring-black
              "
            />
          </div>

          {/* Message */}
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Write your message..."
              required
              className="
                w-full
                border
                rounded-lg
                px-4 py-3
                outline-none
                resize-none
                focus:ring-1
                focus:ring-black
              "
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-black
              text-white
              rounded-lg
              px-5 py-3
              transition-all
              duration-300
              hover:bg-gray-800
              hover:-translate-y-1
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Sending..." : "Send Message"}

            {!loading && <Send size={18} />}
          </button>

          {/* Success Message */}
          {success && (
            <p className="mt-4 text-center text-sm text-green-600">
              {success}
            </p>
          )}

          {/* Error Message */}
          {error && (
            <p className="mt-4 text-center text-sm text-red-600">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;