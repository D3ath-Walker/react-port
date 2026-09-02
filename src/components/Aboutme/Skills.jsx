import { FaCode } from "react-icons/fa"

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
    <div className="w-full max-w-[820px] mx-auto px-8 py-10 relative z-0">
      <div className="transform-gpu bg-[rgba(10,25,60,0.45)] border border-[rgba(50,120,255,0.18)] rounded-[20px] p-8 backdrop-blur-lg transition-colors transition-shadow duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.08)]">

        <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[rgba(50,120,255,0.15)]">
          <span className="w-9 h-9 rounded-[10px] bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center">
            <FaCode />
          </span>
          <h3 className="name-font text-lg font-bold text-[#e0eaf5]">Skills</h3>
        </div>

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
      </div>
    </div>
  )
}

export default Skills