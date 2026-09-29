import { FaFolder, FaGithub } from "react-icons/fa"
import GlassBox from "../GlassBox"

const projects = [
  {
    number: "01",
    title: "PDF RAG — Retrieval-Augmented Generation System",
    date: "2026",
    desc: "Built a full-stack RAG system from scratch — PDF extraction, chunking, embeddings (all-MiniLM-L6-v2), and hybrid cosine similarity + BM25 search feeding a local LLM (Qwen2.5) for answer generation. Backend is FastAPI with per-document indexing and background processing, paired with a React frontend. Dockerized and shipped, with backend deployment on Render's free tier still being tuned around memory limits from the loaded ML models.",
    tags: ["FastAPI", "React", "Docker", "RAG", "LLM"],
  },
  {
    number: "02",
    title: "HTML Learning Hub",
    date: "June 2026 – July 2026",
    desc: "An interactive learning platform delivering 50 structured HTML video tutorials with notes, code examples, and live output previews. Built independently end-to-end, including student registration, a personalized dashboard, and MongoDB-backed progress tracking. Deployed on Cloudflare Pages (frontend) and Render (backend).",
    tags: ["React", "MongoDB", "Cloudflare Pages", "Render"],
  },
  {
    number: "03",
    title: "Code Correction Championship (CCC)",
    date: "Nov 2025 – May 2026",
    desc: "A full-stack online coding contest platform with participant registration, an admin panel, and a real-time timed exam environment. Includes anti-cheating controls — disabled copy/paste, a 3-attempt tab-switch limit, and auto-submission — with results automatically evaluated and stored in MongoDB.",
    tags: ["Full-Stack", "MongoDB", "Real-Time"],
  },
  {
    number: "04",
    title: "Portfolio Website (React)",
    date: "2026 · In Progress",
    desc: "Migrating this personal portfolio from vanilla HTML/CSS/JS to React + Vite + Tailwind CSS v4, for a component-driven, faster-loading site.",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
]

const Project = () => (
  <GlassBox icon={<FaFolder />} title="Projects Completed">
    <div className="flex flex-col divide-y divide-[rgba(50,120,255,0.12)]">
      {projects.map((project) => (
        <div key={project.number} className="flex gap-5 py-5 first:pt-0 last:pb-0">
          <span className="name-font text-2xl text-[rgba(74,158,255,0.3)] shrink-0 leading-none pt-0.5">
            {project.number}
          </span>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
              <h4 className="text-base font-semibold text-[#d0e4f5]">{project.title}</h4>
              <span className="text-xs text-[#506a88]">{project.date}</span>
            </div>
            <p className="text-[0.88rem] text-[#a0b8d0] leading-relaxed mb-3">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#4a9eff] bg-[rgba(50,120,255,0.1)] border border-[rgba(50,120,255,0.25)] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
    <a
      href="https://github.com/D3ath-Walker"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 mt-6 pt-5 border-t border-[rgba(50,120,255,0.12)] text-sm text-[#6a90b8] hover:text-[#4a9eff] transition-colors duration-300 w-fit"
    >
      <FaGithub />
      More projects on GitHub
    </a>
  </GlassBox>
)

export default Project