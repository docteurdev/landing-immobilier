import React from 'react'
import {  moreId6 } from '../assets'
import {motion} from "framer-motion"
import '../assets/styles/style.css'

type CardType= {
  img: string
}

function Cardfd({img}:CardType) {
  return (
    <div className='cardnd cardfd w-[295px] h-[406px]' >
        <img src={img} alt="" />
    </div>
  )
}

export default Cardfd