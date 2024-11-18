import React, { useState, useEffect } from "react";
import { Search, TrainFront, CarFront, BusFront } from "lucide-react";

const HeroSection = () => {
  // Animation state
  const cities = ["Mojokerto", "Soreang", "BEC", "UPI Cibiru", "UPI Setiabudi", "ITB Ganesha", "UNPAD Dipatiukur", "UNPAD Jatinangor", "Baleendah", "HKBP", "Gedebage", "Cimekar", "Cikudapateuh", "BTC", "Dago", "Lembang", "Leuwipanjang", "Rock Bottom", "Cileunyi", "Cijambe", "Ciroyom", "Cimahi", "Bojongsoang", "Katapang", "Kopo", "Ciwalk", "Paris Van Java", "Cimahi", "Stasiun Bandung", "Stasiun Kiaracondong", "Trans Studio Bandung", "Metro Indah Mall", "POLBAN Bandung", "Universitas Telkom", "Stasiun Kereta Cepat", "Janji Jiwa Terdekat", "Kopi Kenangan Terdekat", "Tomoro Terdekat", "Rumah Sakit Terdekat", "Taman Tegalega", "Taman Radio"];
  const [placeholderText, setPlaceholderText] = useState("");
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Animation effect
  useEffect(() => {
    let timer;
    const currentCity = cities[currentCityIndex];

    if (isTyping) {
        if (placeholderText.length < currentCity.length) {
            timer = setTimeout(() => {
                setPlaceholderText(currentCity.slice(0, placeholderText.length + 1));
            }, 100);
        } else {
            timer = setTimeout(() => {
                setIsTyping(false);
            }, 1000);
        }
    } else {
        if (placeholderText.length === 0) {
            setCurrentCityIndex((prev) => (prev + 1) % cities.length);
            setIsTyping(true);
        } else {
            // Deleting phase
            timer = setTimeout(() => {
                setPlaceholderText(placeholderText.slice(0, -1));
            }, 50);
        }
    }

    return () => clearTimeout(timer);
}, [placeholderText, currentCityIndex, isTyping]);

  // Background change function
  const changeBackground = (type) => {
    const heroImage = document.getElementById('hero-image');
    if (type === 'bus') {
      heroImage.style.backgroundImage = "url('/assets/fotor-ai-20241108142222.jpg')";
    } else if (type === 'train') {
      heroImage.style.backgroundImage = "url('/assets/kereta-fade.png')";
    } else if (type === 'angkot') {
      heroImage.style.backgroundImage = "url('/assets/angkot.png')";
    }
  };

  return (
    <section
      className="bg-cover bg-center h-screen relative bg-[center_bottom_33%]"
      id="hero-image"
      style={{
        backgroundImage: "url('/assets/fotor-ai-20241108142222.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-0 h-full flex flex-col items-center justify-items-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug max-w-xl text-left mt-48">
          Reach every corner of the city with <span className="tulisan-logo-2">Destino</span>
        </h1>

        <p className="text-left sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed">
          Get me somewhere...
        </p>
        
        <form className="max-w-xl w-[80svw] mx-xl mb-10 -mt-7">   
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
    Search
  </label>
  <div className="relative flex flex-col gap-4 sm:flex-row sm:gap-0 justify-items-center items-center">
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
      <input 
        type="search" 
        id="default-search" 
        className="block w-full p-4 ps-10 text-sm bg-black bg-opacity-50 p-6 backdrop-blur-[1px] rounded-lg cursor-pointer hover:bg-[#1b1b1b] hover:bg-opacity-80 transition-colors duration-300" 
        placeholder={placeholderText}  
      />
    </div>
    <button 
  type="submit" 
  className="text-white bg-gray-600 hover:bg-[#2C6CA596] focus:ring-4 focus:outline-none focus:ring-gray-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:hover:bg-[#2C6CA596] dark:focus:ring-gray-900 sm:absolute sm:end-2.5 sm:bottom-2.5 flex items-center justify-center gap-2"
>
  <span className="flex items-center h-9">
    Fly me to the moon! 
  </span>
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
</button>

  </div>
</form>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-4 w-full max-w-xl px-4 backdrop-blur-sm">
          {/* Bus Tracker */}
          <div
            onClick={() => changeBackground("bus")}
            className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#2C6CA596] hover:bg-opacity-80 transition-colors duration-150"
          >
            <BusFront size = {66} />
            <span className="text-sm sm:text-lg font-medium">Bus Tracker</span>
          </div>

          {/* Train Tracker */}
          <div
            onClick={() => changeBackground("train")}
            className="bg-black bg-opacity-50 p-6 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#2C6CA596] hover:bg-opacity-80 transition-colors duration-150"
          >
            <TrainFront size = {66}/>
            <span className="text-sm sm:text-lg font-medium">Train Tracker</span>
          </div>

          {/* Angkot Tracker */}
          <div
            onClick={() => changeBackground("angkot")}
            className="bg-black bg-opacity-50 p-6 backdrop-blur-sm rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#2C6CA596] hover:bg-opacity-80 transition-colors duration-150"
          >
            <CarFront size = {66} />
            <span className="text-sm sm:text-lg font-medium">Angkot Tracker</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;