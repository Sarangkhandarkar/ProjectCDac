import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logincontext } from '../../Contexts/Logincontext'
import httpService from '../../http-service/http-service'
import './Card.css'
export default function Turf() {
const {turfdetails,setSelectedturfdetails} = useContext(Logincontext)

//setTurfdetails(props.name.turfdetails)
const navigate = useNavigate();
// const [sampledata,setSampledata] = useState([{
//     name: 'Turf Name 1',
//     address:"Turf Address 1",
//     city:"City 1",
//     contactNo:"Contact 1"
//   },{
//     name: 'Turf Name 2',
//     address:"Turf Address 2",
//     city:"City 2",
//     contactNo:"Contact 2"
//   }])

//   setTurfdetails(sampledata);
function submit(e){
  httpService.getTurfById(e.target.id).then(resp=>{setSelectedturfdetails(resp.data);console.log(resp.data)});
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
        <button id={turf.turf_id} onClick={(e)=>submit(e)}>Book Turf</button>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
)

)
}
