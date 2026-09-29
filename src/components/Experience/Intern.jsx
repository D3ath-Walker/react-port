// components/Experience/Intern.jsx
import { FaBriefcase } from "react-icons/fa"
import GlassBox from "../GlassBox"

const StatusBadge = ({ status }) => {
  const isOngoing = status === "Ongoing"
  return (
    <span className={`flex items-center gap-1.5 shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border ${
      isOngoing
        ? "text-[#4a9eff] bg-[rgba(74,158,255,0.1)] border-[rgba(74,158,255,0.3)]"
        : "text-[#4ade80] bg-[rgba(74,222,128,0.1)] border-[rgba(74,222,128,0.3)]"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isOngoing ? 'bg-[#4a9eff] animate-pulse' : 'bg-[#4ade80]'}`}></span>
      {status}
    </span>
  )
}

const internships = [
  {
    role: "React.js Developer Intern",
    org: "Chipi Technologies",
    status: "Ongoing",
    desc: "Currently working as a React.js Developer Intern, building and maintaining features in a real production codebase. Focusing on component-driven architecture, state management, and writing clean, scalable React code alongside the team.",
  },
  {
    role: "Frontend Development Intern",
    org: "Chipi Technologies",
    status: "Completed",
    desc: "At Chipi Technologies, I dove deep into the world of Frontend Web Development — not just learning concepts, but actually building things. I went from writing my first HTML tags to deploying full projects, picking up everything in between: responsive design, JavaScript interactivity, version control, and real-world project workflows. Every challenge I hit made me a sharper developer.",
  },
]

const Intern = () => (
  <GlassBox icon={<FaBriefcase />} title="Internships">
    <div className="flex flex-col divide-y divide-[rgba(50,120,255,0.12)]">
      {internships.map((item) => (
        <div key={item.role} className="py-5 first:pt-0 last:pb-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <h4 className="text-base font-semibold text-[#d0e4f5]">{item.role}</h4>
              <p className="text-sm text-[#4a9eff]">{item.org}</p>
            </div>
            <StatusBadge status={item.status} />
          </div>
          <p className="text-[0.9rem] text-[#a0b8d0] leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </GlassBox>
)

export default Intern