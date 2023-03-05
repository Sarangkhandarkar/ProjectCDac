import './App.css';
import Navbar from './components/common-components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginform from './components/Seperate-components/User/Loginform';
import Registrationform from './components/Seperate-components/User/Registrationform';
import AddTurf from './components/Seperate-components/Turf/AddTurf';
import Homepage from './components/common-components/Homepage'
import i1 from './images/image1.jpg'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div id='box'></div>
    <div className="container">
      <Routes>
        <Route path="/userLogin" element={<Loginform/>} />
        <Route path="/registeruser" element={<Registrationform/>} />
        <Route path="/addturf" element={<AddTurf/>} />
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
