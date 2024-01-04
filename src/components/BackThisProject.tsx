import CloseImage from '../assets/images/icon-close-modal.svg'
import SelectReward from './SelectReward'



const descNoReward = `
Choose to support us without a reward if you simply believe
in our project. As a backer, you will be signed up to receive product updates via email.
`
const descBamboo = `
    You get an ergonomic stand made of natural bamboo. You've helped
    us launch our promotional campaingn, and you'll be added to a special
    Backer member list.
`
const descBlack = `
    You get Black Special Edition computer stand and a personal thank you
    You'll be added to our Backer member list Shipping is included.
`

const descMahogany = `
You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
personal thank you. You'll be added to our Backed member list Shipping is included.
`

const BackThisProject = () => {
  return (
    <div className="flex pt-44 justify-center w-full h-[450vh] bg-black/40 absolute">
        <div className="bg-white flex flex-col gap-6 p-8 w-[90%] h-max rounded-lg items-center">
            <div className=' w-full flex justify-between'>
                <h2 className='font-bold text-2xl'>Back this project</h2>
                <button>
                    <img src={CloseImage} alt="close modal" />
                </button>
            </div>
            <p className='text-darkGray'>
                Want to support usin bringing Mastercraft Bamboo Monitor Riser out in the world?
            </p>

            <SelectReward 
                title='Pledge with no reward' 
                description={descNoReward}
                
            />
            <SelectReward 
                title='Bamboo Stand' 
                pledge={25}
                description={descBamboo}
                itemsLeft={101}

            />
            <SelectReward 
                title='Black Edition Stand' 
                pledge={75}
                description={descBlack}
                itemsLeft={64}

            />
            <SelectReward 
                title='Mahogany Special Edition' 
                pledge={200}
                description={descMahogany}
                itemsLeft={0}

            />
        </div>
    </div>
  )
}

export default BackThisProject