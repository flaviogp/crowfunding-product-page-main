import Reward from "./Reward"

const About = () => {
    
const descBamboo = `
You get an ergonomic stand made of natural 
bamboo. You've helped us launch our promotional
campaign, and you'll be added to a special Backer member list.    
`

const descBlack = `
You get a Black Special Edition computer stand and a personal
thank you. You'll be added to our Backer member list. Shipping
is included.
`
const descMahogany = `
You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
personal thank you. You'll be added to our Backed member list Shipping is included.
`
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

        <Reward 
            title="Bamboo Stand" 
            pledge={25}
            description={descBamboo}
            itemsLeft={101}  
        />
        <Reward 
            title="Black Edition Stand" 
            pledge={75}
            description={descBlack}
            itemsLeft={64}  
        />
        <Reward 
            title="Mahoganu Special Edition" 
            pledge={200}
            description={descMahogany}
            itemsLeft={0}  
        />
    </div>
  )
}

export default About

