import React, { useState } from 'react'
import '../assets/styles/style.css';
import { FaChevronDown, } from "react-icons/fa";
import { HiMenu, } from "react-icons/hi";
import {AiFillCalendar} from "react-icons/ai";
import {MdOutlineClose} from "react-icons/md"
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { banner, coran1, coran2, logo1, logoroqya } from '../assets';





function Header() {

 const [menu, setMenu]= useState(false);
 

  return (
    <header className='bg-slate-50' >
      {menu? <div className="relative w-full h-[100vh] bg-white z-40 top-0 left-0">
        <IconContext.Provider value={{className:"w-8 h-8 m-4 text-blue"}} >
           <MdOutlineClose onClick={() => setMenu(false)} />
        </IconContext.Provider>
      </div>: null}
        <nav className='w-full fixed top-0 left-0 md:px-[7rem]  backdrop-blur-2xl flex justify-between items-center h-[70px] z-30 shadow-'>
          <div className="nav flex justify-between items-center w-full">
          {/* <h4 className='text-blue font-normal md:text-2xl'>House<span className='text-yellow' >Sale</span> </h4> */}
          <img src={logoroqya} className="w-[10rem] h-[6rem] object-contain" alt="" />
          <ul className='flex justify-between items-center text-blue gap-[5rem]' >
            <li><a href="#acceuil">Acceuil</a> </li>
            <li><a href="#produits">Produits</a> </li>
            <li><a href="#centres">Centres</a> </li>
            <li><a href="#contact">Contact</a> </li>
          </ul>
            <a href="#start" className='bg-blue text-white px-6 py-2 rounded-full font-semibold'>Commander</a>
          </div>
          <div className="lg:hidden text-blue text-[37px]">

          <HiMenu onClick={() => {
            document.getElementById('my-mobile-modal')?.click()
          } } />
          </div>
        </nav>
        {/* <Btns/> */}
        <div className="flex  pt-[7rem] flex-col md:flex-row px-4 md:px-[7rem]">
        <div className="w-full md:w-3/6">
          <div className="title-anim-bx">
          <h1 className=" title-anim font-bold opacity-0 text-lg md:text-5xl text-blue">Fondation Roqya <br/> Côte d'ivoire  </h1>
          </div>
          <div className="title-anim-bx">
            <p className=' title-anim opacity-0 text-sm md:text-2xl text-blue'>Guérit par le Coran et la médecine <br />prophétique</p>
          </div>
          <div className="blocage flex flex-wrap gap-2 w-full mt-4">
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>sorcellerie</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>fétiche</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>demons</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>Djinns</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>cauchemars</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>blocage dans la vie</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>état mentaux</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>problème de santé anormaux</h5> </div>
          <div className="w-auto px-2 h-[38px] bg-white text-yellow shadow-lg rounded-md flex justify-center items-center"> <h5>traitement sans distinction de race</h5> </div>

          </div>

          <button className=" bg-blue text-white px-9 py-3 font-semibold mt-5 rounded-md shadow-lg">
            <a href="#start">Commencer</a>
            </button>
        </div>

        <div className="filter-section relative  w-full md:w-3/6 md:h-auto">
          {/* <div className='w-20 h-20 bg-slate-400 rounded-full absolute top-[8rem] left-[8rem] overflow-hidden'>
            <img className='w-full h-full object-cover' src={coran1} alt="" />
          </div> */}
          {/* <div className='w-[6rem] h-[6rem] bg-slate-400 rounded-full absolute top-[3rem] right-[8rem] overflow-hidden'>
            <img className='w-full h-full object-cover' src={coran2} alt="" />
          </div> */}
          <div className='w-[9rem] h-[2.5rem] shadow-lg bg-blue rounded-lg absolute top-[10rem] right-[4rem] px-2 font-bold text-white flex justify-start gap-4 items-center'> <AiFillCalendar/> <h5>7 jours / 7</h5> </div>
          <img src={banner} className="w-full h-[400px] object-contain z-30" alt="" />
        </div>
        </div>

    </header>
  )
}

export default Header