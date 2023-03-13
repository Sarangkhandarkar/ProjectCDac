import {useContext, useState} from "react";

import React from 'react'
import httpService from "../../http-service/http-service";
import { Logincontext } from "../../Contexts/Logincontext";
export default function AddSport() {
  const addedsports=[];
  const {ownerturfobject} = useContext(Logincontext)
    const [show,setShow]=useState(false);
    const [data,setData] = useState({
      sport_id : "",
      sportsName : "",
      max_player: "",
      price_per_hour : "",
      turfDetails: {
        turf_id: ""
      },
      timeSlots:{time_id: ""}
    });
  
    function handle(e){
      let newdata = {...data}
      newdata[e.target.id] = e.target.value;
      newdata.turfDetails.turf_id=ownerturfobject.turf_id;
      setData(newdata);
    }
    function submit(e){
        e.preventDefault();
        if(!addedsports.includes(data['sportsName'])){
          alert(data['sportsName'] + 'is added successfully');
          addedsports.push(data['sportsName']);
        httpService.addSport(data).then(resp=>console.log(resp.data))
        }else{
          alert( data['sportsName'] +"  is already added to this turf")
        }
        
      }
      return (show ?(
        <div>
        {/* <div className="  mb-3 row ">
           <label htmlFor="sport_id" className='col-sm-2 col-form-label' >Sport Id:</label>
           <div className="col-sm-10">
              <input type='text' className='form-control' id='sport_id' onChange={(e)=>handle(e)} placeholder='Enter Sport Id'/>
          </div>
        </div> */}
  
           <div className="  mb-3 row ">
           <label htmlFor="sportsName" className='col-sm-2 col-form-label' >Sport Name:</label>
            <div className="col-sm-10">
              <input type='text' className='form-control' id='sportsName' onChange={(e)=>handle(e)} placeholder='Enter Sport Name'/>
            </div>
        </div>
  
  
        <div className="  mb-3 row ">
           <label htmlFor="max_player" className='col-sm-2 col-form-label' >Max Players:</label>
          <div className="col-sm-10">
            <input type='number' className='form-control' id='max_player' onChange={(e)=>handle(e)} placeholder='Enter Max Player'/>
          </div>
        </div>
  
  
        <div className="  mb-3 row ">
           <label htmlFor="price_per_hour" className='col-sm-2 col-form-label' >Price Per Hour:</label>
            <div className="col-sm-10">
              <input type='number' className='form-control' id='price_per_hour' onChange={(e)=>handle(e)} placeholder='Enter Price Per Hour'/>
            </div>
        </div>
              <div>
                <button onClick={(e)=>submit(e)} className='btn btn-primary' value="AddSports">
                  AddSport
                </button>
              </div>
        </div>
      ):(<div className="mt-2"><button className="btn btn-primary" onClick={(e)=>setShow(true)}>Add sport</button></div>))
    }