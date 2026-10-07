import { motion } from 'framer-motion'
import { useState } from 'react'
import useHoverCapable from './Hooks/useHoverCapable'

const ProjectCard = ({ project, onSelect }) => {
  const canHover = useHoverCapable()
  const [isHovering, setIsHovering] = useState(false)

  return (
    <motion.div
      layoutId={`project-card-${project.id}`}
      onClick={() => onSelect(project)}
      onMouseEnter={() => canHover && setIsHovering(true)}
      onMouseLeave={() => canHover && setIsHovering(false)}
      className="cursor-pointer rounded-2xl overflow-hidden border border-[rgba(50,120,255,0.18)] bg-[rgba(10,25,60,0.45)] backdrop-blur-lg transform-gpu transition-colors transition-shadow duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.15)]"
    >
      <motion.div layoutId={`project-media-${project.id}`} className="relative aspect-video bg-[rgba(50,120,255,0.08)] overflow-hidden">
        {project.image ? (
          <img
            src={project.image /* <-- your screenshot path/import */}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${canHover && isHovering && project.video ? 'opacity-0' : 'opacity-100'}`}
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[#4a6a9a] text-sm">
            Project Preview
          </span>
        )}

        {canHover && project.video && (
          <video
            src={project.video /* <-- your short demo clip path/import */}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </motion.div>

      <div className="p-4">
        <h3 className="name-font text-base font-semibold text-[#d0e4f5]">{project.title}</h3>
      </div>
    </motion.div>
  )
}

export default ProjectCard