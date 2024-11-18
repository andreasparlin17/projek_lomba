import React, { useState, useEffect } from 'react';
import './index.css';
import {
  Map,
  NearestCard,
  OtherStops,
  RouteSection,
  Navbar,
  HeroSection,
  AboutUsContact,
  Partners,
  Contact,
  Footer,
} from './components';

function App() {
  const [mapLoaded, setMapLoaded] = useState(false);

  // Simulate the Map loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {!mapLoaded ? (
        // Loading Animation for Map
        <div className="map-loading-screen flex justify-center items-center h-[400px] bg-gray-100">
          <div className="loader mx-auto w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="ml-4 text-blue-500">Loading Map...</p>
        </div>
      ) : (
        // Render Map when loaded
        <Map />
      )}
      <section className="mt-14">
        <section className="w-full h-full flex justify-center">
          <NearestCard />
        </section>
        <section className="flex justify-center">
          <OtherStops />
        </section>
        <section className="flex justify-center id='busRoutes'">
          <RouteSection />
        </section>
        <section className="flex justify-center items-center justify-self-center xl:max-w-[68.5%] md:max-w-[82%] sm:max-w-[90%] id='AboutUs'">
          <AboutUsContact />
        </section>
        <section className="flex justify-center items-center justify-self-center xl:max-w-[68.5%] md:max-w-[82%] sm:max-w-[90%] id='Partners'">
          <Partners />
        </section>
        <section className="flex justify-center items-center justify-self-center xl:max-w-[68.5%] md:max-w-[82%] sm:max-w-[90%] ">
          <Contact/>
        </section>
        <section>
          <Footer />
        </section>
      </section>
    </div>
  );
}

export default App;
