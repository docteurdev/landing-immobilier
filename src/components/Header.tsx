import React from 'react'
import '../assets/styles/style.css'
function Header() {
  return (
    <header className='flex flex-col  justify-between h-[100vh] py-10 px-[7rem]' >
      <nav className='w-[80%] flex justify-between items-center h-8'>
        <h4 className='text-white font-normal text-2xl'>House<span className='text-yellow' >Sale</span> </h4>
        <ul className='flex justify-between items-center' >
          <li>On sale</li>
          <li>For rent</li>
          <li>New Residential Project</li>
          <li>Property</li>
        </ul>
      </nav>

      <div className="">
        <h1 className="font-bold text-4xl text-white">Quality home service on <br /> demand</h1>
        <p className='text-lg text-white'>Experienced, hand-picked Professionals to serve you at your <br /> doorstep</p>
      </div>
      <div className="filter-section px-[6rem] flex flex-col  justify-evenly w-full h-[105px] bg-white">
        <div className="flex">
          <div className="filter"> <h4>On sale</h4>  <h1> 1</h1> </div>
          <div className=" w-full ml-4">
            <input className='w-full' type="text" />
          </div>
        </div>
        <div className="flex">
          <div className="filter">
          <h4>Maximum</h4>  <h1> 1</h1>

          </div>

          <div className="flex justify-between  w-full ml-4">
            <div className="filter">
              <h4>Minimun price</h4>  <h1> 1</h1>
            </div>
            <div className="filter">
              <h4>Maximum </h4>  <h1> 1</h1>
            </div>
            <div className="filter">
              <h4>Bathroom</h4>  <h1> 1</h1>
            </div>
            <div className="filter">
              <h4>Bathroom</h4>  <h1> 1</h1>
            </div>
            <div className="bg-yellow w-[150px] h-[40px]  flex items-center justify-center"> <h4 className='font-normal text-lg'>Search</h4> </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header