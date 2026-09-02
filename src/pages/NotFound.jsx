import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="fade min-h-screen flex flex-col items-center justify-center text-white text-center px-8">
    <h1 className="name-font text-6xl text-[#4a9eff] mb-4">404</h1>
    <p className="text-[#a0b8d0] mb-6">This page doesn't exist.</p>
    <Link to="/" className="px-6 py-2.5 border border-[#4a9eff] rounded-full text-[#4a9eff] hover:bg-[#4a9eff] hover:text-white transition-all duration-300">
      Back Home
    </Link>
  </div>
)

export default NotFound