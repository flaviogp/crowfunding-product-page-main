import { useState } from 'react'
import Brand from '../assets/images/logo.svg'
import HamburguerMenu from '../assets/images/icon-hamburger.svg'
import CloseMenu from '../assets/images//icon-close-menu.svg'

import Background from './Background'

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = () => {
        setOpenMenu(!openMenu)
    }

    const ImageHamburguerMenu = <img src={HamburguerMenu} alt="hamburguer menu" />
    const ImageCloseMenu = <img src={CloseMenu} alt="close hamburguer menu" />
    const MobileMenu = ( 
            <nav className='sm:hidden absolute top-[150%] right-[5%] flex flex-col gap-4 bg-white w-[90%] h-max rounded-md'>
                    <ul>
                    <li className='p-4 border-b-2 font-semibold cursor-pointer'>About</li>
                    <li className='p-4 border-b-2 font-semibold cursor-pointer'>Discover</li>
                    <li className='p-4 font-semibold cursor-pointer'>Get Started</li>
                </ul>
            </nav>
        )


  return (  
    <header className="container w-full h-[50px] flex justify-between p-3 z-[2] fixed top-0 bg-black/20 sm:static sm:bg-transparent">
        <div className="relative">
            <img src={Brand} alt="Logo" />
        </div>

        <nav className='sm:flex lg:flex md:flex lg: items center justify-end hidden'>
            <ul className='flex gap-4 mr-5 text-white font-semibold'>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#discover">Discover</a>
                </li>
                <li>
                    <a href="#getStarted">Get Started</a>
                </li>
            </ul>
        </nav>

        <button className='sm:hidden transition' onClick={handleChange}>
            {openMenu ? ImageCloseMenu : ImageHamburguerMenu}
        </button>
        {openMenu && MobileMenu}
        {openMenu && <Background />}
    </header>
  )
}

export default Header