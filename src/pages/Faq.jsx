import React, {useState} from 'react'


const faq = ({heading, details=""}) => {
    const [openFaqId, setOpenFaqId] = useState(null);
    
    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const Datas = [
    { id: 1, title: 'What is Webflow and why is it the best website builder?', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 2, title: 'What are the key features of Webflow?', description: 'Webflow offers a range of features including a visual editor, responsive design tools, and CMS capabilities.' },
    { id: 3, title: 'Is Webflow suitable for e-commerce?', description: 'Yes, Webflow has built-in e-commerce features that allow you to create and manage an online store.' },
    { id: 4, title: 'How does Webflow compare to WordPress?', description: 'Webflow is more design-focused and offers a visual editing experience, while WordPress is more flexible and has a larger plugin ecosystem.' },
    { id: 5, title: 'Can I export my Webflow site?', description: 'Yes, you can export your Webflow site’s HTML, CSS, and JavaScript, but CMS content will not be included.' },
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
