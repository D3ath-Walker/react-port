const Navbar = () => {
  return (
    <nav className="flex justify-between items-center pt-10 pl-150">

      <div className="flex items-center gap-2 border border-[#4a9eff] rounded-full px-3 py-1">
        <a
          href="#home"
          className="px-4 py-2 text-[#a0b8d0] rounded-full transition-all duration-300 hover:bg-[#4a9eff] hover:text-white"
        >
          Home
        </a>

        <a
          href="#about"
          className="px-4 py-2 text-[#a0b8d0] rounded-full transition-all duration-300 hover:bg-[#4a9eff] hover:text-white"
        >
          About
        </a>

        <a
          href="#projects"
          className="px-4 py-2 text-[#a0b8d0] rounded-full transition-all duration-300 hover:bg-[#4a9eff] hover:text-white"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="px-4 py-2 text-[#a0b8d0] rounded-full transition-all duration-300 hover:bg-[#4a9eff] hover:text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar