import React from 'react'
import { RiExternalLinkLine } from "react-icons/ri";

const DirectionButton = ({type}) => {

    if(type=='button'){
        return (
            <button className='ml-3 bg-[#3B3B3B] p-2 font-thin text-sm rounded-md flex items-center gap-1.5 text-nowrap'>See Directions <RiExternalLinkLine size={18} className='inline'/></button>
        )
    }
    else if(type=='button-card'){
        return (
            <button className='bg-[#3B3B3B] p-3 font-thin text-sm flex items-center justify-center gap-1.5 w-full text-nowrap'>See Directions <RiExternalLinkLine size={18} className='inline'/></button>
        )
    }

}

export default DirectionButton