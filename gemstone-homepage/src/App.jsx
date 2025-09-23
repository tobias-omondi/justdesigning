import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/NavbarPage/Navbar'
import Hero from './Components/HeroPage/Hero'

function App() {

  return (
    <>
    <Router>
      <Hero />
      <Routes>
        {/* <Route path='/' element = {<Hero/>} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
