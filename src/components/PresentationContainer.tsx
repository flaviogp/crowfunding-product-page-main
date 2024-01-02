import Brand from '../assets/images/logo-mastercraft.svg'
import Bookmark from '../assets/images/icon-bookmark.svg'

const PresentationContainer = () => {
  return (
    <div className="container flex flex-col items-center gap-6 px-4 pb-10 w-[90%] max-w-[400px] bg-white shadow-md rounded-md mt-[-70px]">
        <img src={Brand} alt="logo mastercraft"className='w-14 mt-[-28px]'/>       
        <div className='flex flex-col items-center gap-6 w-[90%]'>
            <h1 className='font-bold text-2xl text-center w-64'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-darkGray text-center'>
                A beautifully handcrafted monitor stand to reduce neck and eye strain
            </p>
        </div>
        <div className='flex justify-center gap-4 w-[100%] flex-wrap '>
            <button className='py-4 px-12 bg-darkCyan rounded-full text-white font-semibold'>
                Back this project
            </button>
            <img src={Bookmark} alt="Bookmark" className=''/>
        </div>
        </div>
  )
}

export default PresentationContainer