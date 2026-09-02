import { FaGamepad } from "react-icons/fa"
import GlassBox from "./GlassBox"

const Hobbies = () => {
  const hobbies = [
    { icon: "⚔️", title: "Valorant", desc: "Tactical shooter grind" },
    { icon: "🏆", title: "League of Legends", desc: "MOBA strategy battles" },
    { icon: "♟️", title: "Chess", desc: "Mind games & strategy" },
    { icon: "🃏", title: "Uno", desc: "Chaos with friends" },
    { icon: "🎌", title: "Anime", desc: "Stories that hit different" },
  ]

  return (
    <GlassBox icon={<FaGamepad />} title="Hobbies & Interests">
      <div className="flex flex-wrap gap-4">
        {hobbies.map((hobby) => (
          <div key={hobby.title} className="flex-1 min-w-[130px] bg-[rgba(50,120,255,0.06)] border border-[rgba(50,120,255,0.15)] rounded-2xl p-5 text-center transition-all duration-300 cursor-default hover:bg-[rgba(50,120,255,0.13)] hover:border-[rgba(74,158,255,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(50,120,255,0.15)]">
            <span className="text-3xl block mb-2.5">{hobby.icon}</span>
            <h4 className="text-[0.88rem] font-semibold text-[#d0e4f5] mb-1">{hobby.title}</h4>
            <p className="text-xs text-[#6a90b8]">{hobby.desc}</p>
          </div>
        ))}
      </div>
    </GlassBox>
  )
}

export default Hobbies