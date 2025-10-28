import React from 'react'
import Facebook from '../assets/image/f.png'
import Twitter from '../assets/image/t.png'
import Youtube from '../assets/image/y.png'

const footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <footer className="py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-6 mb-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={Facebook} alt="Facebook" className="w-6 h-8" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={Twitter} alt="Twitter" className="w-6 h-8" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={Youtube} alt="Youtube" className="w-6 h-8" />
            </a>
          </div>
          <p className="text-sm md:text-base text-gray-300">
            © 2023 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default footer
