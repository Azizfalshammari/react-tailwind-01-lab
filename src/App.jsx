import NavBar from './components/NavBar'
import './App.css'
import CarouselItem from './components/CarouselItem'
import Categories from './components/Categories'
import LastItem from './components/LastItem'
import Cardholder from './components/Cardholder'
function App() {

  return (
    <>
    <div className='overflow-clip'>
    <NavBar/>
    <div className='flex justify-center items-center'>
    <CarouselItem/>
    </div>
    <div className='flex justify-center items-center text-start'>
    <Categories/>
    
    </div>
    <div className='flex justify-center items-center text-start'>
      <Cardholder/>
      </div>

      <div className='flex justify-center items-center text-start '>
      <LastItem/>
      </div>
      </div>
    

    </>
  )
}

export default App
