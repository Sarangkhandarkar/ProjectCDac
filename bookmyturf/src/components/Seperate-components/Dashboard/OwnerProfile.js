import React from 'react'
import { useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Logincontext } from '../../Contexts/Logincontext'

export default function OwnerProfile() {
  let navigate = useNavigate();
  const {userdetails} =useContext(Logincontext);

    // const[sampledata,SetSampledata]=useState({
    //     first_name: "Aniket",
    //     last_name:"Daware",
    //     turf_name: "Ak",
    //     address: "Nashik",
    //     contact_no:'93434343434',
    //     email:"aaniket@gmail.com",
    //     location :"Nashik",        


    // })
    // function navigationfunction(){
    //   let path ="/addturf"
    //   navigate(path);
    // }
    function clickfunction(e){
      navigate(e.target.id);
    }
      return (
    <div className=' userform container-fluid text-light  mt-5'>
      <h1 className='text-danger text-center'>Welcome To BookMyTurf</h1>
      <h2 className='text-center mt-3'>Hello {userdetails.first_name}  {userdetails.last_name}</h2>

      <div className='row'>
      
     
      
      <h4 className='mt-4 me-5'>Turf : {userdetails.turf_name}</h4>
      <h4 className='mt-4 '>Address :{userdetails.address}</h4>
      <h4 className='mt-4 me-5'>Contact : {userdetails.contact_no}</h4>
      <h4 className='mt-4 '>Email :{userdetails.email}</h4>
      <h4 className='mt-4 '>City : {userdetails.location}</h4>
      </div>
      <div>
        <button id="/addturf" onClick={(e)=>clickfunction(e)} className='button1 rounded'>AddTurf</button>
       
        <button  id="/bookings" onClick={(e)=>clickfunction(e)} className='button2 rounded'>ShowBookings</button>
        
      </div>
    </div>
  )
}
