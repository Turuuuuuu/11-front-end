"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div className="h-screen w-full bg-white flex flex-col items-center justify-center text-center text-white p-4 gap-8">
      
     
      <img
      src="https://play-lh.googleusercontent.com/t6prSr0PEKsAm43sEY-uuegPCoByNOfwwczm4xhs7zSCtDyDMF8N7bspbb4ACmu5w0DuZ0Xz0F7Ku-JaOdhF9w"
      alt="Banner"
      className="w-96 rounded-lg "
/>
      <div className="grid gap-8 md:grid-cols-3 flex-wrap items-center justify-center">
        <button onClick={() => router.push('/contact')} className="w-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact page
        </button>

        <button onClick={() => router.push('/aboutus')} className="w-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          About Us
        </button>

        <button onClick={() => router.push('/json')} className="w-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Datas
        </button>
      </div>

    </div>
  );
}