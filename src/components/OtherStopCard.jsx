import React from 'react'
import DirectionButton from './DirectionButton'

const OtherStopCard = ({title, distance, children}) => {
  return (
    <div className='aspect-[200/350] shrink-0 w-[225px] bg-[#333131] flex flex-col rounded-3xl py-5 relative h-[100%] '>
        <div className='h-1/2 px-5'>
            <h4 className='font-bold text-lg'>{title}</h4>
            <p className='text-sm mt-3'>{distance}</p>
        </div>
        <div className='w-full flex justify-center items-center mt-6 gap-2 mb-4 lg:mb-2'>
            {children}
        </div>
        <div className='absolute bottom-0 w-full'>
            <DirectionButton type='button-card'/>
        </div>
    </div>
  )
}

export default OtherStopCard