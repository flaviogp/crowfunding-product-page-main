import CheckIcon from '../assets/images/icon-check.svg'

interface ThanksProps{
  handleEndPledge: () => void
}

const Thanks = ({handleEndPledge}: ThanksProps) => {
  return (
    <div id='thanks' className="flex pt-44 justify-center w-full h-[450vh] bg-black/40 absolute">
        <div className='sm:mt-[550px] sm:max-w-[650px] bg-white p-14 w-[90%] h-max flex flex-col items-center gap-6 rounded-lg z-[3]'>
            <img src={CheckIcon} alt="icon ckeck" />
            <h2 className='font-bold text-2xl'>Thanks for your support!</h2>
            <p className='text-darkGray text-center'>
                Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser
                worldwide. You will get an email once our campaign is completed
            </p>
            <a href='#' 
              className='bg-moderateCyan py-3 px-9 rounded-full text-lg font-medium text-white'
              onClick={handleEndPledge}
              >
                Got it!
            </a>
        </div>
    </div>

  )
}

export default Thanks