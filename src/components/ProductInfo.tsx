
const ProductInfo = () => {
  return (
    <div className="container flex flex-col items-center gap-6 px-4 pb-10 w-[90%] max-w-[650px] bg-white shadow-md rounded-md my-10 sm:flex-row sm:flex-wrap sm:justify-center">
        <div className=" flex flex-col gap-2 text-center py-4 border-b-2 sm:border-b-0 sm:border-r-2 sm:pr-10">
            <h2 className="font-bold text-3xl">$89,914</h2>
            <span className="text-darkCyan">of $100,000 backed</span>
        </div>
        <div className=" flex flex-col gap-2 text-center py-4 border-b-2 sm:border-b-0 sm:border-r-2 sm:pr-10">
            <h2 className="font-bold text-3xl">5,007</h2>
            <span className="text-darkCyan">total backers</span>
        </div>
        <div className=" flex flex-col gap-2 text-center py-4">
            <h2 className="font-bold text-3xl">56</h2>
            <span className="text-darkCyan">days left</span>
        </div>
        <div className="rounded-full w-[90%] h-4 bg-gray-200">
            <div className="rounded-full w-[80%] h-full bg-darkCyan"></div>
        </div>
    </div>
  )
}

export default ProductInfo