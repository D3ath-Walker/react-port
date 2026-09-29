import { FaChartLine, FaBug, FaPlug, FaServer, FaBolt } from "react-icons/fa"
import GlassBox from "../GlassBox"

const challenges = [
  { icon: <FaServer />, label: "Deployment Constraints" },
  { icon: <FaBolt />, label: "Real-Time Logic" },
  { icon: <FaPlug />, label: "API Design" },
  { icon: <FaBug />, label: "Full-Stack Debugging" },
]

const Chall = () => (
  <GlassBox fullWidth icon={<FaChartLine />} title="Challenges & Growth">
    <p className="text-[#a0b8d0] text-[0.95rem] leading-[1.85] font-light mb-5">
      Getting a FastAPI backend loaded with ML models to actually fit inside Render's free-tier memory limits taught me more about real-world deployment constraints than any tutorial could. Building anti-cheating logic for a live coding contest — tab-switch detection, auto-submission, timed exam states — pushed me into handling edge cases instead of just the happy path. And juggling multi-document background processing with status polling forced me to think in terms of async systems, not just single requests. Every one of these roadblocks left me a noticeably better developer than the one who started them.
    </p>
    <div className="flex flex-wrap gap-2.5">
      {challenges.map((tag) => (
        <span
          key={tag.label}
          className="flex items-center gap-1.5 text-sm font-medium text-[#4a9eff] bg-[rgba(50,120,255,0.1)] border border-[rgba(50,120,255,0.25)] px-3.5 py-1.5 rounded-full"
        >
          {tag.icon}
          {tag.label}
        </span>
      ))}
    </div>
  </GlassBox>
)

export default Chall