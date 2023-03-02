import logo from './logo.svg';
import './App.css';
import Navbar from './components/common-components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginform from './components/Seperate-components/User/Loginform';
import Registrationform from './components/Seperate-components/User/Registrationform';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/userlogin" element={<Loginform/>} />
        <Route path="/registeruser" element={<Registrationform/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
