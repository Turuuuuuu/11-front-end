
export default function WeatherPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 w-full min-h-screen flex flex-col lg:flex-row gap-3 sm:gap-4 p-2 sm:p-4">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-[8%] bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl flex-col items-center py-4 sm:py-6 gap-6 sm:gap-8 text-white flex-shrink-0 border border-gray-700">
        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-2 sm:p-3 flex items-center justify-center">
          <img src="/windicon.svg" alt="Wind" className="w-full" />
        </div>

        {[
          { icon: "/cloud-regular.svg", label: "Weather" },
          { icon: "/bars-solid.svg", label: "Cities" },
          { icon: "/map-regular.svg", label: "Map" },
          { icon: "/settings.svg", label: "Settings" }
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-1 hover:opacity-80 transition cursor-pointer group">
            <img src={item.icon} className="w-6 sm:w-8 h-6 sm:h-8 group-hover:text-blue-400" alt={item.label} />
            <p className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full lg:w-[92%] gap-3 sm:gap-4">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 h-full flex flex-col gap-3 sm:gap-6 text-white">
          <input
            className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-2 sm:p-3 text-sm sm:text-base text-white placeholder:text-gray-400 w-full border border-gray-600 focus:border-blue-500 focus:outline-none transition"
            placeholder="🔍 Search for cities"
          />

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-6 bg-gradient-to-r from-gray-800 to-gray-750 rounded-xl gap-4 border border-gray-700">
            <div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold">Madrid</p>
              <p className="text-gray-400 mt-2 text-xs sm:text-sm">☔ Chance of rain: 0%</p>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">31°C</p>
            </div>
            <img src="/icons8-sun.svg" className="w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32" alt="sunny" />
          </div>

          <div className="bg-gray-800 rounded-xl p-3 sm:p-4 border border-gray-700">
            <p className="text-gray-300 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              📅 TODAY'S FORECAST
            </p>

            <div className="flex justify-between text-center text-xs sm:text-sm gap-2 sm:gap-0 overflow-x-auto pb-2">
              {["6:00 AM", "9:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"].map((time, idx) => (
                <div key={idx} className="flex flex-col items-center border-r border-gray-600 pr-2 sm:pr-4 flex-shrink-0 last:border-0">
                  <p className="text-gray-400">{time}</p>
                  <img src={idx === 0 || idx === 4 ? "/cloud.svg" : "/icons8-sun.svg"} className="w-8 sm:w-10 h-8 sm:h-10 my-2" alt="weather" />
                  <p>{[25, 28, 33, 34, 30][idx]}°C</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3 sm:p-6 flex-1 border border-gray-700">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
              <p className="text-gray-300 font-semibold text-sm sm:text-base">
                🌡️ AIR CONDITIONS
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold transition-all transform hover:scale-105">
                See more
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {[
                { icon: "/temperature.svg", label: "Real Feel", value: "30°C" },
                { icon: "/windicon.svg", label: "Wind", value: "0.2 km/h" },
                { icon: "/humidity.svg", label: "Chance of rain", value: "0%" },
                { icon: "/sun.svg", label: "UV index", value: "3" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-3 bg-gray-700 p-4 rounded-lg border border-gray-600">
                  <img src={item.icon} className="w-5 sm:w-7 h-5 sm:h-7 flex-shrink-0" alt={item.label} />
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.label}</p>
                    <p className="text-lg sm:text-2xl font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - 7-Day Forecast */}
        <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl p-3 sm:p-6 text-white border border-gray-700">
          <p className="text-gray-300 font-semibold mb-4 sm:mb-6 text-sm sm:text-base">
            📆 7-DAY FORECAST
          </p>

          <div className="flex flex-col gap-2 sm:gap-4 text-xs sm:text-sm">
            {[
              { day: "Today", weather: "Sunny", temps: "36 / 22", icon: "/icons8-sun.svg" },
              { day: "Tue", weather: "Sunny", temps: "37 / 21", icon: "/icons8-sun.svg" },
              { day: "Wed", weather: "Sunny", temps: "37 / 21", icon: "/icons8-sun.svg" },
              { day: "Thu", weather: "Cloudy", temps: "37 / 21", icon: "/cloud.svg" },
              { day: "Fri", weather: "Cloudy", temps: "37 / 21", icon: "/cloud.svg" },
              { day: "Sat", weather: "Rainy", temps: "37 / 21", icon: "/cloud.svg" },
              { day: "Sun", weather: "Storm", temps: "37 / 21", icon: "/lightning.svg" }
            ].map((forecast, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 sm:py-4 px-3 sm:px-4 border-b border-gray-600 hover:bg-gray-700 rounded transition last:border-0 cursor-pointer">
                <p className="text-gray-400 w-12">{forecast.day}</p>
                <img src={forecast.icon} className="w-6 sm:w-8 h-6 sm:h-8" alt={forecast.weather} />
                <p className="flex-1 ml-2">{forecast.weather}</p>
                <p className="font-semibold text-right">{forecast.temps}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}



