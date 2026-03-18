
export default function WeatherPage() {
  return (
    <div className="bg-[#0B1220] w-full h-screen flex gap-4 p-4">

      <div className="w-[8%] bg-[#1E2A3A] rounded-xl flex flex-col items-center py-6 gap-8 text-white">
        <img src="/windicon.svg" className="bg-blue-800 w-16 h-16 rounded-xl p-3" />

        <div className="flex flex-col items-center gap-1">
          <img src="/cloud-regular.svg" className="w-8 h-8" />
          <p className="text-sm text-gray-300">Weather</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src="/bars-solid.svg" className="w-8 h-8" />
          <p className="text-sm text-gray-300">Cities</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src="/map-regular.svg" className="w-8 h-8" />
          <p className="text-sm text-gray-300">Map</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src="/settings.svg" className="w-8 h-8" />
          <p className="text-sm text-gray-300">Settings</p>
        </div>
      </div>

      <div className="flex w-[92%] gap-4">

        <div className="w-1/2 h-full flex flex-col gap-6 text-white">

          <input
            className="bg-[#1F2E44] rounded-xl p-3 text-white placeholder:text-gray-400"
            placeholder="Search for cities"
          />

          <div className="flex justify-between items-center p-6">
            <div>
              <p className="text-4xl font-semibold">Madrid</p>
              <p className="text-gray-400 mt-2">Chance of rain: 0%</p>
              <p className="text-6xl font-bold mt-4">31°C</p>
            </div>

            <img src="/icons8-sun.svg" className="w-32 h-32" />
          </div>

          <div className="bg-[#162233] rounded-xl p-4">
            <p className="text-gray-400 font-semibold mb-4">
              TODAY'S FORECAST
            </p>

            <div className="flex justify-between text-center">

              <div className="flex flex-col items-center border-r border-[#253247] pr-6">
                <p className="text-gray-400">6:00 AM</p>
                <img src="/cloud.svg" className="w-10 h-10 my-2" />
                <p>25°C</p>
              </div>

              <div className="flex flex-col items-center border-r border-[#253247] pr-6">
                <p className="text-gray-400">9:00 AM</p>
                <img src="/icons8-sun.svg" className="w-10 h-10 my-2" />
                <p>28°C</p>
              </div>

              <div className="flex flex-col items-center border-r border-[#253247] pr-6">
                <p className="text-gray-400">12:00 PM</p>
                <img src="/icons8-sun.svg" className="w-10 h-10 my-2" />
                <p>33°C</p>
              </div>

              <div className="flex flex-col items-center border-r border-[#253247] pr-6">
                <p className="text-gray-400">3:00 PM</p>
                <img src="/icons8-sun.svg" className="w-10 h-10 my-2" />
                <p>34°C</p>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-gray-400">6:00 PM</p>
                <img src="/cloud.svg" className="w-10 h-10 my-2" />
                <p>30°C</p>
              </div>

            </div>
          </div>

          <div className="bg-[#162233] rounded-xl p-6 h-2/5">

            <div className="flex justify-between mb-6">
              <p className="text-gray-400 font-semibold">
                AIR CONDITIONS
              </p>

              <button className="bg-blue-500 px-4 py-1 rounded-lg text-sm">
                See more
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="flex items-center gap-3">
                <img src="/temperature.svg" className="w-7 h-7" />
                <div>
                  <p className="text-gray-400 text-sm">Real Feel</p>
                  <p className="text-2xl font-semibold">30°C</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/windicon.svg" className="w-7 h-7" />
                <div>
                  <p className="text-gray-400 text-sm">Wind</p>
                  <p className="text-2xl font-semibold">0.2 km/h</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/humidity.svg" className="w-7 h-7" />
                <div>
                  <p className="text-gray-400 text-sm">Chance of rain</p>
                  <p className="text-2xl font-semibold">0%</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <img src="/sun.svg" className="w-7 h-7" />
                <div>
                  <p className="text-gray-400 text-sm">UV index</p>
                  <p className="text-2xl font-semibold">3</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="w-1/2 bg-[#162233] rounded-xl p-6 text-white mt-20">

          <p className="text-gray-400 font-semibold mb-6">
            7-DAY FORECAST
          </p>

          <div className="flex flex-col gap-4">

            <div className="flex justify-between items-center py-4 ">
              <p className="text-gray-400">Today</p>
              <img src="/icons8-sun.svg" className="w-8 h-8" />
              <p>Sunny</p>
              <p className="font-semibold">36 / 22</p>
            </div>

            <div className="flex justify-between items-center py-4 ">
              <p className="text-gray-400">Tue</p>
              <img src="/icons8-sun.svg" className="w-8 h-8" />
              <p>Sunny</p>  
              <p className="font-semibold">37 / 21</p>
            </div>

            <div className="flex justify-between items-center py-4">
              <p className="text-gray-400">Wed</p>
              <img src="/icons8-sun.svg" className="w-8 h-8" />
              <p>Sunny</p>
              <p className="font-semibold">37 / 21</p>
            </div>

            <div className="flex justify-between items-center py-4 ">
              <p className="text-gray-400">Thu</p>
              <img src="/cloud.svg" className="w-8 h-8" />
              <p>Cloudy</p>
              <p className="font-semibold">37 / 21</p>
            </div>

            <div className="flex justify-between items-center py-4 ">
              <p className="text-gray-400">Fri</p>
              <img src="/cloud.svg" className="w-8 h-8" />
              <p>Cloudy</p>
              <p className="font-semibold">37 / 21</p>
            </div>

            <div className="flex justify-between items-center py-4 ">
              <p className="text-gray-400">Sat</p>
              <img src="/cloud.svg" className="w-8 h-8" />
              <p>Rainy</p>
              <p className="font-semibold">37 / 21</p>
            </div>

            <div className="flex justify-between items-center py-4">
              <p className="text-gray-400">Sun</p>
              <img src="/lightning.svg" className="w-8 h-8" />
              <p>Storm</p>
              <p className="font-semibold">37 / 21</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

