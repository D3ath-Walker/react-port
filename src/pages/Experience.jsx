import { useEffect } from 'react'
import Intern from '../components/Experience/Intern'
import Key from '../components/Experience/Key'
import Project from '../components/Experience/Project'
import Chall from '../components/Experience/Chall'
import Outcome from '../components/Experience/Outcome'

const Experience = () => {
  useEffect(() => {
    document.title = "Experience | Ayush Raj"
  }, [])

  return (
    <div className="fade">
      <main className="min-h-screen flex flex-col items-center pt-28 pb-24">
        <div className="w-full max-w-[820px] px-8 mb-2">
          <h1 className="name-font text-4xl font-light text-[#e0eaf5]">
            My <span className="text-[#4a9eff]">Experience</span>
          </h1>
          <p className="text-[#6a90b8] italic mt-1">Where I turned learning into real-world work.</p>
        </div>

        <Intern />
        <Key />
        <Project />

        <div className="w-full max-w-[820px] grid md:grid-cols-2 gap-5 px-8 py-5">
          <Chall />
          <Outcome />
        </div>
      </main>
    </div>
  )
}

export default Experience