import {
  FaReact,
  FaPalette,
  FaServer,
  FaDatabase,
  FaChartLine,
  FaLayerGroup,
  FaGitAlt,
  FaCloudUploadAlt,
} from "react-icons/fa"
import GlassBox from "../GlassBox"

const areas = [
  {
    icon: <FaReact />,
    title: "React & Modern Frontend",
    desc: "Building component-driven UIs with React.js, ES6 JavaScript, and Context API for state management",
  },
  {
    icon: <FaPalette />,
    title: "Styling & Responsive Design",
    desc: "Crafting clean, mobile-first layouts with HTML5, CSS3, and Tailwind CSS",
  },
  {
    icon: <FaServer />,
    title: "Backend & APIs",
    desc: "Designing and integrating RESTful APIs using Node.js, Express.js, and FastAPI",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    desc: "Modeling and querying data with MongoDB for real-world applications",
  },
  {
    icon: <FaChartLine />,
    title: "Data & AI",
    desc: "Working with Python, Pandas, NumPy, SQL, Power BI, and vector embeddings for RAG-based systems",
  },
  {
    icon: <FaLayerGroup />,
    title: "Core Programming Foundations",
    desc: "Strengthening OOP and Data Structures & Algorithms across Java, Python, C, and C++",
  },
  {
    icon: <FaGitAlt />,
    title: "Dev Tools & Workflow",
    desc: "Version control and local development with Git, GitHub, VS Code, Docker, and Vite",
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Deployment & Hosting",
    desc: "Shipping projects live using Render and Cloudflare Pages",
  },
]

const Key = () => (
  <GlassBox icon={<FaLayerGroup />} title="Key Learning Areas">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {areas.map((area) => (
        <div
          key={area.title}
          className="flex items-start gap-3 p-4 bg-[rgba(50,120,255,0.05)] border border-[rgba(50,120,255,0.12)] rounded-xl transition-all duration-300 hover:bg-[rgba(50,120,255,0.1)] hover:border-[rgba(74,158,255,0.3)]"
        >
          <span className="w-8 h-8 rounded-lg bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center text-sm shrink-0 mt-0.5">
            {area.icon}
          </span>
          <div>
            <h4 className="text-[0.95rem] font-semibold text-[#d0e4f5] mb-1">{area.title}</h4>
            <p className="text-[0.83rem] text-[#6a90b8] leading-relaxed">{area.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </GlassBox>
)

export default Key