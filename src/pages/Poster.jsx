import React from 'react'
import Iamge from '../assets/image/dev.png'
import useFetchWithoutAuth from '../hooks/useFetchWithoutAuth';

const Poster = () => {

  const { data, loading, error } = useFetchWithoutAuth('/api/auth/site/status/');
  // // console.log("Poster component fetched data:", data);

  // Show loading state
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-white text-lg">Loading...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-white text-lg">Error loading poster</div>
      </div>
    );
  }

  // Get the poster URL from data, fallback to default image
  const posterUrl = data?.poster || Iamge;

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
                src={posterUrl} 
                alt="Poster" 
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[70vh]"
                onError={(e) => {
                  // Fallback to default image if the fetched image fails to load
                  e.target.src = Iamge;
                }}
              />
            </div>
            
            {/* Additional Info Section */}
            {data?.maintenance_message && (
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-lg">
                <p className="text-yellow-800 text-center">{data.maintenance_message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Poster
