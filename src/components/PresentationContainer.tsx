import Brand from '../assets/images/logo-mastercraft.svg'
import Bookmark from '../assets/images/icon-bookmark.svg'

interface PresentationContainerProps {
    handleClick: () => void
}

const PresentationContainer = ({handleClick}: PresentationContainerProps) => {
  return (
    <div className="container flex flex-col items-center gap-6 px-4 pb-10 w-[90%] max-w-[650px] bg-white shadow-md rounded-md mt-[-70px]">
        <img src={Brand} alt="logo mastercraft"className='w-14 mt-[-28px]'/>       
        <div className='flex flex-col items-center gap-6 w-[90%]'>
            <h1 className='font-bold text-3xl text-center'>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-darkGray text-center'>
                A beautifully handcrafted monitor stand to reduce neck and eye strain
            </p>
        </div>
        <div className='flex justify-around gap-4 w-[100%] flex-wrap'>
            <button 
                className='py-4 px-12 bg-darkCyan rounded-full text-white font-semibold'
                onClick={handleClick}
            >
                Back this project
            </button>
            <div className='flex items-center cursor-pointer'>
                <img src={Bookmark} alt="Bookmark" className=' z-[2]' />
                <div className="h-[100%]  text-darkGray text-lg font-semibold hidden sm:flex items-center justify-end bg-darkGray/10 sm:w-[200px] sm:rounded-full sm:pr-10 z-1 ml-[-50px]">Bookmark</div> 
            </div>
        </div>
        </div>
  )
}

export default PresentationContainer