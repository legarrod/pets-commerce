import React, { Fragment } from 'react'
import Image from 'next/image'
import logo from '../../../../public/assets/images/logo-nav.png'
import n1 from '../../../../public/assets/images/n1.png'
import n2 from '../../../../public/assets/images/n2.png'
import n3 from '../../../../public/assets/images/n3.png'

const SecondaryBannerSections = () => {

  return (
    <Fragment>
      <section>
        <div className='flex flex-row my-8'>
          <h3 className='text-3xl font-extrabold text-gray'>Pedidos</h3><h3 className='text-3xl font-extrabold ml-4 text-blue'>programados</h3>
        </div>
      </section>
      <div className="w-full flex flex-row justify-around py-8 md:py-16 bg-image-vter h-80 rounded-md">
        <div className="md:w-1/3 flex flex-row items-center">
          <Image
            src={logo}
            alt="logo"
            className='h-20 w-auto'
          />
          <div className='flex flex-col justify-start items-start ml-3'>
            <h2 className="text-3xl text-center  font-extrabold text-white mb-2 md:mb-0">
              Envió
            </h2>
            <p className='text-4xl'>programado</p>
          </div>

        </div>
        <div className="md:w-1/3 h-full flex flex-col md:flex-row items-end z-50">
          <div>
            <h2 className="text-2xl text-center  font-extrabold text-white mb-2 md:mb-0">
              ¿Cómo funciona?
            </h2>
          </div>
          <div className='flex flex-col ml-3'>
            <p className="text-xl text-center flex flex-row items-center font-bold text-white mb-2 md:mb-0">
              <Image
                src={n1}
                alt="logo"
                className='h-5 mr-2 w-auto'
              /> opcion 1
            </p>
            <p className="text-xl text-center flex flex-row items-center font-bold text-white mb-2 md:mb-0">
              <Image
                src={n2}
                alt="logo"
                className='h-5 mr-2 w-auto'
              /> opcion 2
            </p>
            <p className="text-xl text-center flex flex-row items-center font-bold text-white mb-2 md:mb-0">
              <Image
                src={n3}
                alt="logo"
                className='h-5 mr-2 w-auto'
              /> opcion 3
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SecondaryBannerSections