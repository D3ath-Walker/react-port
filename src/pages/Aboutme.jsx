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
    <div>
        <Navbar />

        <main className="min-h-screen flex flex-col justify-center pt-28 pb-10">
            <div className="w-full max-w-[1200px] mx-auto px-8 grid grid-cols-2 items-center gap-16">
               <AM />
               <Skills />
               <Education />
               <Certifications />
               <Hobbies />
            </div>

            <BotLogo />
        </main>
    </div>
  )
}

export default Aboutme
