import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/HomePage/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element = {<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
