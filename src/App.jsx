import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BotLogo from './components/BotLogo'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import NotFound from './pages/NotFound'

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutme />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <BotLogo />
  </BrowserRouter>
)

export default App