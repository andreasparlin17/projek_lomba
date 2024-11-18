import React from "react";
import { Phone, Mail, MapPin } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#1B1B1B] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Contact Us.
          </h2>
          <p className="mt-4 text-white">
            Got a question? Send your message through the form below, and we
            will respond shortly.
          </p>
        </div>

        <div className="bg-[#262626] rounded-lg p-8 lg:flex lg:space-x-8 xl:w-[1000px] md:w-[800px]">
          {/* Form */}
          <div className="flex-1">
            <form action="#" method="POST" className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-700 bg-neutral-800 text-white rounded-lg shadow-md px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-700 bg-neutral-800 text-white rounded-lg shadow-md px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full border border-gray-700 bg-neutral-800 text-white rounded-lg shadow-md px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#2C6CA596] text-white font-medium py-3 px-4 rounded-lg shadow-md hover:bg-[#235887] ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>

          {/* Additional Contact Info */}
          <div className="mt-8 lg:mt-0 lg:w-1/3">
            <h3 className="text-lg font-medium text-white">Contact Information</h3>
            <p className="mt-4 text-sm text-gray-400">
              You can also contact us through the following information:
            </p>
            <ul className="mt-6 space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
              <Phone size="18"/>
                <span>+62 123 456 789</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size="18"/>
                <span>kalahlombadiunesa@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
              <MapPin size="18"/>
                <span>Jl.Pendidikan No. 123, Cibiru Kabupaten Bandung</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
