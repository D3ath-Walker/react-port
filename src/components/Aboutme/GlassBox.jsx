const GlassBox = ({ icon, title, children }) => (
  <div className="w-full max-w-[820px] mx-auto px-8 py-5 relative z-0">
    <div className="transform-gpu bg-[rgba(10,25,60,0.45)] border border-[rgba(50,120,255,0.18)] rounded-[20px] p-8 backdrop-blur-lg transition-colors transition-shadow duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.08)]">
      <div className="flex items-center gap-3 mb-5 pb-3.5 border-b border-[rgba(50,120,255,0.15)]">
        <span className="w-9 h-9 rounded-[10px] bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center">
          {icon}
        </span>
        <h3 className="name-font text-lg font-bold text-[#e0eaf5]">{title}</h3>
      </div>
      {children}
    </div>
  </div>
)

export default GlassBox