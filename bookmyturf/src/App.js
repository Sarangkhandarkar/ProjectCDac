import logo from './logo.svg';
import './App.css';
import Navbar from './components/common-components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginform from './components/Seperate-components/User/Loginform';
import Registrationform from './components/Seperate-components/User/Registrationform';
<<<<<<< HEAD
import ProductBox from './components/common-components/productbox';
import { Card,Button } from 'react-bootstrap';
=======
// import AddTurf from './components/Seperate-components/Turf/AddTurf';
>>>>>>> 29d9997eac0636c411d6ab6a2796cf34146e449a

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div id='box'></div>
    <div className="container">
      <Routes>
        <Route path="/userlogin" element={<Loginform/>} />
        <Route path="/registeruser" element={<Registrationform/>} />
        {/* <Route path="/addturf" element={<AddTurf/>} /> */}
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
