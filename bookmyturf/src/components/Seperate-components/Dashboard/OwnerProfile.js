import React from 'react'
import { useState } from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom'

export default function OwnerProfile() {
  let navigate = useNavigate();
    const[sampledata,SetSampledata]=useState({
        first_name: "Aniket",
        last_name:"Daware",
        turf_name: "Ak",
        address: "Nashik",
        contact_no:'93434343434',
        email:"aaniket@gmail.com",
        location :"Nashik",        


    })
    function navigationfunction(){
      let path ="/addturf"
      navigate(path);
      alert('button was clicked')
    }
      return (
    <div className=' userform container-fluid text-light  mt-5'>
      <h1 className='text-danger text-center'>Welcome To BookMyTurf</h1>
      <h2 className='text-center mt-3'>Hello {sampledata.first_name}  {sampledata.last_name}</h2>

      <div className='row'>
      
     
      
      <h4 className='mt-4 me-5'>Turf : {sampledata.turf_name}</h4>
      <h4 className='mt-4 '>Address :{sampledata.address}</h4>
      <h4 className='mt-4 me-5'>Contact : {sampledata.contact_no}</h4>
      <h4 className='mt-4 '>Email :{sampledata.email}</h4>
      <h4 className='mt-4 '>City : {sampledata.location}</h4>
      </div>
      <div>
        <button value="AddTurf" onClick={navigationfunction()} className='button1 rounded'>AddTurf</button>
       
        <button value="Bookings" className='button2 rounded'>ShowBookings</button>
        
      </div>
    </div>
  )
}
