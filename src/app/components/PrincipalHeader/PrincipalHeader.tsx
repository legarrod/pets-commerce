import React from 'react';
import './principal.css'

const MainBanner: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-16 bg-image h-96">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/3">
            <h2 className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
              HOY GATOS
            </h2>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
              HOY GATOS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
