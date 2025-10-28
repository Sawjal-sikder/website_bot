import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main content area without navbar and sidebar */}
      <main className="w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;