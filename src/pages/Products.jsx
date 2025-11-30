import React, { useState } from 'react'
import Image from '../assets/image/product.png'
import useFetchData from '../hooks/useFetchData'
import { API_BASE_URL } from '../services/auth'

const Products = ({ heading, details }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { data, loading, error, refetch } = useFetchData('api/shop/best-seles/');

  const dummyProducts = Array.from({ length: 5 }, (_, index) => ({
    product__id: index + 1,
    product__image: Image,
    product__name: `Product ${index + 1}`,
  }));

  const products = data?.length ? data : dummyProducts;

  return (
    <div className="pt-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mb-6 sm:mb-8 py-2 sm:py-4">
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="w-3 sm:w-4 h-6 sm:h-8 rounded-md bg-blue-500 mb-2 sm:mb-4"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-950 pb-1 sm:pb-2.5">
              {heading}
            </h2>
          </div>
          <p className="text-[#939393] text-sm sm:text-base lg:text-lg">{details}</p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading products...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-8">
            <p className="text-red-600">Error loading products: {error.message}</p>
            <button
              onClick={refetch}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
            {products.map((product) => (
              <div key={product.product__id} className="group">
                <div className="aspect-square bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
                  <img
                    src={
                      data?.length && product.product__image
                        ? `${API_BASE_URL}${product.product__image}`
                        : product.product__image
                    }
                    alt={`Product ${product.product__id}`}
                    className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(product.product__image)}
                  />
                </div>

                <div className="mt-1 sm:mt-2">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 text-center">
                    {product.product__name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full p-4">
              <img
                src={`${API_BASE_URL}${selectedImage}`}
                alt="Large Product"
                className="w-full h-auto rounded-lg"
              />

              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="h-16 sm:h-8"></div>
    </div>
  );
};

export default Products;
