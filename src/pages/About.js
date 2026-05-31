import React from "react";
import { Link } from "react-router-dom";

// About page - Information about Lebanon Stays booking service
function About() {
  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-blue-600 mb-5 text-4xl">About Lebanon Stays</h1>
      <p className="text-lg text-gray-600 mb-7">
        Connecting travelers with the best hotels across Lebanon.
      </p>

      <div className="mt-7">
        <section className="bg-white p-10 mb-7 rounded shadow-sm border-l-4 border-blue-600">
          <h2 className="text-blue-800 mt-0 text-2xl mb-5">Who We Are</h2>
          <p className="text-gray-600 leading-8 mb-3">
            Lebanon Stays is a curated hotel booking platform focused on
            providing travelers with high-quality accommodation options across
            Lebanon — from Beirut's city hotels to coastal resorts and mountain
            lodges.
          </p>
          <p className="text-gray-600 leading-8 mb-3">
            We partner with established hotels like Four Seasons Beirut, Hotel
            Phoenicia, and a selection of trusted local inns to give you honest
            descriptions, real photos, and flexible booking options.
          </p>
        </section>

        <section className="bg-white p-10 mb-7 rounded shadow-sm border-l-4 border-blue-600 relative pl-20">
          <div className="absolute left-5 text-6xl opacity-80">🎯</div>
          <h2 className="text-blue-800 mt-0 text-2xl mb-5">Our Mission</h2>
          <p className="text-gray-600 leading-8 mb-3">
            Make planning a trip to Lebanon simple and enjoyable by offering
            transparent hotel choices, clear pricing, and friendly customer
            support tailored to local travel needs.
          </p>
        </section>

        <section className="bg-white p-10 mb-7 rounded shadow-sm border-l-4 border-blue-600 relative pl-20">
          <div className="absolute left-5 text-6xl opacity-80">💡</div>
          <h2 className="text-blue-800 mt-0 text-2xl mb-5">Our Vision</h2>
          <p className="text-gray-600 leading-8 mb-3">
            To be the most trusted source for booking stays in Lebanon — helping
            visitors experience the country's culture, cuisine, and landscapes
            through great accommodation.
          </p>
        </section>

        <section className="bg-white p-10 mb-7 rounded shadow-sm border-l-4 border-blue-600">
          <h2 className="text-blue-800 mt-0 text-2xl mb-5">What We Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 pt-6 border-t-2 border-gray-300">
            <div className="bg-gray-50 p-6 rounded border-t-4 border-blue-600 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
              <h3 className="text-blue-600 mt-0 mb-3 text-xl">Local Knowledge</h3>
              <p className="text-gray-600 text-sm leading-6 m-0">We highlight hotels and experiences that showcase Lebanon.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded border-t-4 border-blue-600 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
              <h3 className="text-blue-600 mt-0 mb-3 text-xl">Transparency</h3>
              <p className="text-gray-600 text-sm leading-6 m-0">Clear pricing and honest photos so you know what to expect.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded border-t-4 border-blue-600 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md">
              <h3 className="text-blue-600 mt-0 mb-3 text-xl">Support</h3>
              <p className="text-gray-600 text-sm leading-6 m-0">
                Responsive customer service to help with bookings and changes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-500 to-green-400 text-white p-12 rounded text-center mt-12">
          <h2 className="text-white mt-0 text-4xl mb-3">Ready to Book Your Stay?</h2>
          <p className="text-white text-lg opacity-90 mb-7">Browse our featured hotels or start a quick booking now.</p>
          <Link to="/hotels" className="inline-block px-7 py-3 text-base font-bold border-none rounded cursor-pointer no-underline transition-all duration-300 bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5">
            Browse Hotels
          </Link>
        </section>
      </div>
    </div>
  );
}

export default About;
