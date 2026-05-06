"use client";

import { useState } from "react";
import Datajson from "../utils/data.json";

export default function DataPage() {
  const [search, setSearch] = useState("");

  const filtered = Datajson.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.first_name.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query)
    );
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen w-full">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Members Directory</h1>
          <p className="text-gray-300">Browse and search through our member database</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <input
              type="text"
              placeholder="🔍 Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-80 px-4 py-3 rounded-lg bg-gray-50 border-2 border-gray-200 focus:border-gray-700 focus:outline-none transition-colors text-gray-800"
            />
            <span className="text-sm font-semibold text-gray-600 whitespace-nowrap">
              {filtered.length} result{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
            >
              {/* Badge */}
              <div className="h-24 bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
                <div className={`px-4 py-2 rounded-full text-sm font-bold text-white ${item.type === "student" ? "bg-blue-500" : "bg-green-500"}`}>
                  {item.type === "student" ? "👨‍🎓 Student" : "👨‍🏫 Teacher"}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <img
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  src={item.image}
                  alt={item.first_name}
                />

                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 font-semibold">FIRST NAME</p>
                    <p className="text-lg font-bold text-gray-900">{item.first_name}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 font-semibold">LAST NAME</p>
                    <p className="text-sm text-gray-800">{item.Last_name}</p>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-semibold">EMAIL</p>
                    <p className="text-xs text-blue-600 hover:text-blue-800 cursor-pointer break-all">
                      {item.email}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">AGE</p>
                      <p className="text-sm font-semibold text-gray-900">{item.age}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">POINTS</p>
                      <p className="text-sm font-semibold text-gray-900">{item.point}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 font-semibold">COUNTRY</p>
                    <p className="text-sm text-gray-700">{item.country}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 font-semibold">JOINED</p>
                    <p className="text-xs text-gray-600">{item.created_at}</p>
                  </div>
                </div>

                {/* Attachments */}
                {item.item && item.item.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs font-bold text-gray-700 mb-3">ATTACHMENTS</p>
                    <div className="grid grid-cols-2 gap-2">
                      {item.item.map((subItem) => (
                        <div key={subItem.id} className="group cursor-pointer">
                          <img
                            className="w-full h-20 object-cover rounded-lg group-hover:opacity-80 transition"
                            src={subItem.image}
                            alt={subItem.name}
                            title={subItem.name}
                          />
                          <p className="text-xs text-gray-600 mt-1 truncate">{subItem.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button className="w-full mt-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-2 rounded-lg transition-all transform hover:scale-105">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No members found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}