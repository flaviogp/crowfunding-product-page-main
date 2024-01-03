import CloseImage from '../assets/images/icon-close-modal.svg'
import SelectReward from './SelectReward'


const BackThisProject = () => {
  return (
    <div className="flex items-center justify-center w-full h-[450vh] bg-black/40 absolute">
        <div className="bg-white flex flex-col gap-4 p-5 w-[90%] rounded-lg items-center">
            <div className=' w-full flex justify-between'>
                <h2 className='font-bold text-2xl'>Back this project</h2>
                <button>
                    <img src={CloseImage} alt="close modal" />
                </button>
            </div>
            <p className='text-darkGray'>
                Want to support usin bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>

            <SelectReward pledge={25} amount={101}/>
        </div>
    </div>
  )
}

export default BackThisProject