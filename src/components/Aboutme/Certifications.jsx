import { FaCertificate, FaAward, FaRobot, FaCode } from "react-icons/fa"
import { FaLetterboxd } from "react-icons/fa6"
import GlassBox from "./GlassBox"

const Certifications = () => {
  const certs = [
    { icon: <FaCode />, title: "Front-end Development", desc: "Certified in Front-end development, including front-end technologies" },
    { icon: <FaLetterboxd />, title: "Letter of Recommendation", desc: "Received a letter of recommendation from Chipi Technologies for completing the Front-end Development course" },
    { icon: <FaAward />, title: "Advance Diploma in Computer Application", desc: "Comprehensive course covering core computer applications and software" },
    { icon: <FaRobot />, title: "AI Certifications", desc: "Multiple certifications in Artificial Intelligence and its applications" },
  ]

  return (
    <GlassBox icon={<FaCertificate />} title="Certifications">
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
    </GlassBox>
  )
}

export default Certifications