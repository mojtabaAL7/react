import React from "react";
import { Link } from "react-router-dom";
import FeaturedHotelsSlider from "../components/FeaturedHotelsSlider";

// Home page - Landing page for Lebanon hotels booking
function Home() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center mb-10 rounded">
        <div>
          <h1 className="text-white text-6xl mb-3">
            Discover Lebanon's Best Hotels
          </h1>
          <p className="text-white text-xl opacity-90 mb-7">
            Handpicked hotels across Beirut, Byblos, Faraya and the coast.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              to="/hotels"
              className="inline-block px-7 py-3 text-base font-bold border-none rounded cursor-pointer no-underline transition-all duration-300 bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(40,167,69,0.3)]"
            >
              Browse Hotels
            </Link>
            <Link
              to="/booking"
              className="inline-block px-7 py-3 text-base font-bold border-none rounded cursor-pointer no-underline transition-all duration-300 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white hover:-translate-y-0.5"
            >
              Quick Booking
            </Link>
          </div>
        </div>
      </section>

      <FeaturedHotelsSlider />

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12 p-7 bg-gradient-to-r from-blue-600 to-blue-800 rounded">
        <div className="bg-white/10 p-6 text-center rounded transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 backdrop-blur">
          <h3 className="text-4xl font-bold mb-2 text-white">120+</h3>
          <p className="text-base text-white/90">Hotels Listed</p>
        </div>
        <div className="bg-white/10 p-6 text-center rounded transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 backdrop-blur">
          <h3 className="text-4xl font-bold mb-2 text-white">25+</h3>
          <p className="text-base text-white/90">Cities & Towns</p>
        </div>
        <div className="bg-white/10 p-6 text-center rounded transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 backdrop-blur">
          <h3 className="text-4xl font-bold mb-2 text-white">50k+</h3>
          <p className="text-base text-white/90">Guests Served</p>
        </div>
        <div className="bg-white/10 p-6 text-center rounded transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 backdrop-blur">
          <h3 className="text-4xl font-bold mb-2 text-white">4.7★</h3>
          <p className="text-base text-white/90">Average Guest Rating</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
        <div className="bg-white p-7 rounded shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-6xl mb-3">🏖️</div>
          <h3 className="text-blue-600 mb-2.5 text-xl">
            Seaside & City Locations
          </h3>
          <p className="text-gray-600 text-sm">
            Choose hotels by the beach, city centre or mountains across Lebanon.
          </p>
          <Link
            to="/hotels"
            className="text-blue-600 no-underline font-bold text-sm inline-block mt-2.5 transition-colors duration-300"
          >
            Explore Locations →
          </Link>
        </div>

        <div className="bg-white p-7 rounded shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-6xl mb-3">🍽️</div>
          <h3 className="text-blue-600 mb-2.5 text-xl">
            Local Dining & Breakfast
          </h3>
          <p className="text-gray-600 text-sm">
            Hotels offering complimentary or on-site Lebanese cuisine
            experiences.
          </p>
          <Link
            to="/rooms"
            className="text-blue-600 no-underline font-bold text-sm inline-block mt-2.5 transition-colors duration-300"
          >
            View Rooms & Amenities →
          </Link>
        </div>

        <div className="bg-white p-7 rounded shadow-md text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="text-6xl mb-3">💳</div>
          <h3 className="text-blue-600 mb-2.5 text-xl">
            Easy Booking & Cancellation
          </h3>
          <p className="text-gray-600 text-sm">
            Transparent pricing with simple booking and flexible cancellation
            rules.
          </p>
          <Link
            to="/booking"
            className="text-blue-600 no-underline font-bold text-sm inline-block mt-2.5 transition-colors duration-300"
          >
            Quick Booking →
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-green-400 text-white p-12 rounded text-center mt-12">
        <h2 className="text-white text-4xl mb-3">Plan Your Stay in Lebanon</h2>
        <p className="text-white text-lg opacity-90 mb-6">
          Find the perfect hotel whether you're visiting Beirut, Byblos,
          Tripoli, or the mountains.
        </p>
        <Link
          to="/hotels"
          className="inline-block px-10 py-4 text-lg bg-green-500 text-white font-bold rounded border-none cursor-pointer no-underline transition-all duration-300 hover:bg-green-600 hover:-translate-y-0.5"
        >
          Start Searching Hotels
        </Link>
      </section>
    </div>
  );
}

export default Home;
