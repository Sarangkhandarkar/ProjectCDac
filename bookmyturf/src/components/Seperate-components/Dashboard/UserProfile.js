import React from 'react'
import { useState } from 'react'
import './Profile.css'

export default function UserProfile() {
    const[sampledata,SetSampledata]=useState({
        first_name: "Aniket",
        last_name:"Daware",
        contact_no:"9403451843",
        email :"aniketdaware3@gamil.com",
        location:"Nashik"
                
    })
  return (
    <div className=' userform container-fluid text-light  mt-5'>
      <h1 className='text-danger text-center'>Welcome To BookMyTurf</h1>
      <h2 className='text-center mt-3'>Hello {sampledata.first_name} {sampledata.last_name}</h2>

      <div className='row'>
      
      <h4 className='mt-4 me-5'>Contact : {sampledata.contact_no}</h4>
      <h4 className='mt-4 '>Email :{sampledata.email}</h4>
      <h4 className='mt-4 '>City : {sampledata.location}</h4>
      </div>
      <div>
        <button value="BookTurf" className='button1 rounded'>Book Turf</button>
       
        <button value="Bookings" className='button2 rounded'>ShowBookings</button>
        
      </div>
    </div>
  )
}