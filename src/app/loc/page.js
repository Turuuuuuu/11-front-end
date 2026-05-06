import Datajson from "../utils/loc.json";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="bg-gray-800 text-white py-10 px-4 sm:px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">Locations</h1>
          <p className="text-gray-300">Explore our current office locations.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Datajson.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 overflow-hidden"
            >
              <div className="h-28 bg-gray-200 flex items-center justify-center text-5xl">
                📍
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.Name}</h3>
                <p className="text-sm text-gray-600">Office Location</p>
                <div className="mt-5 pt-5 border-t border-gray-200">
                  <button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 rounded-lg transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}