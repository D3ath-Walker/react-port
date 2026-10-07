import { useEffect } from 'react'
import ProjectsGrid from '../components/Projects/ProjectsGrid'

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Ayush Raj"
  }, [])

  return (
    <div className="fade">
      <main className="min-h-screen flex flex-col items-center pt-28 pb-24">
        <div className="w-full max-w-[1100px] px-8 mb-8">
          <h1 className="name-font text-4xl font-light text-[#e0eaf5]">
            My <span className="text-[#4a9eff]">Projects</span>
          </h1>
          <p className="text-[#6a90b8] italic mt-1">Things I've built from scratch — real problems, real solutions.</p>
        </div>
        <ProjectsGrid />
      </main>
    </div>
  )
}

export default Projects