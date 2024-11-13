import React from 'react'
import DirectionButton from './DirectionButton'
import CodeLabel from './CodeLabel'

const NearestCard = () => {
  return (
    <div className='relative w-[85%] aspect-[1920/880] bg-[#272727] shadow-card-shadow mb-12 rounded-[50px] overflow-hidden'>
      <div className='w-full flex justify-center items-center h-16 bg-[rgba(44,108,165,0.59)] font-bold text-2xl'>
        Nearest bus stop
      </div>
      
      <img 
        src='src/assets/bus-card-image.webp'
        alt="Nearest bus stop background"
        class='absolute -bottom-[5.5rem] right-0 w-[40%] brightness-[60%]'
      />
    
      <div className='h-[calc(100%-4rem)] flex items-center pl-12 w-1/2'>
        <div>
          <h3 className='font-bold text-[2.4rem]'>Halte Perintis Kemerdekaan</h3>
          <div className="text-sm mt-1 flex items-center space-x-2">
            <p className="flex items-center text-center">
              <span className="font-semibold">400m </span> away from your location
            </p>
            <DirectionButton type="button" />
          </div>

          <div className='mt-5 text-xl space-y-7'>
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