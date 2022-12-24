import React, { ReactPropTypes, useContext, useReducer } from 'react'
import { moreId1, moreId3 } from '../assets'
import {MdOutlineClose} from "react-icons/md"
import { cartContext } from '../comon/context';
import { useSelector } from 'react-redux';


const  ProductDetail = ()=> {

    const cartInfo= useSelector((state: any) => state.product.productSelected)
    // console.log(cartInfo);
    

    return (
        <div  >
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal ">
                <div className=" flex flex-col w-full m-2 md:flex-row md:w-2/3 bg-white h-[30rem] rounded-lg shadow-xl">
                   <div className="flex justify-start items-center px-4 md:flex-col flex-row w-full h-14 md:w-1/6 md:p-4 bg-slate-100 md:h-full">
                     <div
                      onClick={() =>{
                       document.getElementById('my-modal')?.click()

                      }}
                     className="w-10 h-10 md:mx-auto my-6 rounded-full shadow-md cursor-pointer bg-white flex justify-center items-center">
                        <MdOutlineClose/>
                     </div>
                     <div className='ml-4' >
                       <p className='text-muted text-md' >Prix</p>
                       <h3 className='text-md md:text-xl font-bold text-blue'> {cartInfo.prix} <span className='text-sm text-yellow' >fr</span> </h3>
                     </div>

                   </div> 
                   <div className="w-full p-4 md:w-5/6 bg-white h-full">
                    <h3 className='text-3xl font-thin text-blue'> {cartInfo.productName} </h3>
                   
                    <div className="flex flex-col md:flex-row w-full h-full">
                    <div className="w-full md:w-2/4">
                    {/* <button className="px-5 py-3  bg-blue text-white rounded-lg font-semibold text-[14px]">Achèter</button> */}
                    <p className='text-muted text-left text-[14px]' >
                      {cartInfo.description}                        
                    </p>
                    </div>
                    <div className="w-full h-[70%] md:w-2/4 md:h-4/5 rounded-lg overflow-hidden">
                    <img src={cartInfo.image} className="w-full h-full object-cover" alt="" />

                    </div>

                    </div>
                   </div> 
                </div>
            </div>
        </div>
    )
}

export default React.memo(ProductDetail) 