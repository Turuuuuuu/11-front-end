"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ContactPage() {
    const router = useRouter();
  return (
    <div className="bg-gray-700 h-full w-full">
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
      <div>
        <h1 className="text-white text-xl px-12 font-semibold mb-4 mt-10 pb-12 ">
          Contact us Page
        </h1>
        <p className="text-white font-semi-bold px-12 text-6xl ">
          Do you want to start a new porject ,{" "}
        </p>
        <p className="text-white font-semi-bold px-12 text-6xl ">
          join the team or just say hi?{" "}
        </p>
        <p className="text-white font-semi-bold px-12 text-6xl pb-12 ">
          We love to hear from you.
        </p>
        <hr className="px-8"></hr>
      </div>
      <div className="pt-12 py-8">
        <p className=" text-white text-4xl px-12">Our office</p>
        <div className="flex">
          <img
            className="px-12 py-12 w-1/2 h-full bg-cover object-cover h-40"
            src="https://ppc.land/content/images/size/w2000/2023/12/Mumbai-Office.jpg"
            alt="location"
          />
          <div className="px-8">
            <p className="text-white px-12  py-12 text-4xl">New york</p>
            <p className="text-white px-12 py-4 text-xl">
              THE CHARLES NEW YORK 195, Montegues st
            </p>
            <p className="text-white px-12  py-4 text-xl">example@nhs.edu.mn</p>
            <p className="text-white px-12  py-4 underline text-xl">
              view in map
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}