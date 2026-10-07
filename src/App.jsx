import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BotLogo from './components/BotLogo'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import NotFound from './pages/NotFound'
import Experience from './pages/Experience'
import Projects from './pages/Projects'


const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutme />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <BotLogo />
  </BrowserRouter>
)

export default App