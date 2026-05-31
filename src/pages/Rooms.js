import React from "react";
import { Link } from "react-router-dom";

// Rooms & Amenities page - show room types typically offered by hotels
function Rooms() {
  const roomTypes = [
    {
      id: 1,
      name: "Standard Room",
      icon: "🛏️",
      description: "Comfortable room with queen bed, free Wi-Fi and city view.",
      price: "From $60 / night",
    },
    {
      id: 2,
      name: "Deluxe Room",
      icon: "🛋️",
      description:
        "Larger room with king bed, breakfast included and sea view.",
      price: "From $120 / night",
    },
    {
      id: 3,
      name: "Suite",
      icon: "🏨",
      description:
        "Spacious suite with living area, premium amenities and view.",
      price: "From $220 / night",
    },
    {
      id: 4,
      name: "Family Room",
      icon: "👨‍👩‍👧‍👦",
      description: "Room suitable for families, multiple beds and extra space.",
      price: "From $150 / night",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-blue-600 mb-5 text-4xl">Rooms & Amenities</h1>
      <p className="text-lg text-gray-600 mb-7">
        Find rooms to suit every traveler's needs — from budget stays to luxury
        suites.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-7">
        {roomTypes.map((room) => (
          <div key={room.id} className="bg-white p-7 rounded-lg shadow-md transition-all duration-300 border-l-4 border-blue-600 border-t-0 flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:border-l-green-500 hover:border-t-4 hover:border-t-blue-600">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-6xl leading-none">{room.icon}</div>
              <h3 className="text-blue-600 text-xl m-0">{room.name}</h3>
            </div>
            <p className="text-gray-600 font-medium text-sm mb-3">{room.description}</p>
            <p className="text-gray-700 text-sm font-medium mb-3">{room.price}</p>
            <div className="bg-gray-100 px-3 py-2.5 rounded text-sm text-gray-700 mb-3">
              <span>✅ Available in most partner hotels</span>
            </div>
            <Link to="/booking" className="inline-block px-5 py-2 text-sm bg-blue-600 text-white rounded transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,123,255,0.3)] mt-auto text-center">
              Book This Type
            </Link>
          </div>
        ))}
      </div>

      <section className="bg-white p-10 rounded-lg shadow-md mb-12">
        <h2 className="text-blue-800 mt-0 text-center text-2xl mb-10">Hotel Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded transition-all duration-300 hover:-translate-y-1 hover:bg-green-100">
            <span className="text-5xl block mb-3">🍽️</span>
            <h4 className="text-blue-600 mb-2.5 text-lg">On-site Dining</h4>
            <p className="text-gray-600 text-sm leading-6 m-0">Local Lebanese cuisine and international menus available.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded transition-all duration-300 hover:-translate-y-1 hover:bg-green-100">
            <span className="text-5xl block mb-3">🏊</span>
            <h4 className="text-blue-600 mb-2.5 text-lg">Pools & Spas</h4>
            <p className="text-gray-600 text-sm leading-6 m-0">
              Relaxation options at select hotels including pools and wellness
              centers.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded transition-all duration-300 hover:-translate-y-1 hover:bg-green-100">
            <span className="text-5xl block mb-3">🚗</span>
            <h4 className="text-blue-600 mb-2.5 text-lg">Transport & Parking</h4>
            <p className="text-gray-600 text-sm leading-6 m-0">Hotels offer airport transfers and parking on request.</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded transition-all duration-300 hover:-translate-y-1 hover:bg-green-100">
            <span className="text-5xl block mb-3">📶</span>
            <h4 className="text-blue-600 mb-2.5 text-lg">Free Wi-Fi</h4>
            <p className="text-gray-600 text-sm leading-6 m-0">Complimentary Wi-Fi in rooms and public areas.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg text-center">
        <h2 className="text-white mt-0 text-4xl mb-3">Ready to Book?</h2>
        <p className="text-white text-lg opacity-90 mb-7">
          Choose a room type and complete a quick booking to secure your stay.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to="/booking" className="inline-block px-7 py-3 text-base font-bold border-none rounded cursor-pointer no-underline transition-all duration-300 bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5">
            Start Booking
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Rooms;
