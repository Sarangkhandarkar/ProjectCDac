import React, { useContext } from 'react'
import { Logincontext } from '../../Contexts/Logincontext'
function BookingPage() {
    const {selectedturf,userdetails} = useContext(Logincontext);
    console.log(selectedturf);
  return (
    <div>
      <div className=' userform container-fluid text-light  mt-5'>
      <h1 className='text-danger text-center'>Welcome To BookMyTurf</h1>
      <h2 className='text-center mt-3'>Hello {userdetails.first_name}  {userdetails.last_name}</h2>

      <div className='row'>
      <h4 className='mt-4 me-5'>Turf : {selectedturf.turf_name}</h4>
      <h4 className='mt-4 '>Address :{selectedturf.address}</h4>
      <h4 className='mt-4 me-5'>Contact : {selectedturf.contact_no}</h4>
      <h4 className='mt-4 '>Email :{selectedturf.email}</h4>
      <h4 className='mt-4 '>City : {selectedturf.location}</h4>
      </div>
    </div>
    </div>
  )
}

export default BookingPage
