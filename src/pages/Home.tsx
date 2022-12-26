import React, { useEffect, useState } from 'react'
import { appsotre, banner, flagCi, logo1, logo2, logo3, moreId1, moreId10, moreId11, moreId2, moreId3, moreId4, moreId5, moreId6, moreId7, moreId8, moreId9, playstore, topImg1, topImg2, topImg3, topImg4 } from '../assets'
import { Cardfd, Cardnd, CardOne, Centre, ContactItem, Header, PatientItem, ProductDetail } from '../components';
import { MdOutlineClose } from "react-icons/md";
import { FaMosque, FaChurch } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";


import { motion } from "framer-motion";
import { data, livres } from '../comon/data';


function Home() {

  const closeMobileMenu = () => {
    document.getElementById('my-mobile-modal')?.click()

  }



  return (
    <div className='relative'>
      <Header />
      <main id="acceuil" className='py-16 md:py-0 px-4 md:px-[4rem] bg-white' >
        <ProductDetail />
        {/* mobile menu */}
        <div  >
          <input type="checkbox" id="my-mobile-modal" className="modal-toggle" />
          <div className="modal ">
            <div className="absolute top-0 left-0 flex flex-col w-full md:flex-row md:w-2/3 bg-white h-[30rem] shadow-xl">
              <div
                onClick={closeMobileMenu}
                className="w-10 h-10 m-1 md:mx-auto my-6 rounded-full shadow-md cursor-pointer bg-white flex justify-center items-center">
                <MdOutlineClose />
              </div>

              <ul className='mobile-menu text-yellow' >
                <li onClick={closeMobileMenu} ><a href="#acceuil">Acceuil</a> </li>
                <li onClick={closeMobileMenu} ><a href="#produits">Produits</a> </li>
                <li onClick={closeMobileMenu} ><a href="#livres">Livres</a> </li>
                <li onClick={closeMobileMenu} ><a href="#centres">Centres</a> </li>
                <li onClick={closeMobileMenu} ><a href="#contact">Contact</a> </li>
              </ul>
            </div>
          </div>
        </div>


        {/* mobile menu end */}

        <div id="start" className="w-full md:w-4/6 mx-auto px-4 md:mt-10  md:mb-[5rem] ">
          <h2 className='font-bold text-lg md:my-[5rem] md:text-[30px] text-center text-blue' >C'est quoi la <span className=''>roqya?</span></h2>
          <div className="flex flex-col md:flex-row justify-center md:items-center md:shadow-none shadow-sm p-3 ">
            <div
              className="w-full flex justify-center items-center md:w-2/6  p-2"
            >
              <div className="w-[170px] h-[170px] flex justify-center items-center ">

              <img src={banner} className="w-full h-full" alt="" />
              </div>
            </div>
            <div className="w-full md:w-4/6">
              <p className='text-[14px] md:text-lg text-yellow   text-justify'>
                La roqya est la guérison et le soulagement de gens qui souffrent et sont bloqués depuis des années. Deuxièmement c'est une protection des musulmans contre le chirk et un renforcement de leur foi. Troisièmement c'est une porte de daâwa pour les non musulmans. Quatrièmement, c'est un combat contre les sorciers, satanistes, féticheurs, voyants, et leurs associés et toutes formes de chirk jusqu'à ce que ça disparaisse totalement.
              </p>
            </div>
          </div>
        </div>

        <h2 id="centres" className='font-bold text-lg my-8 md:my-[5rem] md:text-[30px] text-center text-blue' >Nos Patients</h2>
        <div className="w-full py-5 h-auto md:h-48 overflow-hidden bg-gray-light-sm rounded-lg md:rounded-none">
          <motion.div
            transition={{ ease: "backIn", duration: .3, delay: .3 }}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex px-1 gap-7 md:gap-10 justify-center items-center flex-wrap  h-full w-full ">
            <PatientItem
              icon={<FaMosque />}
              nbr={"15"}
              label={"Musulmans"}
            />
            <PatientItem
              icon={<FaChurch />}
              nbr={"100"}
              label={"Chretients"}
            />

            <PatientItem
              icon={<GiWorld />}
              nbr={"29"}
              label={"Autres réligions"}
            />
          </motion.div>

        </div>

        <h2 id="produits" className='font-bold text-lg my-8 md:my-[5rem] md:text-[30px] text-center text-blue' >Nos produits pour la <span className=''>roqya</span></h2>

        <motion.div
          transition={{ delay: 0.3 }}
          initial={{ y: 150, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center flex-wrap opacity-0 md:justify-right gap-2 h-auto">
          {data.map((produit) => <CardOne key={produit.id.toString()} produit={produit} />)}


        </motion.div>

      <h2 id="livres" className='font-bold text-lg my-8 md:my-[5rem] md:text-[30px] text-center text-blue' >Nos livres <span className=''>roqya</span></h2>

      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex justify-center flex-wrap opacity-0 md:justify-between gap-2 h-auto">
        {livres.map((produit) => <CardOne key={produit.id.toString()} produit={produit} />)}


      </motion.div>

        <h2 id="centres" className='font-bold text-lg my-8 md:my-[5rem] md:text-[30px] text-center text-blue' >Nos différents centres</h2>
        <div className="w-full py-2 h-auto md:h-48 overflow-hidden bg-gray-light-sm">
          <motion.div
            transition={{ ease: "backIn", duration: .3, delay: .3 }}
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex px-1 gap-2 md:gap-10 justify-center  items-center flex-wrap  h-full w-full ">
            <Centre />
            <Centre />
            <Centre />
            <Centre />
          </motion.div>

        </div>
        <h2 id="contact" className='font-bold text-lg my-5 md:my-[5rem] md:text-[30px] text-center text-blue' >Contacts</h2>

        <div className="w-full flex h-96 flex-col md:flex-row justify-center gap-2  mx-auto">
          <div className="w-full md:w-2/6 h-full flex flex-col justify-center bg-gray-light-sm p-4 rounded-lg">
            <ContactItem
              centre='Centre Yopougon'
              contact='+225 0245 6814 555'
              description='Abidjan, Yopougon, en face du cimétière de Bonikro'
            />

            <ContactItem
              centre='Centre Abobo'
              contact='+225 0245 6814 555'
              description='Abidjan, Abobo, dans les environ de la marie'
            />

            <ContactItem
              centre='Centre Koumassi'
              contact='+225 0245 6814 555'
              description='Abidjan, Koumanssi, en face de'
            />
          </div>
          <div className="w-/6">
            {/* <iframe
            title="map"
             src="https://www.google.com.qa/maps/d/embed?mid=1sVjmuC-bXRxevgfFq9Fd7tzUg6jcMAE&ehbc=2E312F" width="680"  height="386"></iframe> */}
          </div>
        </div>

        {/* <h2 className='font-bold text-lg my-16 md:text-[30px] text-center text-blue' >Comment se soigner</h2>
        <div className=" flex flex-col  md:flex-row overflow-hidden  w-full md:h-[450px] my-7 mx-auto ">
          <div className="w-full md:w-2/3   bg-white ">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              transition={{ ease: "easeInOut", duration: .5, delay: .8 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center my-4 md:my-8">
              <img src={logo1} className="w-[50px] h-[50px]" alt="" />
              <div className="ml-8">
                <h4 className='font-semibold text-md md:text-[22px]  text-gray-light' >Transparent pricing</h4>
                <p className=' text-sm md:text-[14px]  text-gray-light' >See fixed prices before you book. No hidden charges.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              transition={{ ease: "easeInOut", duration: 1.3, delay: .16 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="flex items-center my-4 md:my-8">
              <img src={logo2} className="w-[50px] h-[50px]" alt="" />
              <div className="ml-8">
                <h4 className='font-semibold text-md md:text-[22px]  text-gray-light' >Export only</h4>
                <p className=' text-sm md:text-[14px]  text-gray-light' >Our professionals are well trained and have on-job expertise.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -100 }}
              transition={{ ease: "easeInOut", duration: .7, delay: .24 }}
              whileInView={{ opacity: 1, y: 0 }}

              className="flex items-center my-4 md:my-8">
              <img src={logo3} className="w-[50px] h-[50px]" alt="" />
              <div className="ml-8">
                <h4 className='font-semibold text-md md:text-[22px] text-gray-light ' >Full equipped</h4>
                <p className=' text-sm md:text-[14px] text-gray-light ' >We bring everything needed to get the job done well.</p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-full bg-white flex justify-between items-center md:w-2/3">
            <motion.div
              transition={{ ease: "easeInOut", duration: 1, delay: .24 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="w-full h-1/3 bg-yellow " />
            <img src={topImg4} className='h-full w-full' alt="" />
          </motion.div>
        </div> */}

        {/* <div className="flex p-2 md:px-[7rem] w-full md:h-[200px] bg-yellow-light items-center">
          <div className="container">
            <h2 className="font-semibold text-md md:text-2xl text-black">Book professionals from your phone</h2>
            <p className='text-sm md:text-[20px] text-muted' >Enter your mobile number to get professional help</p>
            <div className="w-full md:w-[60%] h-[68px] px-4 bg-white flex justify-between items-center">
              <div className="flex justify-between items-center w-[30px] h-[30px] md:w-[50px] md:h-[61px] ">
                <img src={flagCi} width="50" alt="" />
                <h5 className='font-semibold text-muted ml-4' >+225</h5>
              </div>
              <div className=" flex justify-center items-center w-[80px] h-[35px] md:w-[150px] md:h-[61px] bg-yellow">
                <h4 className='text-black font-bold text-md' >Send</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4 md:my-[4rem]">
          <h2 className='font-semibold text-lg md:text-[30px] mb-8' >More ideas and inspiration </h2>
          <div className="flex flex-wrap justify-center gap-3 w-full">
            <Cardnd img={moreId11} />
            <Cardnd img={moreId10} />
            <Cardnd img={moreId3} />
            <Cardnd img={moreId4} />
            <Cardnd img={moreId5} />
            <Cardnd img={moreId6} />
            <Cardnd img={moreId7} />
            <Cardnd img={moreId8} />
          </div>
        </div> */}

        {/* <div className="container">
          <h2 className='font-semibold text-lg md:text-[30px] mb-8' >More ideas and inspiration </h2>

          <div className="flex flex-col w-full h-auto md:flex-row md:h-[441px] border-b-2 border-gray-light-sm">
            <div className="w-flull md:w-1/2 md:pr-8 ">
              <p className='mb-8 text-muted text-[15px]' >Housesale chose to work together with the Lebanese designer Nada Debs. We are thrilled to present this collaboration and the LJUV collection, and we hope that you can see, feel, use the connection between a designer from the Middle East  democratic design.
              </p>
              <p className="text-muted text-[15px]">Nada Debs is a Levantine designer living and working in Beirut. Her work spans scale and discipline: from product to furniture design to one-off commission across craft, art, fashion, and interiors. Nada grew up in Japan, studied design in Rhode Island School of Design in the US, and has spent significant periods living and traveling the world, finding connections of each of her experiences in all her work. She calls her approach handmade, and heart-made!</p>
              <motion.button
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1 }}

                className='my-5  md:mt-5 bg-yellow w-[289px] h-[61px] text-[18px] shadow-lg' > More Collection </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1 }}
              className="flex w-full  gap-2 md:w-1/2 md">
              <Cardfd img={moreId10} />
              <Cardfd img={moreId5} />
              <Cardfd img={moreId11} />

            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row w-full h-[441px] md:mt-10">
            <div className=" w-full md:w-1/2 mt-6 md:mt-20 pr-12">
              <p className='mb-8 text-gray text-[15px]' >
                Sofas | Beds | Dining | Tv units | Mattresses | Seating | Coffee tables | Wardrobes | Storage | Bookshelves | Shoe racks | Decor| Bathroom | Textiles | Pots & plants | Home electronics | Home improvement | Lighting
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className='font-semibold text-lg md:text-[30px] mb-8' >Explore our furniture & home <br /> furnishing range </h2>
              <p className="text-muted text-[18px] mb-3" >IKEA is a global leader in life at home.</p>

              <p className="text-muted text-[15px] my-3">Nada Debs is a Levantine designer living and working in Beirut. Her work spans scale and discipline: from product to furniture design to one-off commission across craft, art, fashion, and interiors. Nada grew up in Japan, studied design in Rhode Island School of Design in the US, and has spent significant periods living and traveling the world, finding connections of each of her experiences in all her work. She calls her approach handmade, and heart-made!</p>


              <p className="text-muted text-[14px] my-3" >Whether you just moved into a new home or looking to revamp your current one, we at IKEA are here to inspire you with affordable home furniture solutions, there is a piece of furniture to every corner of your home. Create a home that is perfect for you.</p>

              <p className="text-muted text-[14px] my-3" >Shopping at IKEA is a bit different and exciting compared to your shopping at an everyday retail. It is about experiencing solutions first hand and getting to know ideas and inspirations that can fit perfectly into your home. That’s why, we offer more than 7500 products, solutions at our store along with home furnishing ideas and services for you to explore.</p>

              <p className="text-muted text-[14px] my-3" >When you visit IKEA store, make yourself at home in our many room settings in the store. Squeeze the upholsteries, feel the oriental rugs, try the sofa beds and open the cabinets to feel the quality. On the price tag, you’ll find all you need to know about a product, including where in the store you can pick it up.</p>

              <p className="text-muted text-[14px] my-3"> Since most IKEA furniture is flat-packed, they are quite easy to bring home when you buy from the store.</p>
              <div />

            </div>
          </div>

        </div> */}
      </main>
      <footer className='flex p-2 flex-col md:flex-row justify-between flex-wrap md:items-center items-start bg-blue w-full mt-[10rem] md:h-[130px] md:px-20' >
        <h4 className='text-white font-normal text-2xl'>Fondation <span className='text-yellow' >Roqya C.I</span> </h4>
        <ul className='fle flex-wrap gap-2 md:gap-6 items-center text-white' >
          <h4 className='font-bold' >Liens utiles</h4>
          <li className='text-[14px]'><a href="#produits">Produits</a> </li>
          <li className='text-[14px]'><a href="#livres">Livres</a> </li>
          <li className='text-[14px]'><a href="#centres">Centres</a> </li>
        </ul>
        <ul className='fle flex-wrap gap-2 md:gap-6 items-center text-white' >
          <h4 className='font-bold' >Nos Centres</h4>
          <li className='text-[14px]'>Yopougon (+225 15485655566) </li>
          <li className='text-[14px]'>Abobo (+225 15485655566) </li>
          <li className='text-[14px]'>Koumassi (+225 15485655566) </li>
        </ul>
        <ul className='flex flex-wrap gap-6  items-center'>
          <li>
            <img src={playstore} width="100" alt="" />
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default Home