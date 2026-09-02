import React from 'react'
import BotLogo from '../components/BotLogo'
import LeftImg from '../components/Home/LeftImg'
import Navbar from '../components/Navbar'
import RightData from '../components/Home/RightData'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020d1a] text-white">
      <Navbar />

      <main className="min-h-[calc(100vh-90px)] flex flex-col justify-center">
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
