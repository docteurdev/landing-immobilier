import React from 'react'
import { ImLocation2, } from "react-icons/im";
import { BsFillPhoneFill, } from "react-icons/bs";
import { IconContext } from 'react-icons';

type ContactProps= {
    centre: string,
    contact: string,
    description: string
}

function ContactItem({centre, contact, description}:ContactProps) {
  return (
    <div className='my-2'>
        <div className="flex gap-4">
          <IconContext.Provider value={{className:"text-blue"}} >
          <ImLocation2/>

          </IconContext.Provider>
          <p className="text-[18px] font-semibold" > {centre} </p>  
        </div>
        <div className="flex gap-4">
          <IconContext.Provider value={{className:"text-yellow"}} >
           <BsFillPhoneFill/>
          </IconContext.Provider>
          <p className="text-[14px] text-blue font-semibold"> {contact}</p>  
        </div>
        <p className="text-[14px] my-2"> {description}</p>  

    </div>
  )
}

export default ContactItem