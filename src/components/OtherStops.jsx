import React, { useRef } from 'react';
import OtherStopCard from './OtherStopCard';
import CodeLabel from './CodeLabel';
import { GoTriangleRight } from "react-icons/go";

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
    <div className='w-[85%] aspect-[1387/355] bg-[#272727] rounded-[50px] shadow-card-shadow mb-12 flex'>
      <div className='w-[14%] h-full flex items-center justify-center'>
        <h3 className='text-3xl text-center'>
          Other<br/>Nearby<br/>Stops
        </h3>
      </div>
      
      <div 
        ref={scrollContainerRef} 
        className='grow px-2 flex items-center gap-5 overflow-x-scroll scrollbar-hide'
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
      
      <div className='w-[6%] flex items-center justify-center'>
        <button onClick={scrollRight}>
          <GoTriangleRight size={45} />
        </button>
      </div>
    </div>
  );
}

export default OtherStops;
