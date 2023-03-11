import React, { useContext } from 'react'
import { Logincontext } from '../../Contexts/Logincontext'
function BookingPage() {
    const {selectedturf} = useContext(Logincontext);
    console.log(selectedturf);
  return (
    <div>
      <h1>this is suppose to be booking page</h1>
    </div>
  )
}

export default BookingPage
