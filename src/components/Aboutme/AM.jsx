import { FaUser } from "react-icons/fa"

const AM = () => (
  <div className="w-full max-w-[820px] mx-auto px-8 py-5 relative z-0">
    <div className="transform-gpu bg-[rgba(10,25,60,0.45)] border border-[rgba(50,120,255,0.18)] rounded-[20px] p-8 backdrop-blur-lg transition-all duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.08)]">
      <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[rgba(50,120,255,0.15)]">
        <span className="w-9 h-9 rounded-[10px] bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center">
          <FaUser />
        </span>
        <h3 className="name-font text-lg font-bold text-[#e0eaf5]">Introduction</h3>
      </div>
      <p className="text-[#a0b8d0] text-[0.97rem] leading-[1.9] font-light">
        Hi! I'm <strong className="text-[#d0e4f5] font-semibold">Ayush Raj</strong>, a BCA student from Patna, Bihar, currently in my 2nd year (Semester IV) at Impact College under Aryabhatta Knowledge University.<br/>
        I'm passionate about Web Development, Software Engineering, and exploring new technologies.<br/>
        I enjoy turning ideas into modern, responsive, and user-friendly web applications while continuously improving my skills through real-world projects.<br/>
        I completed Frontend development and am currently working as a React Developer Intern at <strong className="text-[#d0e4f5] font-semibold">Chipi Technologies</strong>, where I'm gaining hands-on experience in building scalable applications and collaborating on professional development projects.<br/>
        Alongside web development, I'm also expanding my knowledge in Data Analytics, learning Python, NumPy, Pandas, SQL, and Power BI to strengthen my analytical and problem-solving abilities.<br/>
        I believe in continuous learning, writing clean code, and challenging myself with projects that help me grow as a developer.
      </p>
    </div>
  </div>
)

export default AM