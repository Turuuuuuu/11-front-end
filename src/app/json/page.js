"use client";

import { useState } from "react";
import Datajson from "../utils/data.json";
import { useRouter } from "next/navigation";

export default function WeatherPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const filtered = Datajson.filter((item) => {
  const query = search.toLowerCase();
  return (
    item.first_name.toLowerCase().includes(query) ||
    item.email.toLowerCase().includes(query) 
  );
});

  return (
    <div className="bg-gray-700 min-h-screen">

      {/* Navbar */}
      <div className="bg-gray-700 h-20 w-full flex justify-between items-center px-10 text-white">
        <p>Home</p>
        <p>Product</p>
        <img
          onClick={() => router.push("/")}
          className="h-14 w-14 rounded-full cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYQe7sk8paP8GwcE7D6iEMSmj82HEVN8lZg&s"
        />
        <p>Contact</p>
        <p>Main</p>
      </div>

      {/* Search Bar */}
      <div className="px-7 py-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-4 py-2 rounded-lg bg-white text-black outline-none shadow"
        />
        <span className="text-white text-sm ml-3">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-7 pb-7">
        {filtered.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded text-black border border-black shadow-md px-3 py-2"
          >
            <h6 className="font-bold text-sm text-center">
              {item.type === "student" ? (
                <div className="bg-blue-400 rounded-full w-20 mx-auto">Student</div>
              ) : (
                <div className="bg-green-400 rounded-full w-20 mx-auto">Teacher</div>
              )}
            </h6>
             <img className="py-4" src={item.image}/>

            <p className="mt-4 font-bold">First: {item.first_name}</p>
            <p className="mt-2 font-bold">Last: {item.Last_name}</p>  {/* fixed */}
            <p className="mt-2 font-bold">Email: {item.email}</p>
            <p className="mt-2 font-bold">Age: {item.age}</p>
            <p className="mt-2 font-bold">Country: {item.country}</p>
            <p className="mt-2 font-bold">Points: {item.point}</p>
            <p className="mt-2 font-bold">Created: {item.created_at}</p>
            
            <button className="bg-red-500 p-2 text-xs rounded text-white mt-3">
              Delete
            </button>
            <div>
              {item.item.map((item) => <div key={item.id}>
                <p>{item.name}</p>
                <img className="w-44 h-36" src={item.image}/>
              
              </div>)}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}