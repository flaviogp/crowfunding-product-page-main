import CloseImage from '../assets/images/icon-close-modal.svg'
import { Data } from '../interfaces/interfaces'
import SelectReward from './SelectReward'



const descNoReward = `
Choose to support us without a reward if you simply believe
in our project. As a backer, you will be signed up to receive product updates via email.
`

interface BackThisProjectProps {
    handleChoiceReward: (val: boolean) => void
    handleEndPledge: () => void
    data: Data[]
}

const BackThisProject = ({handleChoiceReward, handleEndPledge, data}: BackThisProjectProps) => {

  return (
    <div className="flex pt-44 justify-center w-full h-[450vh] bg-black/40 absolute z-[3]">
        <div className="sm:mt-[550px] sm:max-w-[650px] bg-white flex flex-col gap-6 p-8 w-[90%] h-max rounded-lg items-center">
            <div className=' w-full flex justify-between'>
                <h2 className='font-bold text-2xl'>Back this project</h2>
                <button>
                    <img src={CloseImage} alt="close modal" onClick={handleEndPledge} />
                </button>
            </div>
            <p className='text-darkGray'>
                Want to support usin bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>

            <SelectReward 
                title='Pledge with no reward' 
                description={descNoReward}
                handleChoiceReward={handleChoiceReward}      
                noReward={true}        
            />
            {
                data.map((product) => (
                    <SelectReward 
                        key={`${product.pledge}${product.itemsLeft}`}
                        title={product.title} 
                        pledge={product.pledge}
                        description={product.description}
                        itemsLeft={product.itemsLeft}
                        handleChoiceReward={handleChoiceReward}
                        noReward={false}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default BackThisProject
