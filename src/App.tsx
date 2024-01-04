import { useState } from 'react' 
import About from './components/About'
import Header from './components/Header'
import HeroImages from './components/HeroImages'
import PresentationContainer from './components/PresentationContainer'
import ProductInfo from './components/ProductInfo'


import BackThisProject from './components/BackThisProject'
import Thanks from './components/Thanks'

function App() {

  const [ openProject, setOpenProject ] = useState(false)
  const [choiceReward, setChoiceReward] = useState(false)
  const handleClick = () => setOpenProject(!openProject)
  const handleChoiceReward = (val: boolean) => setChoiceReward(val)

  return (
    <div className="container flex flex-col items-center w-full max-w-[1400px] justify-center relative"> 
      <Header />
      <HeroImages />
      <PresentationContainer handleClick={handleClick} />
      <ProductInfo />
      <About />
      {openProject && !choiceReward && <BackThisProject handleChoiceReward={handleChoiceReward}/>}
      {choiceReward && <Thanks />}

    </div>
  )
}

export default App
