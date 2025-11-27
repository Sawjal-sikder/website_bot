import React from 'react'
import { useNavigate } from 'react-router-dom'
import Facebook from '../assets/image/icon/f.png'
import SNP from '../assets/image/icon/snp.png'
import Youtube from '../assets/image/icon/i.png'
import In from '../assets/image/icon/in.png'
import Call from '../assets/image/icon/call.png'
import address from '../assets/image/icon/add.png'

const footer = () => {
  const navigate = useNavigate();

  const handleSupportClick = () => {
    navigate('/support');
  };

  return (
    <div className="bg-gray-900 text-white">
      <footer className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Grid layout with 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Main content column */}
            <div>
              <div>
                <h2 className="text-3xl font-bold py-3">Do You Need Help ?</h2>
                <p className="text-gray-300 md:w-72">You can contact with us. We will Give you proper solution.</p>
              </div>
              <div>
                <button 
                  onClick={handleSupportClick}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer"
                >
                  Support
                </button>
              </div>
              <div className="flex flex-col md:flex-row gap-10 mt-10">
                <div className="flex items-center gap-5">
                  <img src={Call} alt="Call Icon" className="md:w-8 md:h-8 w-5 h-5 inline-block mr-2" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-md">Saturday - Thursday : 10am-11pm</p>
                    <p className="text-xl md:text-3xl font-bold">07598314916 </p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <img src={address} alt="Address Icon" className="md:w-8 md:h-8 w-5 h-5 inline-block mr-2" />
                  <div>
                    <p className="text-gray-300 text-sm md:text-md">Address</p>
                    <p className="text-xl md:text-3xl font-bold md:w-96">278 Belle Isle Rd, Belle Isle, Leeds LS10 3QJ</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social icons column */}
            <div className="flex justify-center md:justify-end items-start pt-3">
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-md font-semibold text-gray-300 mb-2">Follow us on social media:</h3>
                <div className="flex  gap-4 ">
                  {/* <img src={Facebook} alt="Facebook" className="w-12 h-12 hover:opacity-75 cursor-pointer transition duration-300" /> */}
                  <img src={SNP} alt="Twitter" className="w-12 h-12 hover:opacity-75 cursor-pointer transition duration-300 rounded-md bg-white"  onClick={() => window.open("https://snapchat.com/t/JjA2gtUZ", "_blank")}/>
                  <img src={Youtube} alt="YouTube" className="w-12 h-12 hover:opacity-75 cursor-pointer transition duration-300" onClick={() => window.open("https://www.instagram.com/plutoai.gram?igsh=MTc3NG0wYjAzM3gwNw", "_blank")} />
                  {/* <img src={In} alt="LinkedIn" className="w-12 h-12 hover:opacity-75 cursor-pointer transition duration-300" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer bottom section */}
        <div className="container mx-auto px-4  border-t border-gray-700 pt-6 mt-6">
          <div className="">
            <p className="text-sm md:text-base text-gray-300">
              © 2023 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
