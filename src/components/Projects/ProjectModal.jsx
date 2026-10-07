import { motion } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-10"
    onClick={onClose}
  >
    <motion.div
      layoutId={`project-card-${project.id}`}
      onClick={(e) => e.stopPropagation()}
      className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[rgba(74,158,255,0.35)] bg-[rgba(10,25,60,0.95)] backdrop-blur-lg shadow-[0_0_50px_rgba(50,120,255,0.2)]"
    >
      <motion.div layoutId={`project-media-${project.id}`} className="relative aspect-video bg-[rgba(50,120,255,0.08)] overflow-hidden">
        {project.video ? (
          <video
            src={project.video /* <-- your demo clip path/import */}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        ) : project.image ? (
          <img
            src={project.image /* <-- your screenshot path/import */}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[#4a6a9a] text-sm">
            Project Preview
          </span>
        )}

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-[rgba(74,158,255,0.4)] text-white flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
        >
          <FaTimes />
        </button>
      </motion.div>

      <div className="p-6 md:p-8">
        <h2 className="name-font text-2xl font-bold text-[#e0eaf5] mb-1">{project.title}</h2>
        <p className="text-sm text-[#4a9eff] mb-4">{project.category}</p>
        <p className="text-[#a0b8d0] text-[0.95rem] leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-[#4a9eff] bg-[rgba(50,120,255,0.1)] border border-[rgba(50,120,255,0.25)] px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4a9eff] text-white text-sm font-medium hover:bg-[#3a8fef] transition-colors duration-300"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[rgba(74,158,255,0.4)] text-[#4a9eff] text-sm font-medium hover:bg-[rgba(74,158,255,0.1)] transition-colors duration-300"
            >
              <FaGithub /> View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)

export default ProjectModal