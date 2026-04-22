import Datajson from "../utils/loc.json";

export default function WeatherPage() {
  console.log(Datajson);

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 bg-pink-200 p-7">
      {Datajson.map((item, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 py-3 flex items-center hover:scale-105 ">
          <p className="text-left font-medium text-gray-800 text-bold ">
            {item.Name}
          </p>
        </div>
      ))}
    </div>
  );
}