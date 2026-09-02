import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BotLogo from './components/BotLogo'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutme />} />
    </Routes>
    <BotLogo />
  </BrowserRouter>
)

export default App