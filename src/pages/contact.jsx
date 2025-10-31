import React, {useState} from 'react'
import Icon1 from '../assets/image/icon/c1.png'
import Icon2 from '../assets/image/icon/c2.png'
import Icon3 from '../assets/image/icon/c3.png'


const contact = ({heading, details=""}) => {
    const Datas = [
    { id: 1, icon: Icon1, title: 'Browsing the Website', description: 'Learn how to navigate our site' },
    { id: 2, icon: Icon2, title: 'Placing an Order', description: 'Learn how to place an order on our site' },
    { id: 3, icon: Icon3, title: 'Shipping & Delivery', description: 'Learn about our shipping and delivery options' },
    ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Faq style */}
        <div className="mb-6 sm:mb-8 py-2 sm:py-4">
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="w-3 sm:w-4 h-6 sm:h-8 rounded-md bg-blue-500 mb-2 sm:mb-4"></div>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-950 pb-1 sm:pb-2.5">{heading}</h2>
          </div>
          <p className="text-[#939393] text-sm sm:text-base lg:text-lg">{details}</p>
        </div>
        
        {/* Mobile: Stack vertically, Desktop: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Datas.map((data) => (
                <div key={data.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:scale-105">
                    <div className="p-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                            {/* Icon container */}
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full flex items-center justify-center">
                                <img 
                                    src={data.icon} 
                                    alt={data.title} 
                                    className="w-8 h-8 md:w-10 md:h-10 object-contain" 
                                />
                            </div>
                            {/* Content */}
                            <div className="space-y-2">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-800 leading-tight">
                                    {data.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default contact
