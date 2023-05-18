import React from 'react';
import './principal.css'

const MainBanner: React.FC = () => {
  return (
    <div className="w-full py-8 md:py-16 bg-image h-96">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full justify-center flex h-full items-end">
        <div className="md:flex md:items-center md:justify-between w-full">
          <div className="md:w-1/3">
            <h2 className="text-5xl text-left  font-bold text-white mb-2 md:mb-0">
              HOY GATOS
            </h2>
            <div className='flex flex-row'>
              <h2 className="text-4xl text-left mr-1 font-extrabold text-white mb-2 md:mb-0">
                Y
              </h2>
              <h2 className="text-4xl text-left  font-extrabold text-blue mb-2 md:mb-0">
                PERROS
              </h2>
            </div>

          </div>
          <div className="md:w-1/3">
            <h2 className="text-5xl text-left  font-bold text-white mb-2 md:mb-0">
              EN SUPER
            </h2>
            <h2 className="text-4xl text-left  font-extrabold text-blue mb-2 md:mb-0">
              DESCUENTO
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
