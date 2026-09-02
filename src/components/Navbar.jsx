const Navbar = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-[rgba(10,25,60,0.6)] border border-[rgba(50,120,255,0.2)] rounded-full px-10 py-3.5 backdrop-blur-md">
      <a 
        href="#home" className="px-4 py-2 text-[#8aa8cc] rounded-full transition-all duration-300 hover:text-white"
      >
            Home
      </a>
      <a 
        href="#about" className="px-4 py-2 text-[#8aa8cc] rounded-full transition-all duration-300 hover:text-white" 
      >
            About Me
      </a>
      <a 
        href="#projects" className="px-4 py-2 text-[#8aa8cc] rounded-full transition-all duration-300 hover:text-white"
      >
            Experience
      </a>
      <a 
        href="#contact" className="px-4 py-2 text-[#8aa8cc] rounded-full transition-all duration-300 hover:text-white"
      >
            Projects
      </a>
    </nav>
  )
}

export default Navbar