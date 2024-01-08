import { useState } from 'react' 

import { Data } from './interfaces/interfaces'
import{data as _data} from './data/data'

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
  const [data, setData] = useState<Data[]>(_data)

  const handleEndPledge = () => {
    setOpenProject(false);
    setChoiceReward(false)
  }
  const handleClick = () => setOpenProject(!openProject)
  const handleChoiceReward = (val: boolean) => setChoiceReward(val)

  return (
    <div className="scroll-smooth container flex flex-col items-center w-full max-w-[1400px] justify-center relative"> 
      <Header />
      <HeroImages />
      <PresentationContainer handleClick={handleClick} />
      <ProductInfo />
      <About setOpenProject={setOpenProject} data={data}/>
      {openProject && !choiceReward && <BackThisProject handleChoiceReward={handleChoiceReward} handleEndPledge={handleEndPledge}/>}
      {choiceReward && <Thanks handleEndPledge={handleEndPledge}/>}

    </div>
  )
}

export default App
