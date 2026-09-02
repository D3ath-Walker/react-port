import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutme />} />
    </Routes>
  </BrowserRouter>
)
export default App