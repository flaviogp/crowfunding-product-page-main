import {useState } from "react"

interface SelectrewardProps {
    pledge?: number
    itemsLeft?: number
    title: string
    description: string
}


const SelectReward = ({pledge, itemsLeft, description, title}: SelectrewardProps) => {
    const [activeInput, setActiveInput] = useState(false)

    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        e.currentTarget.checked = false;
        setActiveInput(false)
    }

  return (
    <div className={`relative flex flex-col gap-5 p-5 w-full rounded-lg border-2 ${activeInput ? 'border-moderateCyan' : 'border-inherit'} `}>
        <div className='flex gap-4 items-center'>
            <input type="radio" name="select-reward" id="select-reward"  className='w-6 h-6 cursor-pointer' onFocus={() => setActiveInput(true)} onBlur={(e) => handleBlur(e)}  />
            <div>
                <h3 className='font-bold text-lg'>{title}</h3>
                {
                    pledge && 
                    <span className="font-bold text-moderateCyan">
                        Pledge ${pledge} or more
                    </span>
                }
            </div>
        </div>

        <p className="text-darkGray leading-7">
            {description}
        </p>
        
        {
            itemsLeft && 
            <div className=" flex gap-2 font-bold text-lg">
                {itemsLeft}
                <span className="font-normal text-moderateCyan">left</span>
            </div>    
        }

        {
            activeInput && itemsLeft &&
            <div className=" flex flex-col items-center gap-5 border-t-2 pt-6">
                <p className=" text-darkGray text-lg">Enter your pledge</p>
                <div className="flex justify-center gap-5 w-full">
                    <input type="text" name="" id="" className="w-24 px-10 py-2 rounded-full border-2"/>
                    <button className="py-2 px-5 bg-moderateCyan rounded-full text-white">
                        Continue
                    </button>
                </div>
            </div>
        }
        {
            itemsLeft === 0 &&
                <div className="absolute bg-white bg-opacity-50 top-0 l-0 w-full h-full rounded-md"></div>
        }
    </div>
  )
}

export default SelectReward