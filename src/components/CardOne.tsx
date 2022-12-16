import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { moreId1 } from '../assets'

function CardOne() {
  return (
    <div className='card-one w-[370px] h-[547px] shadow-xl'>
     <div className="w-full h-[414px]">
        <img src={moreId1} className="" alt="" />
     </div>
     <div className="bottom-block flex justify-center items-center w-full h-[133px] bg-white">
        <div className="bx-rounded bg-yellow w-8 h-8 rounded-full flex justify-center items-center shadow-xl mr-3">
            <FaChevronRight/>
        </div>
        <h4 className='text-[14px] font-bold' >Same great quality, New lower prices</h4>
    </div>
    </div>
  )
}

export default CardOne