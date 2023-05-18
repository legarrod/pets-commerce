import React from 'react'
import icon from '../../../../public/assets/images/icon.png'
import Image from 'next/image'

const InformationSections = () => {
  const optionsCards = [
    {
      id: 1,
      icon: icon,
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      id: 2,
      icon: icon,
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      id: 3,
      icon: icon,
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    }
  ]
  return (
    <section className='px-5 md:px-0 max-width130'>
      <div className='flex flex-row justify-center my-8'>
        <h3 className='text-3xl font-bold text-gray'>Tus peludos</h3><h3 className='text-3xl font-bold ml-4 text-blue'>nos prefieren</h3>
      </div>
      <div className='flex flex-col md:flex-row'>
        {
          optionsCards.map((item) => <div key={item.id} className='bg-orange text-white flex flex-col justify-center items-center p-4 rounded-2xl mx-2 my-2 md:mx-10'>
            <Image
              src={item.icon}
              alt="logo"
              className='h-20 w-20 icon-desbor'
            />
            <p>{item.text}</p>
          </div>)
        }
      </div>

    </section>
  )
}

export default InformationSections