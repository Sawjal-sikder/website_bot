import React from 'react'
import { useState } from 'react'
import Products from './Products'
import BestSale from './BestSale'
import FAQ from './Faq'
import CONTACT from './contact'
import Chat from './Chat'
import BanarImage from '../assets/image/bg.png'
import Logo from '../assets/image/logo.png'
import MainImage from '../assets/image/mainbody.png'
import Chaticon from '../assets/image/chaticon.png'
import Footer from './footer.jsx'


const home = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main Container with Background Image and Overlays */}
      <div className="relative w-full h-96 md:min-h-[873px] flex flex-col justify-center items-center px-4 py-6">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={BanarImage} 
            alt="Banner" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* button positioned at bottom center of image */}
        <div className="absolute -bottom-3 md:bottom-0 left-1/2 transform -translate-x-1/2 z-10 mb-4"
        onClick={() => setIsChatOpen(!isChatOpen)}
        >
          <button className="bg-blue-500 text-xs md:text-lg text-white px-2 py-1 md:px-8 md:py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200 md:font-bold">
            START SHOPPING
          </button>
        </div>
      </div>
      
      {/* productimage */}
        <Products heading="Best offers" details="Grab them before they’re gone!" />
        <BestSale heading="Best sellers" details="Discover what everyone’s buying right now." />

        <div className="pt-24">
          <Footer />
        </div>

      {!isChatOpen && <div className="h-16 sm:h-8 fixed bottom-8 right-2 md:bottom-20 md:right-20 cursor-pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <div className="flex items-center gap-4 bg-[#2F64EF] px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        
        <img 
          src={Chaticon} 
          alt="Chat Icon" 
          className="w-4 h-4 sm:w-6 sm:h-6"
        />
          <p className="md:text-lg text-xs text-white font-semibold">Order Now</p>
      </div>
      </div>}

      {isChatOpen && <Chat onClose={() => setIsChatOpen(false)} />}

    </div>
  )
}

export default home
  