import { FaCode } from "react-icons/fa"
import GlassBox from "./GlassBox"

const Skills = () => {
  const categories = [
    { title: "🎨 Frontend", items: ["HTML5", "CSS3", "JavaScript (ES6)", "React.js", "Responsive Web Design", "State Management (Context API)"] },
    { title: "⚙️ Backend & APIs", items: ["Node.js", "Express.js", "RESTful API Design & Integration"] },
    { title: "🗄️ Database", items: ["MongoDB"] },
    { title: "📊 Data Analytics", items: ["Python", "Pandas", "NumPy", "Power BI", "SQL", "Data Visualization"] },
    { title: "💻 Programming", items: ["Java", "Python", "C", "C++"] },
    { title: "🧠 Core Concepts", items: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms"] },
    { title: "🛠️ Tools & Practices", items: ["Git", "GitHub", "VS Code", "Render", "Cloudflare Pages", "Agile/Collaborative Development", "Testing & Debugging"] },
  ]

  return (
    <GlassBox icon={<FaCode />} title="Skills">
      <div className="flex flex-col gap-5">
        {categories.map((category) => (
          <div key={category.title}>
            <h4 className="text-sm text-[#6a90b8] font-medium mb-2.5 uppercase tracking-wide">{category.title}</h4>
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-[rgba(50,120,255,0.1)] border border-[rgba(50,120,255,0.25)] text-[#4a9eff] px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 hover:bg-[rgba(50,120,255,0.2)] hover:border-[#4a9eff] hover:shadow-[0_0_10px_rgba(50,120,255,0.25)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlassBox>
  )
}

export default Skills