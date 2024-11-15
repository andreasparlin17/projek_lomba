import React from 'react'
import RouteCard from './RouteCard'

const RouteSection = () => {
  return (
    <div className='relative lg:w-[85%] md:w-[90%] w-[95%] bg-[#272727] shadow-card-shadow mb-12 lg:rounded-[50px] md:rounded-3xl rounded-xl xl:overflow-hidden py-8 px-12'>
        <div className='w-full flex justify-between items-center '>
            <h3 className='font-bold text-3xl'>Rute Trans Metro Pasundan</h3>
            <img src='/src/assets/logoTransMetroPasundan.png' alt='Trans Metro Pasundan' className='aspect-[118/79] w-1/12'/>
        </div>
        <div className='w-full h-full flex flex-col xl:flex-row justify-center items-center'>
          <div className='w-full xl:w-1/4 xl:h-full flex flex-row xl:flex-col gap-4 xl:gap-y-4 items-center xl:justify-center flex-wrap xl:mb-10'>
            <RouteCard code={'1D'} color={'yellow'} from={'Leuwipanjang'} to={'RSUD Otto Iskandar Dinata'} />
            <RouteCard code={'2D'} color={'red'} from={'IKEA Kota Baru Parahyangan'} to={'Alun-alun Bandung'} />
            <RouteCard code={'3D'} color={'purple'} from={'Baleendah'} to={'Bandung Electronic Center (BEC)'} />
            <RouteCard code={'4D'} color={'blue'} from={'Leuwipanjang'} to={'UNPAD Dipatiukur'} />
            <RouteCard code={'5D'} color={'pink'} from={'UNPAD Dipatiukur'} to={'UNPAD Jatinangor'} />
          </div>
          <div className='aspect-[1080/600] xl:w-[80%] w-full mt-10 xl:mt-0 xl:ml-10 mb-10 bg-blue-700'>
              Ini map
          </div>
        </div>
    </div>
  )
}

export default RouteSection