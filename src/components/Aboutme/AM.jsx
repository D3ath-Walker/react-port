import { FaUser } from "react-icons/fa"
import GlassBox from "./GlassBox"

const AM = () => (
  <GlassBox icon={<FaUser />} title="Introduction">
    <p className="text-[#a0b8d0] text-[0.97rem] leading-[1.9] font-light">
      Hi! I'm <strong className="text-[#d0e4f5] font-semibold">Ayush Raj</strong>, a BCA student from Patna, Bihar, currently in my 2nd year (Semester IV) at Impact College under Aryabhatta Knowledge University.<br/>
      I'm passionate about Web Development, Software Engineering, and exploring new technologies.<br/>
      I enjoy turning ideas into modern, responsive, and user-friendly web applications while continuously improving my skills through real-world projects.<br/>
      I completed Frontend development and am currently working as a React Developer Intern at <strong className="text-[#d0e4f5] font-semibold">Chipi Technologies</strong>, where I'm gaining hands-on experience in building scalable applications and collaborating on professional development projects.<br/>
      Alongside web development, I'm also expanding my knowledge in Data Analytics, learning Python, NumPy, Pandas, SQL, and Power BI to strengthen my analytical and problem-solving abilities.<br/>
      I believe in continuous learning, writing clean code, and challenging myself with projects that help me grow as a developer.
    </p>
  </GlassBox>
)

export default AM