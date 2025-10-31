import React from 'react'
import Image1 from '../assets/image/saler/s1.png'
import Image2 from '../assets/image/saler/s2.png'
import Image3 from '../assets/image/saler/s3.png'
import Image4 from '../assets/image/saler/s4.png'
import Image5 from '../assets/image/saler/s5.png'
import Image6 from '../assets/image/saler/s6.png'

const BestSale = ({heading, details}) => {
const products = [
    { id: 1, image: Image1, title: 'Saler 1' },
    { id: 2, image: Image2, title: 'Saler 2' },
    { id: 3, image: Image3, title: 'Saler 3' },
    { id: 4, image: Image4, title: 'Saler 4' },
    { id: 5, image: Image5, title: 'Saler 5' },
];

  return (
    <div className="pt-24 bg-gray-50">

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> 
        <div className="mb-6 sm:mb-8 py-2 sm:py-4">
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="w-3 sm:w-4 h-6 sm:h-8 rounded-md bg-blue-500 mb-2 sm:mb-4"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-950 pb-1 sm:pb-2.5">{heading}</h2>
          </div>
          <p className="text-[#939393] text-sm sm:text-base lg:text-lg">{details}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                <img 
                  src={product.image} 
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                />
              </div>
              <div className="mt-1 sm:mt-2">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 text-center">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile-specific bottom spacing */}
      <div className="h-16 sm:h-8"></div>
    </div>
  )
}

export default BestSale
