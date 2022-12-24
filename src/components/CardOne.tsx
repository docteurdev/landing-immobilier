import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import { moreId1 } from '../assets';
import {motion} from "framer-motion";
import ProductDetail from './ProductDetail';
import { CardType } from '../comon/types';
import { useDispatch } from 'react-redux';
import { selectProduct } from '../store/slices/product';



const CardOne: React.FC<CardType>= ({produit}) =>{
  const {image, productName, prix,}= produit

  const dispatch= useDispatch()

  const showInfo= (produit:any) =>{
    dispatch(selectProduct(produit))
    document.getElementById('my-modal')?.click()
  }
    
  return (
    <div>
    <motion.div 
    onClick={() =>showInfo(produit) }
    className='card-one w-[280px] h-[350px] shadow-xl'>
     <div className="w-full h-5/6">
        <img src={image} className="" alt="" />
     </div>
     <div
     className="bottom-block px-4 flex justify-start items-center w-full h-1/6 bg-white">
        <div className="bx-rounded cursor-pointer bg-yellow w-8 h-8 rounded-full flex justify-center items-center shadow-xl mr-3">
            <FaChevronRight/>
        </div>
        <div>
         <h4 className='text-[14px] font-bold' > {productName} </h4>
         <h4 className='text-[14px] font-bold' >{prix}</h4>

        </div>
    </div>
    </motion.div>
    </div>
  )
}

export default  React.memo(CardOne)