import React from "react";

const PublicTransportSection = () => {
  return (
    <section className="bg-[#1b1b1b] text-white py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Used And Loved By <span className="text-green-400">500+</span> Public Transportation Organizations To Improve Mobility
        </h2>
        <br />
        {/* Logo */}
        <div className="flex justify-center flex-wrap gap-8 mt-6">
          {/* Logo Transjakarta */}
          <img
            src="/assets/kai.png"
            alt="kai"
            className="h-12"
          />
          {/* Logo Dishub */}
          <img
            src="/assets/dishub.png"
            alt="Dishub"
            className="h-12"
          />
          {/* Logo Damri */}
          <img
            src="/assets/damri.png"
            alt="Damri"
            className="h-12"
          />
          {/* Logo Temanbus */}
          <img
            src="/assets/temanbus.png"
            alt="Temanbus"
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
};

export default PublicTransportSection;
