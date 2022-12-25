import React, { ReactNode } from 'react';
import { FaStethoscope, } from "react-icons/fa";
import { ImLocation2, } from "react-icons/im";
import { BsFillPhoneFill, } from "react-icons/bs";
import '../App.css';

type PatientItemType ={
  icon: React.ReactNode,
  nbr: string,
  label: string
}

function PatientItem({icon, nbr, label}:PatientItemType) {
  

  return (
    <div className='relative w-[120px] h-[100px] bg-white  px-0 rounded-tr-box' >
        <div className="absolute top-[-10px] rounded-full left-[-20px] w-12 h-12 flex justify-center items-center">
            <div 
            className="w-12 h-12 flex justify-center items-center border-2 border-gray-light-sm rounded-full bg-white">
            {icon}

            </div>
        </div>
        <div className="w-full mt-10 text-center ">
            <p className='mb-1'>
             <span className='text-sm text-blue font-bold'> {label} </span>
            </p>
            <p className=''>
               <span className='text-sm text-yellow font-semibold'> {nbr} </span>
            </p>
        </div>
    </div>
  )
}

export default React.memo(PatientItem) 