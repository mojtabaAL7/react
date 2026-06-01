import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function FeaturedHotelsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const hotels = [
    {
      id: 1,
      name: "Four Seasons Hotel Beirut",
      image: `${process.env.PUBLIC_URL}/hotel-img/4SH.jpg`,
      alt: "Four Seasons Hotel Beirut",
      description:
        "Luxury seafront hotel in Raouché, Beirut — rooftop views & spa.",
      price: "$180",
      location: "Beirut",
    },
    {
      id: 2,
      name: "Phoenicia Beirut",
      image: `${process.env.PUBLIC_URL}/hotel-img/PB.jpg`,
      alt: "Phoenicia Hotel Beirut",
      description:
        "Historic 5-star hotel near the Beirut Corniche with classic rooms.",
      price: "$150",
      location: "Beirut",
    },
    {
      id: 3,
      name: "Faraya Mountain Lodge",
      image: `${process.env.PUBLIC_URL}/hotel-img/FL.jpg`,
      alt: "Faraya Mountain Hotel",
      description:
        "Cozy mountain hotel near Faraya-Mzaar — perfect for skiing trips.",
      price: "$90",
      location: "Faraya",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hotels.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, hotels.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hotels.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hotels.length) % hotels.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  return (
    <section className="mb-12">
      <h2 className="text-blue-800 mt-7 mb-8 text-3xl font-bold">
        Featured Hotels
      </h2>

      <div className="relative w-full bg-gradient-to-b from-blue-50 to-transparent rounded-xl overflow-hidden">
        {/* Slider Container */}
        <div className="relative h-full min-h-[500px]">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 h-full items-center">
                {/* Image Side */}
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={hotel.image}
                    alt={hotel.alt}
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {hotel.price} / night
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center">
                  <div className="mb-4">
                    <h3 className="text-blue-700 text-3xl font-bold mb-3">
                      {hotel.name}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {hotel.description}
                    </p>
                    <p className="text-blue-600 font-semibold text-lg mb-6">
                      📍 {hotel.location}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      to="/booking"
                      className="inline-block px-8 py-3 bg-green-500 text-white font-bold rounded-lg transition-all duration-300 hover:bg-green-600 hover:shadow-lg hover:-translate-y-1"
                    >
                      Book Now
                    </Link>
                    <Link
                      to="/hotels"
                      className="inline-block px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Previous hotel"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:shadow-xl"
          aria-label="Next hotel"
        >
          ❯
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 py-6 bg-white/50 backdrop-blur-sm">
          {hotels.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-blue-600 w-8"
                  : "bg-blue-300 w-3 hover:bg-blue-400"
              }`}
              aria-label={`Go to hotel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedHotelsSlider;
