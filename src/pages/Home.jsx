import BotLogo from '../components/BotLogo'
import LeftImg from '../components/Home/LeftImg'
import Navbar from '../components/Navbar'
import RightData from '../components/Home/Rightdata'

const Home = () => {
  return (
    <div className="relative z-10 min-h-screen text-white">
      <Navbar />

      <main className="min-h-screen flex flex-col justify-center pt-28 pb-10">
        <div className="w-full max-w-[1200px] mx-auto px-8 grid grid-cols-2 items-center gap-16">
          <LeftImg />
          <RightData />
        </div>

        <BotLogo />
      </main>
    </div>
  )
}

export default Home