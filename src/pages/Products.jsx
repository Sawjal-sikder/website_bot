import React from 'react'
import Image from '../assets/image/product.png'

const Products = ({heading}) => {
  const products = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    image: Image,
    title: `Product ${index + 1}`,
  }));

  return (
    <div className="min-h-screen pt-32 bg-gray-50">

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-blue-950 mb-8 py-4">{heading}</h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                <img 
                  src={product.image} 
                  alt={`Product ${product.id}`}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
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

export default Products
