"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-80px)] w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 py-12 md:py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Welcome to Our Platform
            </h1>
            <p className="text-lg sm:text-xl text-blue-100">
              Explore our comprehensive services and discover what we can offer for your business
            </p>
          </div>

          <img
            src="https://play-lh.googleusercontent.com/t6prSr0PEKsAm43sEY-uuegPCoByNOfwwczm4xhs7zSCtDyDMF8N7bspbb4ACmu5w0DuZ0Xz0F7Ku-JaOdhF9w"
            alt="Banner"
            className="w-64 sm:w-80 md:w-96 rounded-xl shadow-2xl mx-auto hover:shadow-3xl transition-shadow border-rounded"
          />

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full">
            <button
              onClick={() => router.push('/contact')}
              className="w-full bg-white hover:bg-blue-50 transition-all text-blue-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-200"
            >
              Get in Touch
            </button>

            <button
              onClick={() => router.push('/aboutus')}
              className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-200"
            >
              About Our Team
            </button>

            <button
              onClick={() => router.push('/json')}
              className="w-full bg-white hover:bg-blue-50 transition-all text-blue-900 font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-200"
            >
              View Data
            </button>

            <button
              onClick={() => router.push('/weather')}
              className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-500 hover:to-blue-500 transition-all text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-200"
            >
              🌤️ Weather
            </button>

            <button
              onClick={() => router.push('/loc')}
              className="w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 transition-all text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 duration-200"
            >
              📍 Locations
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-12 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Professional", desc: "Expert team with years of experience" },
              { title: "Reliable", desc: "Consistent delivery and support" },
              { title: "Innovative", desc: "Cutting-edge solutions and technology" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-blue-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}