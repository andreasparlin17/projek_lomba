import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logos Section */}
        <div className="space-y-4">
          <img src="/assets/logo.png" alt="Our Logo" className="h-12" />
          <img src="/assets/dishub.png" alt="Dishub Logo" className="h-12" />
          <img src="/assets/temanbus.png" alt="Teman Bus Logo" className="h-12" />
          <p className="text-sm text-gray-400">
            © 2024 Kalah LOMBA di UNESA Corporation.
          </p>
          <a href="#" className="text-green-500 text-sm hover:underline">
            Destino Usage Guidelines
          </a>
        </div>

        {/* Navigation Section: Destino */}
        <div>
          <h3 className="font-semibold mb-4">Destino</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Destino
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                What is Destino
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Section: Community */}
        <div>
          <h3 className="font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Build a Better City With Us
              </a>
            </li>
          </ul>
        </div>

        {/* Navigation Section: Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Tips for Beginners
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Site Map
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Download
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#141414] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="text-sm text-gray-400 space-x-4">
            <a href="#" className="hover:underline">
              Privacy and Cookies
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Trademarks
            </a>
            <a href="#" className="hover:underline">
              About Our Ads
            </a>
          </div>
          <div className="text-sm text-gray-400">
            &copy; Kalah LOMBA di UNESA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
