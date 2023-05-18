
import MainBanner from './components/Home/PrincipalHeader'
import ProdcutSections from './components/Home/ProdcutSections'
import BrandsSections from './components/Home/BrandsSections'
import InformationSections from './components/Home/InformationSections'
import SecondaryBannerSections from './components/Home/SecondaryBannerSections'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <MainBanner />
      <section className='w-full'>
        <div className='flex flex-row justify-center my-8'>
          <h3 className='text-3xl font-extrabold text-gray'>Todo lo que necesitas</h3><h3 className='text-3xl font-extrabold ml-3 text-blue'>para tus mascotas</h3>
        </div>
        <div className='w-full flex flex-row justify-around'>
          <div className="w-2/5 flex justify-end items-center py-8 md:py-16 bg-image-person h-80 rounded-md">
            <h2 className="text-3xl text-right mr-16 font-extrabold text-white mb-2 md:mb-0">
              HOY GATOS
            </h2>
          </div>
          <div className="w-2/5 flex justify-start items-center  py-8 md:py-16 bg-image-dog h-80 rounded-md">
            <h2 className="text-3xl text-left ml-16 font-extrabold text-white mb-2 md:mb-0">
              HOY GATOS
            </h2>
          </div>
        </div>
      </section>

      <SecondaryBannerSections />
      <InformationSections />
      <ProdcutSections />
      <BrandsSections />
<div className='wrapper-wave'>
<div className="wave-container-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,250.7C672,235,768,213,864,181.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="wave-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fill-opacity="1" d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,250.7C672,235,768,213,864,181.3C960,149,1056,107,1152,96C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
</div>
      
      
    </main>
  )
}
