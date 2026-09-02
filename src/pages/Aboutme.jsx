import React from 'react'
import AM from '../components/Aboutme/AM'
import Skills from '../components/Aboutme/Skills'
import Education from '../components/Aboutme/Education'
import Certifications from '../components/Aboutme/Certifications'
import Hobbies from '../components/Aboutme/Hobbies'
import Navbar from '../components/Navbar'
import BotLogo from '../components/BotLogo'

const Aboutme = () => {
  return (
    <div className= "fade">
        <main className="min-h-screen flex flex-col items-center pt-28 pb-24">
            <h1 className="name-font text-4xl font-light text-[#e0eaf5] w-full max-w-[820px] px-8 mb-2">
            About <span className="text-[#4a9eff]">Me</span>
            </h1>
            <AM />
            <Skills />
            <Education />
            <Certifications />
            <Hobbies />
        </main>
    </div>
  )
}

export default Aboutme
