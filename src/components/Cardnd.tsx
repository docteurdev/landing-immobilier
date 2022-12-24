import React from 'react'
import { moreId1 } from '../assets'
import '../assets/styles/style.css';

type CardType= {
  img: string
}
const Cardnd: React.FC<CardType>= ({img}) => {
  return (
    <div className='cardnd w-full md:w-[295px] h-[406px]' >
        <img src={img} alt="" />
    </div>
  )
}

export default Cardnd