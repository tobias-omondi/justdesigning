import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/NavbarPage/Navbar';
import Demo from './components/Demopage/Demo';
import Ease from './components/Easing/Ease';

function App() {
 

  return (
    <div>
    < BrowserRouter>
     <Navbar />
    <Routes>
      <Route path='/' element= {<Demo/>} />
      <Route path='/easing' element = {<Ease />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
