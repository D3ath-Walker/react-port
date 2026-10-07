import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from './Data/projects'

const ProjectsGrid = () => {
  const [selected, setSelected] = useState(null)

  return (
    <div className="w-full max-w-[1100px] mx-auto px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onSelect={setSelected} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  )
}

export default ProjectsGrid