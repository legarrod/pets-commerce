import React from 'react'

const ProdcutSections = () => {
    const favorites = [
        {
          id: 1,
          title: 'Titulo principal',
          description: 'Descripción principal',
          image: 'https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/5/7501072210234_8.jpg',
          price: 20000
        },
        {
          id: 2,
          title: 'Titulo principal',
          description: 'Descripción principal',
          image: 'https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/5/7501072210234_8.jpg',
          price: 20000
        },
        {
          id: 3,
          title: 'Titulo principal',
          description: 'Descripción principal',
          image: 'https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/5/7501072210234_8.jpg',
          price: 20000
        },
        {
          id: 4,
          title: 'Titulo principal',
          description: 'Descripción principal',
          image: 'https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/5/7501072210234_8.jpg',
          price: 20000
        },
        {
          id: 5,
          title: 'Titulo principal',
          description: 'Descripción principal',
          image: 'https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/5/7501072210234_8.jpg',
          price: 20000
        }
      ]
  return (
    <section className='px-5 md:px-0 w-full max-width130'>
        <h4 className='text-3xl text-left text-gray font-bold p-4 mx-2'>Favoritos</h4>
        <div className='flex flex-col md:flex-row justify-center md:justify-between flex-wrap'>
          {
            favorites.map((item) => <div key={item.id} className='flex flex-col text-white border-2 w-11/12 md:w-56 shadow-lg p-4 rounded-lg mx-4 my-5 md:mx-2'>
              <img src={item.image} alt={item.title} />
              <p className='text-black font-bold'>{item.title}</p>
              <p className='text-blue'>{item.title}</p>
              <p className='text-blue'>{item.description}</p>
              <button className='bg-blue text-white p-2 rounded-2xl w-full mt-4'>Agregar al carrito</button>
            </div>)
          }
        </div>
      </section>
  )
}

export default ProdcutSections