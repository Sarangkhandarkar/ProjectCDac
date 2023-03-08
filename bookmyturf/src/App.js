import './App.css';
import Navbar from './components/common-components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginform from './components/Seperate-components/User/Loginform';
import Registrationform from './components/Seperate-components/User/Registrationform';
import AddTurf from './components/Seperate-components/Turf/AddTurf';
import Homepage from './components/common-components/Homepage'
import { logincontext } from './components/Contexts/Logincontext';
import AddSport from './components/Seperate-components/Sport/AddSport';
import Footer from './components/common-components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div id='box'></div>
    <div className="container" >
    <logincontext.Provider value={logincontext}>
      <Routes>
        <Route path="/userLogin" element={<Loginform/>} />
        <Route path="/registeruser" element={<Registrationform/>} />
        <Route path="/addturf" element={<AddTurf/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path='/addsport' element={<AddSport/>}/>
       
      </Routes>
      </logincontext.Provider>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
