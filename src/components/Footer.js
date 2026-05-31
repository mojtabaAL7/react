import React from "react";

// Footer component - Displayed at the bottom of every page
function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-5xl mx-auto mb-5">
        <div>
          <h3 className="text-white mb-3 text-lg">Lebanon Stays</h3>
          <p className="text-gray-400 mb-2 text-sm">Your gateway to the best hotels across Lebanon</p>
        </div>
        <div>
          <h3 className="text-white mb-3 text-lg">Contact</h3>
          <p className="text-gray-400 mb-2 text-sm">Phone: +961 71 111 222</p>
          <p className="text-gray-400 mb-2 text-sm">Email: info@lebanonstays.example</p>
          <p className="text-gray-400 mb-2 text-sm">Address: Beirut, Lebanon</p>
        </div>
        <div>
          <h3 className="text-white mb-3 text-lg">Support</h3>
          <p className="text-gray-400 mb-2 text-sm">24/7 Customer Support</p>
          <p className="text-gray-400 mb-2 text-sm">Booking &amp; Cancellation Help</p>
        </div>
      </div>
      <div className="text-center pt-5 border-t border-gray-700 text-gray-400 text-sm">
        <p>&copy; 2026 Lebanon Stays. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
