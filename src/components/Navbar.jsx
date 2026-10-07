import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) => `
  relative px-4 py-2 rounded-full transition-colors duration-300
  ${isActive ? 'text-white' : 'text-[#8aa8cc] hover:text-white'}
  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
  after:h-[2px] after:bg-[#4a9eff] after:rounded-full after:transition-all after:duration-300
  ${isActive ? 'after:w-20 after:shadow-[0_0_8px_#4a9eff]' : 'after:w-0'}
`

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-[rgba(10,25,60,0.6)] border border-[rgba(50,120,255,0.2)] rounded-full px-6 py-2 backdrop-blur-md transform-gpu text-sm">
      <NavLink to="/" className={navLinkClass}>Home</NavLink>
      <NavLink to="/about" className={navLinkClass}>About Me</NavLink>
      <NavLink to="/experience" className={navLinkClass}>Experience</NavLink>
      <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
    </nav>
  )
}

export default Navbar