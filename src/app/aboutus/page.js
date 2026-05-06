"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 md:py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            About Our Company
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            We're committed to delivering excellence and innovation in everything we do
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <section className="mb-16 md:mb-24 bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-12 border-l-4 border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We strive to build modern, fast, and scalable web applications using cutting-edge technology. Our vision is to empower businesses with digital solutions that drive growth and transformation in an increasingly connected world.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-24">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">🎯</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to create user-friendly and high-performance web applications that solve real-world problems and deliver exceptional value to our clients. We believe in building lasting partnerships through trust, innovation, and excellence.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">⚡</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Do</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gray-800 font-bold">✓</span>
                <span className="leading-relaxed">Build responsive, modern websites</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-800 font-bold">✓</span>
                <span className="leading-relaxed">Create full-stack web applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-800 font-bold">✓</span>
                <span className="leading-relaxed">Design intuitive user interfaces</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-8 sm:p-10 md:p-12 text-white mb-16 md:mb-24">
          <h2 className="text-3xl font-bold mb-8">Our Projects & Achievements</h2>
          <p className="text-lg text-gray-200 mb-8">
            We've successfully delivered over 12 major projects this year, ranging from e-commerce platforms to enterprise applications. Here are some of our notable works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🛒", title: "E-commerce Website", desc: "Full-featured online marketplace with payment integration" },
              { icon: "📋", title: "Task Management App", desc: "Collaborative productivity tool for teams" },
              { icon: "💼", title: "Portfolio Website", desc: "Professional portfolio showcase platform" }
            ].map((project, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur rounded-lg p-6 border border-white border-opacity-20">
                <p className="text-3xl mb-3">{project.icon}</p>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 md:p-12 border-t-4 border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "12+", label: "Projects Delivered" },
              { num: "100%", label: "Client Satisfaction" },
              { num: "8+", label: "Years Experience" },
              { num: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold text-gray-800 mb-2">{stat.num}</p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}