import Reward from "./Reward"

const About = () => {
  return (
    <div className="container flex flex-col items-center gap-6 p-4 pb-10 w-[90%] max-w-[400px] bg-white shadow-md  rounded-md">
        <div className="w-[90%] text-left flex flex-col gap-4">
            <h2 className="font-bold text-xl">
                About this project
            </h2>
            <p className="text-darkGray leading-7">
                The Mastercraft Bamboo Monitor Riser ia a sturdy and stylish platform that elevates
                your screen to a more comfortable viewing heigth.Placing your monitor at eye level has the potential to improve
                your posture and make youmore comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p className="text-darkGray leading-7">
                Featuring artisan craftsmanship, the simplicity of design creates exta desk space bellow your computer to allow notepads,
                pans, and USB sticks to be stored under the stand.
            </p>
        </div>

        <Reward />
    </div>
  )
}

export default About