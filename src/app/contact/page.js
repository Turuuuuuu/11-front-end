"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white w-full">
      <div className="px-4 py-14 sm:px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a question or want to work together? Send us a message and we’ll reply as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 text-gray-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-gray-700 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-gray-700 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows="6"
                className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-gray-700 focus:outline-none resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}