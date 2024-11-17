import React from 'react'
import DirectionButton from './DirectionButton'
import CodeLabel from './CodeLabel'
import { IoIosRefresh } from "react-icons/io";

const NearestCard = () => {
  return (
    <div className='z-50- relative lg:w-[65%] md:w-[80%] w-[90%] lg:pb-0 md:aspect-[1920/1200] bg-[#272727] shadow-card-shadow mb-12 lg:rounded-[50px] md:rounded-3xl rounded-xl overflow-hidden -z-[1]'>
      <div className='w-full flex justify-center items-center h-16 bg-[rgba(44,108,165,0.59)] font-bold text-xl sm:text-2xl'>
        Nearest bus stop <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className='hover:cursor-pointer'><IoIosRefresh color='white' className='mx-2'/></a>
      </div>

      {/* Responsive Image */}
      <img 
        src='src/assets/bus-card-image.webp'
        alt="Nearest bus stop background"
        className='absolute -bottom-[1.5rem] sm:-bottom-[3rem] md:-bottom-[3rem] lg:-bottom-[4.6rem] xl:-bottom-[6.5rem] right-0 w-[40%] sm:w-[30%] md:w-[35%] lg:w-[45%] brightness-[50%] -z-[1]'
      />

      <div className='h-[calc(100%-4rem)] flex flex-col md:flex-row items-center md:pl-12 pl-6 md:w-1/2'>
        <div className='w-full md:w-auto'>
          <h3 className='font-bold text-[1.2rem] lg:text-[1.6rem] xl:text-[2rem] mt-5'>
            Halte Perintis Kemerdekaan
          </h3>
          <div className="text-sm mt-1 flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-2">
            <p>
              <span className="font-semibold">400m</span> away from your location
            </p>
            <DirectionButton type="button" />
          </div>

          <div className='mt-5 mb-10 text-xl space-y-4 sm:space-y-7'>
            <p><CodeLabel color='red' className='mr-3'>2D</CodeLabel> Kota Baru Parahyangan</p>
            <p><CodeLabel color='blue' className='mr-3'>K2</CodeLabel> Cicaheum</p>
            <p><CodeLabel color='blue' className='mr-3'>K5</CodeLabel> Antapani</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NearestCard
