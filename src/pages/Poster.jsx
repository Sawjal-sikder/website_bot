import React from 'react'
import Iamge from '../assets/image/poster.png'

const Poster = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop/Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      
      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl mx-4 md:mx-8">
        {/* Modal Content */}
        <div className="rounded-2xl shadow-2xl overflow-hidden transform transition-all">
          {/* Modal Header */}

          
          {/* Modal Body */}
          <div className="p-4 md:p-4">
            <div className="flex justify-center">
              <img 
                src={Iamge} 
                alt="Poster" 
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[70vh]"
              />
            </div>
            
            {/* Additional Info Section */}
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster
