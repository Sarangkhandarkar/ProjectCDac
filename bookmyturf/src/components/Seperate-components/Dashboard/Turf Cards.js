import React, { useContext, useState } from 'react'
import { Logincontext } from '../../Contexts/Logincontext'
import './Card.css'
export default function Turf() {

const [sampledata,setSampledata] = useState({
    name: 'Turf Name',
    address:"Turf Address",
    city:"City",
    contactNo:"Contact"
  })
  return (
    <div>
    <div class="card mb-3" id='container' >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="image1.jpg" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{sampledata.name}</h5>
        <p class="card-text">{sampledata.address}</p>
        <p class="card-text">{sampledata.city}</p>
        <p class="card-text">{sampledata.contactNo}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
)
}
