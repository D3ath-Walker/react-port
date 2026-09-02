import { FaGraduationCap } from "react-icons/fa"
import './AM.css'

const Education = () => {
  const items = [
    { title: "BCA – 2nd Year / 4th Semester", inst: "Impact College, Patna", sub: "Affiliated to: Aryabhatta Knowledge University, Patna", year: "2023 – 2026" },
    { title: "12th Standard", inst: "Patna, Bihar", year: "Completed" },
    { title: "10th Standard", inst: "Patna, Bihar", year: "Completed" },
  ]

  return (
    <div className="w-full max-w-[820px] mx-auto px-8 py-5 relative z-0">
      <div className="transform-gpu bg-[rgba(10,25,60,0.45)] border border-[rgba(50,120,255,0.18)] rounded-[20px] p-8 backdrop-blur-lg transition-all duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.08)]">
        <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[rgba(50,120,255,0.15)]">
          <span className="w-9 h-9 rounded-[10px] bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center">
            <FaGraduationCap />
          </span>
          <h3 className="name-font text-lg font-bold text-[#e0eaf5]">Education</h3>
        </div>

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
      </div>
    </div>
  )
}

export default Education