
interface SelectrewardProps {
    pledge?: number
    amount?: number
}

const SelectReward = ({pledge, amount}: SelectrewardProps) => {
  return (
    <div className="flex flex-col gap-5 p-5 w-[90%] rounded-lg border-2">
        <div className='flex gap-4 items-center'>
            <input type="radio" name="" id=""  className='w-6 h-6 cursor-pointer'/>
            <div>
                <h3 className='font-bold text-lg'>Pledge with no reward</h3>
                {
                    pledge && 
                    <span className="font-bold text-moderateCyan">
                        Pledge ${pledge} or more
                    </span>
                }
            </div>
        </div>

        <p className="text-darkGray leading-7">
            Choose to support us without a reward if you simply believe
            in our project. As a backer, you will be signed up to receive product updates via email.
        </p>
        
        {
            amount && 
            <div className=" flex gap-2 font-bold text-lg">
                {amount}
                <span className="font-normal text-moderateCyan">left</span>
            </div>    
        }

        <div className=" flex flex-col items-center gap-5 border-t-2 pt-6">
            <p className=" text-darkGray text-lg">Enter your pledge</p>
            <div className="flex justify-center gap-5 w-full">
                <input type="text" name="" id="" className="w-24 px-10 py-2 rounded-full border-2"/>
                <button className="py-2 px-5 bg-moderateCyan rounded-full text-white">
                    Continue
                </button>
            </div>
        </div>
    </div>
  )
}

export default SelectReward