import React, { useContext, useState } from 'react'
import { Logincontext } from '../../Contexts/Logincontext'
import './Card.css'
export default function Turf() {
const {userdetails} = useContext(Logincontext)
const [sampledata,setSampledata] = useState({
    name: 'Turf Name',
    address:"Turf Address",
    city:"City",
    contactNo:"Contact"
  })
  return (

    <div>
    <div className="card mb-3" id='container' >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="image1.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{sampledata.name}</h5>
        <p className="card-text">{sampledata.address}</p>
        <p className="card-text">{sampledata.city}</p>
        <p className="card-text">{sampledata.contactNo}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
)
}
