import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logincontext } from '../../Contexts/Logincontext'
import httpService from '../../http-service/http-service'
import './Card.css'
export default function Turf(props) {
const {turfdetails,setSelectedturf,setTurfdetails} = useContext(Logincontext)
const navigate = useNavigate();
const [sampledata,setSampledata] = useState([{
    name: 'Turf Name 1',
    address:"Turf Address 1",
    city:"City 1",
    contactNo:"Contact 1"
  },{
    name: 'Turf Name 2',
    address:"Turf Address 2",
    city:"City 2",
    contactNo:"Contact 2"
  }])

  setTurfdetails(sampledata);
function submit(e){
  httpService.getTurfById(e.target.id).then(resp=>{setSelectedturf(resp.data);console.log(resp.data)});
  navigate('/bookturf');
}
  return (
    turfdetails.map((turf)=>
    <div>
    <div className="card mb-3" id='container' >
  <div className="row g-0">
    <div className="col-md-4">
      <img src="image1.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{turf.name}</h5>
        <p className="card-text">{turf.address}</p>
        <p className="card-text">{turf.city}</p>
        <p className="card-text">{turf.contactNo}</p>
        <button className='' id={turf.id} onClick={(e)=>submit(e)}>Book Turf</button>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
))
}
