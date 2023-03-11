import React, { useContext } from 'react'
// import { useState } from 'react'
import './Profile.css'
import {Logincontext} from '../../Contexts/Logincontext'
import Turf from './Turf_Cards'

export default function UserProfile() {
    const {turfdetails,userdetails} = useContext(Logincontext)
    //const[sampledata,SetSampledata]=useState(userdetails);

    // const[sampledata,SetSampledata]=useState({
    //     first_name: "Aniket",
    //     last_name:"Daware",
    //     contact_no:"9403451843",
    //     email :"aniketdaware3@gamil.com",
    //     location:"Nashik"
                
    // })
  return (
    <>
    <div className=' userform container-fluid text-light  mt-5'>
      <h1 className='text-danger text-center'>Welcome To BookMyTurf</h1>
      <h2 className='text-center mt-3'>Hello {userdetails.first_name} {userdetails.last_name}</h2>

      <div className='row'>
      
      <h4 className='mt-4 me-5'>Contact : {userdetails.contact_no}</h4>
      <h4 className='mt-4 '>Email :{userdetails.email}</h4>
      <h4 className='mt-4 '>City : {userdetails.location}</h4>
      </div>
      <div>
        <button value="BookTurf" className='button1 rounded'>Book Turf</button>
       
        <button value="Bookings" className='button2 rounded'>ShowBookings</button>
        
      </div>
    </div>
    <Turf name={turfdetails}/>
    </>
  )
}