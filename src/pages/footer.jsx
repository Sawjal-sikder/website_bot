import React from 'react'
import { useNavigate } from 'react-router-dom'
import TIME from '../assets/image/icon/TE.jpeg'
import SNP from '../assets/image/icon/snp.png'
import Youtube from '../assets/image/icon/i.png'
import TI from '../assets/image/icon/ti.png'
import Call from '../assets/image/icon/call.png'
import address from '../assets/image/icon/add.png'

const Footer = () => {
  const navigate = useNavigate();

  const handleSupportClick = () => {
    navigate('/support');
  };

  return (
    <div className="bg-gray-900 text-white">
      <footer className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          
          {/* Grid 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Left Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Do You Need Help?</h2>
              <p className="text-gray-300 max-w-sm">
                {/* You can contact with us. We will give you proper solution. */}
                Get in contact with us We will be happy to help.
              </p>

              <button
                onClick={handleSupportClick}
                className="mt-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
              >
                Support
              </button>

            </div>
            {/* Right Section (Social Icons) */}
            <div className="flex justify-start md:justify-end pt-3">
              <div className="flex flex-col items-start md:items-center gap-5">
                <h3 className="text-gray-300 font-semibold text-lg">
                  Follow us on social media:
                </h3>
                <div className="flex gap-5">

                  <img
                    src={SNP}
                    alt="Snapchat"
                    className="w-12 h-12 hover:opacity-75 cursor-pointer bg-white rounded-lg p-1"
                    onClick={() => window.open("https://snapchat.com/t/JjA2gtUZ", "_blank")}
                  />

                  <img
                    src={Youtube}
                    alt="Instagram"
                    className="w-12 h-12 hover:opacity-75 cursor-pointer"
                    onClick={() =>
                      window.open("https://www.instagram.com/plutoai.gram?igsh=MTc3NG0wYjAzM3gwNw", "_blank")
                    }
                  />

                  <img
                    src={TI}
                    alt="TikTok"
                    className="w-12 h-12 hover:opacity-75 cursor-pointer bg-white rounded-lg p-3"
                    onClick={() =>
                      window.open("https://www.tiktok.com/@orderwithpluto?_r=1&_t=ZN-91lBIwULyfi", "_blank")
                    }
                  />

                </div>
              </div>
            </div>

          </div>
              {/* Contact & Address */}
              {/* <div className="flex flex-col md:flex-row gap-8 mt-10"> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-10">

                {/* Phone & Schedule */}
                <div className="flex gap-4">
                  <img
                    src={Call}
                    alt="Call Icon"
                    className="w-7 h-7 md:w-7 md:h-7"
                  />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">Contact</p>
                    <p className="flex items-start text-white text-sm md:text-base py-2">07598314916</p>
                    <p className="flex items-start text-white text-sm md:text-base">orderwithpluto@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4">                 
                  <img
                    src={TIME}
                    alt="Address Icon"
                    className="w-7 h-7 md:w-10 md:h-10 rounded-full"
                  />
                 <div>
                  <h4 className="text-gray-300 text-sm md:text-base font-semibold mb-2">Opening Time</h4>
                  <ul className="space-y-2">
                    {/* <li className="flex items-start text-white text-sm md:text-base">
                      <span className="text-red-500 mr-2">•</span> Monday – Friday: 5:30pm – 1am
                    </li> */}
                    <li className="flex items-start text-white text-sm md:text-base">
                      <span className="text-red-500 mr-2">•</span> Sunday to wednesday: 5:30 PM – 11:00 PM
                    </li>
                    <li className="flex items-start text-white text-sm md:text-base">
                      <span className="text-red-500 mr-2">•</span> Thursday to Saturday: 5:30 PM – 01:00 AM
                    </li>
                  </ul>
                </div>

                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <img
                    src={address}
                    alt="Address Icon"
                    className="w-7 h-7 md:w-7 md:h-7"
                  />
                  <div>
                    <p className="text-gray-300 text-sm md:text-base">Address</p>
                    <p className="flex items-start text-white text-sm md:text-base">
                      278 Belle Isle Rd, Belle Isle, Leeds LS10 3QJ
                    </p>
                  </div>
                </div>


              </div>

        </div>

        {/* Footer Bottom */}
        <div className="container mx-auto px-4 border-t border-gray-700 pt-6 mt-10 text-center md:text-left">
          <p className="text-gray-300 text-sm md:text-base">
            © {new Date().getFullYear()} Kasa. All rights reserved.
          </p>

        </div>

      </footer>
    </div>
  );
};

export default Footer;
