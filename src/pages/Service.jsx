import React from 'react'
import { useNavigate } from 'react-router-dom'
import FAQ from './Faq'
import CONTACT from './contact'
import Footer from './footer.jsx'
import robotImage from '../assets/image/icon/robot.png'
import LightImage from '../assets/image/icon/light.png'

const Service = () => {
  const navigate = useNavigate()

  const handleHomeRedirect = () => {
    navigate('/')
  }

  return (
    <div className="relative">
        
      {/* Home Redirect Arrow Icon */}
      <div className="hidden md:block w-60 h-40 absolute top-10 right-1/3 z-0">
        <img src={robotImage} alt="" />
      </div>
      <div className="hidden md:block w-32 h-32 absolute top-10 right-10 z-0">
        <img src={LightImage} alt="" />
      </div>
      <div className="fixed md:top-6 md:left-6 right-6 top-6 z-50">
        <button
          onClick={handleHomeRedirect}
          className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
          aria-label="Go to Home"
        >
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
      </div>
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 border-b border-blue-300 flex items-center gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Support</h1>
        </div>

      <CONTACT heading="HOW TO ORDER WITH AI CHAT (PLUTO)" />
      <FAQ heading="Frequently Asked Questions" />
      <div className="pt-24">
        <Footer />
      </div>
    </div>
  )
}

export default Service
