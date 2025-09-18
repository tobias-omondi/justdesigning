import { useState } from 'react'
import './App.css'
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Navbar from './components/NavbarPage/Navbar';
import Demo from './components/Demopage/Demo';
import Ease from './components/Easing/Ease';
import Back from './components/Easing/Back';
import Bounce from './components/Easing/Bounce';
import Elastic from './components/Easing/Elastic';

function App() {
 

  return (
    <div>
    < BrowserRouter>
     <Navbar />
    <Routes>
      <Route path='/' element= {<Demo/>} />
      <Route path='/easing' element = {<Ease />} />
      <Route path='/back' element = {<Back />} />
      <Route path='/bounce' element = {<Bounce/>} />
      <Route path='/elastic' element = {<Elastic/>} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
