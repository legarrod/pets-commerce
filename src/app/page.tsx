import Image from 'next/image'
import MainBanner from './components/PrincipalHeader/PrincipalHeader'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <MainBanner />
      <div className='flex flex-row'>
        <h3 className='text-3xl text-black'>Todo lo que necesitas</h3><h3 className='text-3xl ml-4 text-sky-600'>para tus mascotas</h3>
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
      <p className='text-lg '>Home</p>
    </main>
  )
}
