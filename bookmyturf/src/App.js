import './App.css';
import Navbar from './components/common-components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginform from './components/Seperate-components/User/Loginform';
import Registrationform from './components/Seperate-components/User/Registrationform';
import AddTurf from './components/Seperate-components/Turf/AddTurf';
<<<<<<< HEAD
import AddSport from './components/Seperate-components/Sport/AddSport'
=======
import Homepage from './components/common-components/Homepage'
import i1 from './images/image1.jpg'
>>>>>>> ac606a109046b8ecfa58edbb1a87de0289d348dc

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
<<<<<<< HEAD
        <Route path="/addsport" element={<AddSport/>} />
=======
        <Route path="/" element={<Homepage/>} />
>>>>>>> ac606a109046b8ecfa58edbb1a87de0289d348dc
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
