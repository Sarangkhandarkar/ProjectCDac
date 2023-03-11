import './App.css';
import Navbar from './components/common-components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginform from './components/Seperate-components/User/Loginform';
import Registrationform from './components/Seperate-components/User/Registrationform';
import AddTurf from './components/Seperate-components/Turf/AddTurf';
import Homepage from './components/common-components/Homepage'
import { Logincontext } from './components/Contexts/Logincontext';
import AddSport from './components/Seperate-components/Sport/AddSport';
import Turf from './components/Seperate-components/Dashboard/Turf_Cards'

import Footer from './components/common-components/Footer';
import OwnerProfile from './components/Seperate-components/Dashboard/OwnerProfile';
import UserProfile from './components/Seperate-components/Dashboard/UserProfile';
import { useState } from 'react';
import BookingPage from './components/Seperate-components/Bookings/BookingPage';
//import Turf_Cards from './components/Seperate-components/Dashboard/Turf_Cards'
function App() {
  const [userdetails,setUserdetails]=useState({})
  const [turfdetails,setTurfdetails]=useState({})
  const [selectedTurf,setSelectedturf]=useState({})
  return (
    <BrowserRouter>
    <Navbar/>
    <div id='box'></div>
    <div className="container" >
    <Logincontext.Provider value={ {userdetails ,setUserdetails, turfdetails,setTurfdetails,selectedTurf,setSelectedturf} }>
      <Routes>
        <Route path='/user' element={<Turf/>} />
        
        <Route path="/userLogin" element={<Loginform/>} />
        <Route path="/registeruser" element={<Registrationform/>} />
        <Route path="/addturf" element={<AddTurf/>} />
        <Route path="/" element={<Homepage/>} />
        <Route path='/addsport' element={<AddSport/>}/>
        <Route path='/OwnerProfile' element={<OwnerProfile/>}/>
        <Route path='/UserProfile' element={<UserProfile/>}/>
        <Route path='/bookturf' element={<BookingPage/>}/>
        {/* <Route path='/turfresults' element={<Turf_Cards/>}/> */}


      </Routes>
      </Logincontext.Provider>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
