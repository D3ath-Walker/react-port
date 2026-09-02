import { FaGraduationCap } from "react-icons/fa"
import GlassBox from "./GlassBox"
import './AM.css'

const Education = () => {
  const items = [
    { title: "BCA – 2nd Year / 4th Semester", inst: "Impact College, Patna", sub: "Affiliated to: Aryabhatta Knowledge University, Patna", year: "2023 – 2026" },
    { title: "12th Standard", inst: "Patna, Bihar", year: "Completed" },
    { title: "10th Standard", inst: "Patna, Bihar", year: "Completed" },
  ]

  return (
    <GlassBox icon={<FaGraduationCap />} title="Education">
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div key={item.title} className={`flex gap-5 relative ${i < items.length - 1 ? 'timeline-item pb-6' : 'pb-0'}`}>
            <div className="w-[15px] h-[15px] rounded-full bg-[#4a9eff] border-2 border-[rgba(50,120,255,0.3)] shadow-[0_0_10px_rgba(74,158,255,0.5)] shrink-0 mt-1"></div>
            <div>
              <h4 className="text-base font-semibold text-[#d0e4f5] mb-1">{item.title}</h4>
              <p className="text-[0.88rem] text-[#4a9eff] mb-0.5">{item.inst}</p>
              {item.sub && <p className="text-[0.82rem] text-[#6a90b8] mb-1.5">{item.sub}</p>}
              <span className="text-xs text-[#506a88] bg-[rgba(50,120,255,0.08)] px-2.5 py-1 rounded-full border border-[rgba(50,120,255,0.15)]">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </GlassBox>
  )
}

export default Education