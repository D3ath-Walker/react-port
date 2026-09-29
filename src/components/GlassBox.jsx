const GlassBox = ({ icon, title, subtitle, badge, fullWidth, children }) => (
  <div className={fullWidth ? "w-full h-full" : "w-full max-w-[820px] mx-auto px-8 py-5 relative z-0"}>
    <div className="h-full transform-gpu bg-[rgba(10,25,60,0.45)] border border-[rgba(50,120,255,0.18)] rounded-[20px] p-8 backdrop-blur-lg transition-colors transition-shadow duration-300 hover:border-[rgba(74,158,255,0.35)] hover:shadow-[0_0_30px_rgba(50,120,255,0.08)]">
      <div className="flex items-center justify-between gap-3 mb-5 pb-3.5 border-b border-[rgba(50,120,255,0.15)]">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-[10px] bg-[rgba(50,120,255,0.12)] text-[#4a9eff] flex items-center justify-center shrink-0">
            {icon}
          </span>
          <div>
            <h3 className="name-font text-lg font-bold text-[#e0eaf5]">{title}</h3>
            {subtitle && <p className="text-sm text-[#4a9eff] -mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {badge}
      </div>
      {children}
    </div>
  </div>
)

export default GlassBox