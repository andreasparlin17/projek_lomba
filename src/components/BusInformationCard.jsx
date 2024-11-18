import React from 'react'

const BusInformationCard = () => {
  return (
    <div className="flex">
        <div className='h-full flex items-center font-medium justify-center'>${point.properties.ref}</div>
        <div className='h-full flex flex-col justify-between py-3 px-2'>
            <div className='font-medium'>${point.properties.to}</div>
            <div> Next Stop in ${Math.floor(Math.random() * 30)} minutes</div>
        </div>
    </div>
  )
}

export default BusInformationCard