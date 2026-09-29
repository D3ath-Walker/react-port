import { FaTrophy } from "react-icons/fa"
import GlassBox from "../GlassBox"

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "2", label: "Internships" },
]

const Outcome = () => (
  <GlassBox fullWidth icon={<FaTrophy />} title="Outcome">
    <p className="text-[#a0b8d0] text-[0.95rem] leading-[1.85] font-light mb-6">
      This internship didn't just teach me how to code — it taught me how to think like a developer. I walked away with stronger technical skills, real project experience, and the confidence to build web applications from the ground up. Most importantly, it showed me that continuous learning isn't optional in tech — it's the job.
    </p>
    <div className="flex gap-10">
      {stats.map((stat) => (
        <div key={stat.label}>
          <span className="name-font text-4xl font-bold text-[#4a9eff] block leading-none mb-1.5">
            {stat.value}
          </span>
          <span className="text-sm text-[#6a90b8]">{stat.label}</span>
        </div>
      ))}
    </div>
  </GlassBox>
)

export default Outcome