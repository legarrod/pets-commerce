import React from 'react'
import Image from 'next/image'
import brand1 from '../../../../public/assets/images/brand1.png'
import brand2 from '../../../../public/assets/images/brand2.png'
import brand3 from '../../../../public/assets/images/brand3.png'
import brand4 from '../../../../public/assets/images/brand4.png'
import brand5 from '../../../../public/assets/images/brand5.png'
import brand6 from '../../../../public/assets/images/brand6.png'

const BrandsSections = () => {
  const brands = [
    {
      id: 1,
      img: brand1,
    },
    {
      id: 2,
      img: brand2,
    },
    {
      id: 3,
      img: brand3,
    },
    {
      id: 4,
      img: brand4,
    },
    {
      id: 5,
      img: brand5,
    },
    {
      id: 6,
      img: brand6,
    }
  ]
  return (
    <section className='px-5 md:px-0 w-full max-width130'>
      <h4 className='text-3xl text-left text-gray font-bold p-4 mx-2'>Aliados</h4>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-between flex-wrap'>
        {
          brands.map((item) => <Image
            src={item.img}
            alt="brand"
            className='h-40 w-40 mx-4 my-5'
          />)
        }
      </div>
    </section>
  )
}

export default BrandsSections