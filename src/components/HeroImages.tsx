import HeroMobile from '../assets/images/image-hero-mobile.jpg';
import HeroDesktop from '../assets/images/image-hero-desktop.jpg';

const HeroImages = () => {
    const imageMobile = <img src={HeroMobile} alt="mobile background hero" style={{objectFit: 'cover'}} className='w-full sm:hidden'/>;
    const imageDesktop = <img src={HeroDesktop} alt="desktop background hero" style={{objectFit: 'cover'}} className='w-full hidden sm:block'/>;
  return (
    <div className="w-full flex justify-center mt-[-50px]">
    {imageMobile}
    {imageDesktop}
  </div>
  )
}

export default HeroImages