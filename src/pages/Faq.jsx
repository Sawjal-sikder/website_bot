import React, {useState} from 'react'


const faq = ({heading, details=""}) => {
    const [openFaqId, setOpenFaqId] = useState(null);
    
    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const Datas = [
    { id: 1, title: 'What is Order with Pluto?', description: 'Order with Pluto is your friendly AI-powered shopping assistant for Kasa Belle Isle. You can chat, order essentials, and get them ready for delivery —simple and fast.' },
    { id: 2, title: 'How do I place an order?', description: 'Just visit orderwithpluto.com, click Chat to Order, and tell Pluto what you need. It’s like messaging a store assistant who actually replies on time.' },
    { id: 3, title: 'What can I buy through Pluto?', description: 'essentials, snacks, and daily items from Kasa Belle Isle. If it’s in your basket at the corner shop, it’s probably here too.' },
    { id: 4, title: 'What if an item is out of stock?', description: 'Pluto will tell you instantly and suggest alternatives—no checkout surprises.' },
    ];

  return (
    <div className="pt-24 bg-gray-50">

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 py-2 sm:py-4">
            <div className="flex gap-2 sm:gap-4 items-center">
                <div className="w-3 sm:w-4 h-6 sm:h-8 rounded-md bg-blue-500 mb-2 sm:mb-4"></div>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-950 pb-1 sm:pb-2.5">{heading}</h2>
            </div>
            <p className="text-[#939393] text-sm sm:text-base lg:text-lg">{details}</p>
        </div>
        
        <div className="space-y-4">
            {Datas.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                    <div 
                        className="p-4 sm:p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => toggleFaq(faq.id)}
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 pr-4">{faq.title}</h3>
                            <svg 
                                className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                                    openFaqId === faq.id ? 'transform rotate-180' : ''
                                }`} 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        {openFaqId === faq.id && (
                            <div className="mt-3 text-gray-600 text-sm sm:text-base">
                                <p>{faq.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
      <div className="h-16 sm:h-8"></div>
    </div>
  )
}

export default faq
