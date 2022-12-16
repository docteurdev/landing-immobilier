import React from 'react'
import { logo1, logo2, logo3, topImg2 } from '../assets'
import { CardOne, Header } from '../components'

function Home() {
  return (
    <div>
        <Header/>
    <section className='py-16 px-[6rem] bg-white' >
      <div className="flex flex-wrap justify-center gap-2">
      <CardOne/>
      <CardOne/>
      <CardOne/>

      </div>

      <div className="flex w-full h-[450px] my-7 bg-slate-400">
        <div className="w-[60%] bg-white ">
          <h2 className='font-semibold text-[36px]' >Why housesale company?</h2>

          <div className="flex items-center my-8">
            <img src={logo1} className="w-[40] h-[40]" alt="" />
            <div className="ml-8">
              <h4 className='font-normal text-[29px]  text-gray-light' >Transparent pricing</h4>
              <p className='text-[21px]  text-gray-light' >See fixed prices before you book. No hidden charges.</p>
            </div>
          </div>

          <div className="flex items-center my-8">
            <img src={logo2} className="w-[40] h-[40]" alt="" />
            <div className="ml-8">
              <h4 className='font-normal text-[29px]  text-gray-light' >Export only</h4>
              <p className='text-[21px]  text-gray-light' >Our professionals are well trained and have on-job expertise.</p>
            </div>
          </div>

          <div className="flex items-center my-8">
            <img src={logo3} className="w-[40] h-[40]" alt="" />
            <div className="ml-8">
              <h4 className='font-normal text-[29px] text-gray-light ' >Full equipped</h4>
              <p className='text-[21px] text-gray-light ' >We bring everything needed to get the job done well.</p>
            </div>
          </div>
        </div>
        <div className=" bg-white flex justify-between items-center w-[40%]">
          <div className="w-full h-[65%] bg-yellow "/>
           <img src={topImg2} className='h-full w-[400px]' alt="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Home