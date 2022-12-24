import React, { ReactNode } from 'react';
import { FaStethoscope, } from "react-icons/fa";
import { ImLocation2, } from "react-icons/im";
import { BsFillPhoneFill, } from "react-icons/bs";
import '../App.css';



function Centre() {
  

  return (
    <div className='centre px-1' >
        <div className="w-full h-1/2 flex justify-center items-center">
            <div 
            className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-light-sm">
            <FaStethoscope/>

            </div>
        </div>
        <div className="w-full h-1/2 ">
            <p className='mb-5 flex gap-1'>
             <ImLocation2/> <span className='text-sm text-blue font-semibold'> Yopougon, Bonikro </span>
            </p>
            <p className='mb-5 flex gap-1'>
              <BsFillPhoneFill/> <span className='text-sm text-yellow font-semibold'>+225 12-56-89-75 </span>
            </p>
        </div>
    </div>
  )
}

export default React.memo(Centre) 