import React from "react";
import { Link } from "react-router-dom";

// Hotels page - list of partner hotels and quick info
function Hotels() {
  const hotels = [
    {
      id: 1,
      name: "Four Seasons Hotel Beirut",
      location: "Raouché, Beirut",
      rating: 4.7,
      description:
        "Luxury seafront hotel with rooftop pool, spa and refined dining.",
      image: `${process.env.PUBLIC_URL}/hotel-img/4SH.jpg`,
    },
    {
      id: 2,
      name: "Phoenicia Beirut",
      location: "Beirut Central District",
      rating: 4.6,
      description:
        "Historic 5-star hotel near the Corniche with classic charm.",
      image: `${process.env.PUBLIC_URL}/hotel-img/PB.jpg`,
    },
    {
      id: 3,
      name: "Le Gray Beirut",
      location: "Downtown Beirut",
      rating: 4.5,
      description: "Contemporary boutique hotel close to cultural attractions.",
      image: `${process.env.PUBLIC_URL}/hotel-img/LEG.jpg`,
    },
    {
      id: 4,
      name: "Faraya Mountain Lodge",
      location: "Faraya",
      rating: 4.4,
      description: "Cozy mountain hotel near the ski slopes of Mzaar.",
      image: `${process.env.PUBLIC_URL}/hotel-img/FL.jpg`,
    },
    {
      id: 5,
      name: "Kempinski Summerland Hotel & Resort Beirut	",
      location: "Beirut, Jnah coast",
      rating: 4.6,
      description:
        "Luxury seaside resort with pools, Mediterranean views, and a private beach feel.",
      image: `${process.env.PUBLIC_URL}/hotel-img/KSH.jpg`,
    },
    {
      id: 6,
      name: "Al Bustan Hotel & Spa	",
      location: "Beit Mery	",
      rating: 8.6,
      description:
        "Hilltop spa hotel overlooking Beirut and the Mediterranean, ideal for a quieter retreat.",
      image: `${process.env.PUBLIC_URL}/hotel-img/ALB.jpg`,
    },
    {
      id: 7,
      name: "The Smallville Hotel",
      location: "	Badaro/Museum District, Beirut",
      rating: 4.4,
      description:
        "Stylish boutique hotel known for playful design, rooftop pool, and strong service.",
      image: `${process.env.PUBLIC_URL}/hotel-img/TSH.jpg`,
    },
    {
      id: 8,
      name: "Gefinor Rotana Hotel",
      location: "	Hamra/Clemenceau, Beirut",
      rating: 4.3,
      description:
        "Central business-friendly hotel with modern rooms, rooftop pool, and sea views.",
      image: `${process.env.PUBLIC_URL}/hotel-img/GR.jpg`,
    },
    {
      id: 9,
      name: "	Hamra Urban Gardens",
      location: "Hamra, Beirut",
      rating: 4.8,
      description:
        " Beirut	Lively, modern hotel with rooftop pool and a casual urban atmosphere.",
      image: `${process.env.PUBLIC_URL}/hotel-img/HUG.jpg`,
    },
    {
      id: 10,
      name: "	Raouche Arjaan by Rotana",
      location: "	Raouche, Beirut",
      rating: 4.3,
      description:
        " Beirut	Comfortable hotel-apartment style stay close to Pigeon Rocks and the Corniche.",
      image: `${process.env.PUBLIC_URL}/hotel-img/ARO.jpg`,
    },
    {
      id: 11,
      name: "	Lancaster Plaza Beirut",
      location: "	Raouche, Beirut",
      rating: 4.5,
      description:
        " Beirut	Upscale tower hotel with polished rooms and dramatic sea-facing views.",
      image: `${process.env.PUBLIC_URL}/hotel-img/LAN.jpg`,
    },
    {
      id: 12,
      name: "Le Royal Hotel Beirut	",
      location: "Dbayeh	",
      rating: 8.6,
      description:
        "Waterfront luxury hotel with spa facilities, sea views, and family-friendly resort features.",
      image: `${process.env.PUBLIC_URL}/hotel-img/LER.jpg`,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-blue-600 mb-5 text-4xl">Partner Hotels</h1>
      <p className="text-lg text-gray-600 mb-7">
        Browse our curated list of hotels across Lebanon, from luxury to cozy
        local stays.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white p-0 rounded-lg shadow-md text-center transition-all duration-300 border-t-4 border-blue-600 relative overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:border-t-green-500"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-60 object-cover block"
            />
            <div className="p-5">
              <h3 className="text-blue-600 m-3 text-xl font-bold">
                {hotel.name}
              </h3>
              <p className="text-green-500 font-bold mb-3 inline-block bg-green-50 px-3 py-1.5 rounded-full text-base">
                {hotel.location}
              </p>
              <p className="text-orange-500 font-bold text-base">
                ★ {hotel.rating}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {hotel.description}
              </p>
              <Link
                to="/booking"
                className="inline-block px-5 py-2 text-sm bg-blue-600 text-white mt-3 rounded transition-all duration-300 hover:bg-blue-800 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(0,123,255,0.3)]"
              >
                Book This Hotel
              </Link>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-white p-10 rounded-lg shadow-sm text-center mt-12 border-t-4 border-blue-600">
        <h2 className="text-blue-600 mt-0 text-2xl">Need Help Choosing?</h2>
        <p className="text-gray-600 text-base mb-6">
          Contact us for personalized recommendations and concierge services.
        </p>
        <a
          href="tel:+96171111222"
          className="inline-block px-7 py-3 text-base font-bold border-none rounded cursor-pointer no-underline transition-all duration-300 bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(40,167,69,0.3)]"
        >
          Call Us: +961 71 111 222
        </a>
      </section>
    </div>
  );
}

export default Hotels;
