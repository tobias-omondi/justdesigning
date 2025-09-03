import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Overview from './components/Overview.jsx'

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Overview />} />
        {/* <Route path='/existanimation' element = {<Existanimation/>} /> */}
        {/* <Route path='/student/portfolio/login' element = {<StudentLogin />} /> */}
      </Routes>
    </Router>
  )
}

export default App
