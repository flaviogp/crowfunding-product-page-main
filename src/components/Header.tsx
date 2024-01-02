import { useState } from 'react'
import Brand from '../assets/images/logo.svg'
import HamburguerMenu from '../assets/images/icon-hamburger.svg'
import CloseMenu from '../assets/images//icon-close-menu.svg'
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = () => {
        setOpenMenu(!openMenu)
    }

    const ImageHamburguerMenu = <img src={HamburguerMenu} alt="hamburguer menu" />
    const ImageCloseMenu = <img src={CloseMenu} alt="close hamburguer menu" />
    const MobileMenu = ( 
            <nav className='sm:hidden absolute top-[100%] right-[5%] flex flex-col gap-4 bg-white w-[90%] h-max rounded-md'>
                    <ul>
                    <li className='p-4 border-b-2 font-semibold'>About</li>
                    <li className='p-4 border-b-2 font-semibold'>Discover</li>
                    <li className='p-4 font-semibold'>Get Started</li>
                </ul>
            </nav>
        )
  return (  
    <header className="container relative w-full h-[50px] flex justify-between p-3">
        <div className="relative">
            <img src={Brand} alt="Logo" />
        </div>

        <nav className='sm:flex lg:flex md:flex lg: items center justify-end hidden'>
            <ul className='flex gap-4 mr-5 text-white font-semibold'>
                <li>About</li>
                <li>Discover</li>
                <li>Get Started</li>
            </ul>
        </nav>

        <button className='sm:hidden transition' onClick={handleChange}>
            {openMenu ? ImageCloseMenu : ImageHamburguerMenu}
        </button>
        {openMenu && MobileMenu}
    </header>
  )
}

export default Header