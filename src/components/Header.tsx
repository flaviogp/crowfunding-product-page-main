import { useState } from 'react'
import Brand from '../assets/images/logo.svg'
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = () => {
        setOpenMenu(!openMenu)
    }
  return (  
    <header className="container relative w-full h-[50px] flex justify-between p-3">
        <div className="relative">
            <img src={Brand} alt="Logo" />
        </div>
        <label htmlFor="menu">
            <input type="checkbox" name="menu" id="menu" onChange={()=> handleChange()} />
        </label>

        {
            openMenu &&
            <nav className='absolute top-[100%] left-[5%] flex flex-col gap-4 bg-white w-[90%] h-max rounded-md'>
                <ul>
                    <li className='p-4 border-b-2 font-semibold'>About</li>
                    <li className='p-4 border-b-2 font-semibold'>Discover</li>
                    <li className='p-4 font-semibold'>Get Started</li>
                </ul>
            </nav>
        }
    </header>
  )
}

export default Header