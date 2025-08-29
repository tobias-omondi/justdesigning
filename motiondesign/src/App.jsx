import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/Navbar';
import Home from './assets/Home';
import Existanimation from './assets/components/ExistPage/Existanimation';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/existanimation' element = {<Existanimation/>} />
        {/* <Route path='/student/portfolio/login' element = {<StudentLogin />} /> */}
      </Routes>
    </Router>
  );
}

export default App;