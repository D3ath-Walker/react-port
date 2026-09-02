import { FaCertificate, FaAward, FaRobot, FaCode } from "react-icons/fa"
import { FaLetterboxd } from "react-icons/fa6"

const Certifications = () => {
  const certs = [
    { icon: <FaCode />, title: "Front-end Development", desc: "Certified in Front-end development, including front-end technologies" },
    { icon: <FaLetterboxd />, title: "Letter of Recommendation", desc: "Received a letter of recommendation from Chipi Technologies for completing the Front-end Development course" },
    { icon: <FaAward />, title: "Advance Diploma in Computer Application", desc: "Comprehensive course covering core computer applications and software" },
    { icon: <FaRobot />, title: "AI Certifications", desc: "Multiple certifications in Artificial Intelligence and its applications" },
  ]

  return (
    <div className="w-full max-w-[820px] mx-auto px-8 py-5 relative z-0">
      <div className="transform-gpu bg-[rgba(10,25,60,0.45)] border border-[rgba(50,120,255,0.18)] rounded-[20px] p-8 backdrop-blur-lg transition-all duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.08)]">
        <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[rgba(50,120,255,0.15)]">
          <span className="w-9 h-9 rounded-[10px] bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center">
            <FaCertificate />
          </span>
          <h3 className="name-font text-lg font-bold text-[#e0eaf5]">Certifications</h3>
        </div>

        <div className="flex flex-col gap-4">
          {certs.map((cert) => (
            <div key={cert.title} className="flex items-start gap-4 p-4 bg-[rgba(50,120,255,0.05)] border border-[rgba(50,120,255,0.12)] rounded-xl transition-all duration-300 hover:bg-[rgba(50,120,255,0.1)] hover:border-[rgba(74,158,255,0.3)]">
              <span className="text-xl text-[#4a9eff] mt-0.5 shrink-0">{cert.icon}</span>
              <div>
                <h4 className="text-[0.95rem] font-semibold text-[#d0e4f5] mb-1">{cert.title}</h4>
                <p className="text-[0.83rem] text-[#6a90b8] leading-relaxed">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certifications