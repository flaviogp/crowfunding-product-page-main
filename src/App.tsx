import HeroMobile from './assets/images/image-hero-mobile.jpg'
import Header from './components/Header'
function App() {

  // */bg-heroMobile bg-cover bg-left-top/*
  return (
    <div className="container flex flex-col items-center w-full h-[500px] relative"> 
      <div className="container w-full  h-[300px] flex absolute top-0 z-[-1]">
        <img src={HeroMobile} alt="mobile background hero" fill style={{objectFit: 'cover'}} className='w-full'/>
      </div>
      <Header />
    </div>
  )
}

export default App
