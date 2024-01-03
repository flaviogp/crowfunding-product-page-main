import { useState } from 'react' 
import About from './components/About'
import Header from './components/Header'
import HeroImages from './components/HeroImages'
import PresentationContainer from './components/PresentationContainer'
import ProductInfo from './components/ProductInfo'


import BackThisProject from './components/BackThisProject'

function App() {

  const [ openProject, setOpenProject ] = useState(false)
  
  const handleClick = () => setOpenProject(!openProject)

  return (
    <div className="container flex flex-col items-center w-full max-w-[1400px] justify-center relative"> 
      <Header />
      <HeroImages />
      <PresentationContainer handleClick={handleClick} />
      <ProductInfo />
      <About />
      {openProject && <BackThisProject />}
    </div>
  )
}

export default App
