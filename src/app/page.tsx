import Image from 'next/image'
import MainBanner from './components/PrincipalHeader/PrincipalHeader'

export default function Home() {

  const optionsCards = [
    {
      id: 1,
      icon: '',
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      id: 2,
      icon: '',
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      id: 3,
      icon: '',
      text: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    }
  ]
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
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <MainBanner />
      <section>
        <div className='flex flex-row my-8'>
          <h3 className='text-3xl font-bold text-black'>Todo lo que necesitas</h3><h3 className='text-3xl font-bold ml-4 text-sky-600'>para tus mascotas</h3>
        </div>
        <div className='w-full flex flex-row justify-around'>
          <div className="w-2/6 py-8 md:py-16 bg-image-person h-80 rounded-md">
            <h2 className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
              HOY GATOS
            </h2>
          </div>
          <div className="w-2/6 py-8 md:py-16 bg-image-dog h-80 rounded-md">
            <h2 className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
              HOY GATOS
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-row my-8'>
          <h3 className='text-3xl font-bold text-black'>Pedidos</h3><h3 className='text-3xl font-bold ml-4 text-sky-600'>programados</h3>
        </div>
      </section>
      <div className="w-full flex flex-row justify-around py-8 md:py-16 bg-image-vter h-80 rounded-md">
          <div className="md:w-1/3">
            <h2 className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
              Envio programado
            </h2>
          </div>
          <div className="md:w-1/3 flex flex-col md:flex-row">
            <div>
              <h2 className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
                Como funciona
              </h2>
            </div>
            <div>
              <p className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
                * opcion 1
              </p>
              <p className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
                * opcion 2
              </p>
              <p className="text-3xl text-center  font-bold text-white mb-2 md:mb-0">
                * opcion 3
              </p>
            </div>
          </div>
        </div>
      <section className='w-full px-5 md:px-0'>
        <div className='flex flex-row my-8'>
          <h3 className='text-3xl font-bold text-black'>Tus peludos</h3><h3 className='text-3xl font-bold ml-4 text-sky-600'>nos prefieren</h3>
        </div>
        <div className='flex flex-col md:flex-row'>
           {
          optionsCards.map((item) => <div key={item.id} className='bg-orange-400 text-white p-4 rounded-lg mx-2 my-2 md:mx-10'>
            <p>ICON</p>
            <p>{item.text}</p>
          </div>)
        }
        </div>
       
      </section>

      <section className='w-full px-5 md:px-0'>
        <h4 className='text-3xl text-left text-black font-bold'>Favoritos</h4>
        <div className='flex flex-col md:flex-row justify-center md:justify-around flex-wrap'>
          {
            favorites.map((item) => <div key={item.id} className='flex flex-col text-white border-2 w-full md:w-60 shadow-lg p-4 rounded-lg mx-2 my-2 md:mx-10'>
              <img src={item.image} alt={item.title} />
              <p className='text-black'>{item.title}</p>
              <p className='text-sky-600 font-semibold'>{item.title}</p>
              <p className='text-sky-600'>{item.description}</p>
              <button className='bg-blue-600 text-white p-2 rounded-lg'>Agregar al carrito</button>
            </div>)
          }
        </div>
      </section>

      <section className='w-full px-5 md:px-0'>
        <h4 className='text-3xl text-left text-black font-bold'>Aliados</h4>
        <div className='flex flex-row flex-wrap justify-center md:justify-center'>
          {
            favorites.map((item) => <img key={item.id} className='brandsImg' src={item.image} alt={item.title} height={'100%'} width={'100%'}/>)
          }
        </div>
      </section>

      <p className='text-lg '>Home</p>
    </main>
  )
}
