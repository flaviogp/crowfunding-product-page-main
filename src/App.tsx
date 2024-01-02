import Header from './components/Header'
import HeroImages from './components/HeroImages'
import PresentationContainer from './components/PresentationContainer'
import ProductInfo from './components/ProductInfo'
function App() {

  return (
    <div className="container flex flex-col items-center w-full max-w-[1400px] justify-center"> 
      <Header />
      <HeroImages />
      <PresentationContainer />
      <ProductInfo />
    </div>
  )
}

export default App
