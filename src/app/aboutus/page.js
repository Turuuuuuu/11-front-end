"use client";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();
  return (
    <div className="h-full bg-gray-300 ">
        <div className="bg-gray-700 h-20 w-full flex justify-between py-4 pl-40 items-center gap-20 pr-40">
        <p>Home</p>
        <p>Product</p>
        <img
        onClick={() => router.push("/")}
          className="h-20 w-20 py-2 px-2 rounded-full cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s"
        />
        <p>Contact</p>
        <p>Main</p>
      </div>
      <div className="mx-auto max-w-4xl">
        
        <section className="  m-16 py-16 rounded-2xl bg-white p-10 text-center shadow-sm ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            About Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We build modern, fast, and scalable web applications using Next.js.
          </p>
        </section>

        <hr className="my-8 border-black" />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-gray-300 p-8 shadow-xl shadow-black/30 ">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our mission is to create user-friendly and high-performance web
              applications that solve real-world problems and deliver value to
              users.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-300 p-8 shadow-xl shadow-black/30 ">
            <h2 className="text-2xl font-semibold text-gray-900">
              What We Do
            </h2>
            <ul className="mt-4 space-y-3 text-gray-600">
              <h1 className="font-semibold">Our Services:</h1>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gray-700" />
                <span className="leading-relaxed">
                  Build responsive websites
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gray-700" />
                <span className="leading-relaxed">
                  Create full-stack web applications
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-gray-700" />
                <span className="leading-relaxed">
                  Design modern and clean user interfaces
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-gray-300 p-8 shadow-xl shadow-black/50 ">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Projects
            </h2>

            <p className="mt-4 leading-relaxed text-gray-700">
              We have made over 12 projects this year so far. Some of our
              notable projects include:
            </p>

            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gray-900"></span>
                <span>E-commerce Website</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gray-900"></span>
                <span>Task Management App</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-gray-900"></span>
                <span>Portfolio Website</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gray-300 p-8 shadow-xl shadow-black/50">
            <h2 className="text-2xl font-semibold text-gray-900">
              Our Goal
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our goal is to become a leading web development company known for
              delivering high-quality and innovative web solutions that exceed
              client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}