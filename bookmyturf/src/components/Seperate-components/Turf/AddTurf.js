import {useState} from "react";

import React from 'react'
import httpService from "../../http-service/http-service";

export default function AddTurf() {
  const [data,setData] = useState({
    turfid : "",
    turf_name : "",
    address : "",
    city : "",
    image : "",
    turf_owner_id : "",
    sport_id : ""
  });
  function handleChange(e){
    let newdata = {...data}
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  function submit(e){
    e.preventDefault();
    httpService.addturf(data);
  }
  return (
    <div>
        <center><h1>Add Turf</h1></center>
         <form>
         <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='turf_name'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter turf name'
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='address'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter Address '
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='city'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter City '
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='image'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter Image'
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='turf_owner_id'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter OwnerId'
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='sport_id'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter SportsId'
          />
        </div>
        <div>
          <button onClick={(e)=>submit(e)} className='btn btn-primary' value="Addturf">
            Save Or Update
          </button>
        </div>
         </form>
    </div>
  )
}
