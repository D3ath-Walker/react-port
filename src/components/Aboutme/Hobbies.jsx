import { FaGamepad } from "react-icons/fa"

const Hobbies = () => {
  const hobbies = [
    { icon: "⚔️", title: "Valorant", desc: "Tactical shooter grind" },
    { icon: "🏆", title: "League of Legends", desc: "MOBA strategy battles" },
    { icon: "♟️", title: "Chess", desc: "Mind games & strategy" },
    { icon: "🃏", title: "Uno", desc: "Chaos with friends" },
    { icon: "🎌", title: "Anime", desc: "Stories that hit different" },
  ]

  return (
    <div className="w-full max-w-[820px] mx-auto px-8 py-5 relative z-0">
      <div className="transform-gpu bg-[rgba(10,25,60,0.45)] border border-[rgba(50,120,255,0.18)] rounded-[20px] p-8 backdrop-blur-lg transition-all duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.08)]">
        <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[rgba(50,120,255,0.15)]">
          <span className="w-9 h-9 rounded-[10px] bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center">
            <FaGamepad />
          </span>
          <h3 className="name-font text-lg font-bold text-[#e0eaf5]">Hobbies & Interests</h3>
        </div>

        <div className="flex flex-wrap gap-4">
          {hobbies.map((hobby) => (
            <div key={hobby.title} className="flex-1 min-w-[130px] bg-[rgba(50,120,255,0.06)] border border-[rgba(50,120,255,0.15)] rounded-2xl p-5 text-center transition-all duration-300 cursor-default hover:bg-[rgba(50,120,255,0.13)] hover:border-[rgba(74,158,255,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(50,120,255,0.15)]">
              <span className="text-3xl block mb-2.5">{hobby.icon}</span>
              <h4 className="text-[0.88rem] font-semibold text-[#d0e4f5] mb-1">{hobby.title}</h4>
              <p className="text-xs text-[#6a90b8]">{hobby.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hobbies