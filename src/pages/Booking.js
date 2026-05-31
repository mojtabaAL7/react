import React, { useState } from "react";

// Booking page - quick booking form for hotels
function Booking() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    hotel: "Four Seasons Hotel Beirut",
    roomType: "Deluxe Room",
    checkIn: "",
    checkOut: "",
    guests: 2,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      alert("Please fill in name, email, and your check-in / check-out dates.");
      return;
    }

    alert(
      `Thanks ${formData.fullName}!\nBooking request received for ${formData.hotel} (${formData.roomType}) from ${formData.checkIn} to ${formData.checkOut}.\nWe will contact you at ${formData.email} or ${formData.phone} to confirm.`,
    );

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      hotel: "Four Seasons Hotel Beirut",
      roomType: "Deluxe Room",
      checkIn: "",
      checkOut: "",
      guests: 2,
      message: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-blue-600 mb-5 text-4xl">Quick Booking</h1>
      <p className="text-lg text-gray-600 mb-7">
        Fill out the form to request a booking; we'll follow up to confirm.
      </p>

      <div className="bg-white p-10 rounded-lg shadow-md mb-10 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-5 flex flex-col">
            <label htmlFor="fullName" className="font-bold text-gray-800 mb-2 text-sm">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="email" className="font-bold text-gray-800 mb-2 text-sm">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="phone" className="font-bold text-gray-800 mb-2 text-sm">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+961 70 000 000"
              className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="hotel" className="font-bold text-gray-800 mb-2 text-sm">Hotel</label>
            <select
              id="hotel"
              name="hotel"
              value={formData.hotel}
              onChange={handleChange}
              className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            >
              <option>Four Seasons Hotel Beirut</option>
              <option>Phoenicia Beirut</option>
              <option>Le Gray Beirut</option>
              <option>Faraya Mountain Lodge</option>
            </select>
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="roomType" className="font-bold text-gray-800 mb-2 text-sm">Room Type</label>
            <select
              id="roomType"
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            >
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Suite</option>
              <option>Family Room</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-5 mb-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="checkIn" className="font-bold text-gray-800 mb-2 text-sm">Check-in *</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                required
                className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="checkOut" className="font-bold text-gray-800 mb-2 text-sm">Check-out *</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                required
                className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="guests" className="font-bold text-gray-800 mb-2 text-sm">Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              value={formData.guests}
              onChange={handleChange}
              className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)]"
            />
          </div>

          <div className="mb-5 flex flex-col">
            <label htmlFor="message" className="font-bold text-gray-800 mb-2 text-sm">Additional Requests</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Any special requests or notes"
              className="p-2.5 border border-gray-300 rounded text-sm font-sans transition-all duration-300 focus:outline-none focus:border-blue-600 focus:shadow-[0_0_5px_rgba(0,123,255,0.3)] resize-none min-h-32"
            ></textarea>
          </div>

          <button type="submit" className="inline-block px-7 py-3 text-base font-bold border-none rounded cursor-pointer no-underline transition-all duration-300 bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-[0_4px_8px_rgba(40,167,69,0.3)] w-full text-center">
            Request Booking
          </button>
        </form>
      </div>

      <section className="bg-white p-7 rounded text-center max-w-2xl mx-auto shadow-sm border-t-4 border-blue-600 mt-12">
        <h2 className="text-blue-600 mt-0 text-2xl">Contact Assistance</h2>
        <p className="text-gray-600 text-base mb-6">If you'd rather book by phone, call our booking team:</p>
        <p className="text-2xl font-bold text-green-500">📞 +961 71 111 222</p>
      </section>
    </div>
  );
}

export default Booking;
