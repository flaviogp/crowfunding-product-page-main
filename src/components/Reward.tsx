interface RewardProps {
    title: string
    pledge: number
    description:string
    itemsLeft: number

}

const Reward = ({title, description, itemsLeft, pledge}: RewardProps) => {
  return (
    <div className="container relative flex flex-col sm:flex-row sm:flex-wrap sm:justify-around items-left gap-6 p-5 pb-10 w-[90%] bg-white border rounded-md">
        <div className="flex flex-col sm:flex-row sm:justify-around w-[100%]">
            <h2 className="font-bold text-xl">{title}</h2>
            <span className="text-moderateCyan font-medium">Pledge ${pledge} or more</span>
        </div>
        <p className="text-darkGray">{description}</p>

        <div className="flex items-center gap-2">
            <p className="font-bold text-4xl">{itemsLeft}</p>
            <span className="text-darkGray">left</span>
        </div>

        {
            itemsLeft !== 0 ?
                <button
                    className="py-4 px-10 bg-moderateCyan rounded-full w-max font-bold text-white"
                >
                    Select Reward
                </button>
            :
                <button
                    className="py-4 px-10 bg-darkCyan rounded-full w-max font-bold text-white"
                >
                    Out of Stock
                </button>
        }
        {
            itemsLeft === 0 &&
                <div className="absolute bg-white bg-opacity-60 top-0 l-0 w-full h-full rounded-md"></div>
        }
    </div>
  )
}

export default Reward