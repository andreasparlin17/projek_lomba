import React, { useRef } from 'react';
import OtherStopCard from './OtherStopCard';
import CodeLabel from './CodeLabel';
import { GoTriangleRight } from "react-icons/go";
import { IoIosRefresh } from "react-icons/io";

const OtherStops = () => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 800,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='relative lg:w-[65%] md:w-[80%] w-[90%] lg:py-10 bg-[#272727] lg:rounded-[50px] md:rounded-3xl rounded-xl shadow-card-shadow mb-12 flex flex-col lg:flex-row'>
      <div className='lg:w-[14%] h-[25%] lg:h-full flex items-center justify-center my-5 pl-5'>
        <h3 className="gap-1 lg:flex-col text-base md:text-2xl lg:text-3xl text-center font-semibold flex justify-center items-center">
          <span>Other</span> 
          <span>Nearby</span> 
          <span>Stops</span>
          <a href='#'>
            <IoIosRefresh 
              color="white" 
              className="mx-1 lg:mx-0"
            />
          </a>
        </h3>
      </div>

      <div 
        ref={scrollContainerRef} 
        className='grow px-5 mx-1 mb-8 mr-20 flex items-center gap-5 overflow-x-scroll scrollbar-hide h-[200%] lg:h-full'
      >
        <OtherStopCard title={'Bank CIMB Niaga Lembong'} distance={'750m'}>
          <CodeLabel color={'red'}>3D</CodeLabel>
          <CodeLabel color={'purple'}>4</CodeLabel>
          <CodeLabel color={'blue'}>K5</CodeLabel>
        </OtherStopCard>
        <OtherStopCard title={'Hotel Merdeka Santa Angela'} distance={'800m'}>
          <CodeLabel color={'blue'}>K2</CodeLabel>
          <CodeLabel color={'blue'}>K5</CodeLabel>
        </OtherStopCard>
        <OtherStopCard title={'RS Umum Bungsu'} distance={'1.2km'}>
          <CodeLabel color={'blue'}>K2</CodeLabel>
          <CodeLabel color={'blue'}>K5</CodeLabel>
        </OtherStopCard>
        <OtherStopCard title={'BEC Bandung Electronic Centre'} distance={'1.2km'}>
          <CodeLabel color={'purple'}>3D</CodeLabel>
        </OtherStopCard>
        <OtherStopCard title={'PT. AJ Manulife'} distance={'1.7km'}>
          <CodeLabel color={'blue'}>K2</CodeLabel>
        </OtherStopCard>
      </div>

      {/* Div untuk panah dengan background vertikal */}
      <div className='absolute right-0 bottom-0 flex items-center lg:rounded-[50px] md:rounded-br-3xl rounded-br-xl justify-center bg-[#272727] h-[80%] lg:h-full px-3 py-4'>
        <button onClick={scrollRight} className="text-white">
          <GoTriangleRight size={45} />
        </button>
      </div>
    </div>
  );
}

export default OtherStops;
