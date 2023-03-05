import {useState} from "react";

import React from 'react'
import httpService from "../../http-service/http-service";
import  "../Sport/AddSport"

export default function AddTurf() {
  const [data,setData] = useState({
    turf_id : "",
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
    httpService.addturf(data).then((resp)=>console.log(resp.data))
  }
  return (
    <div>
        <center><h1>Add Turf</h1></center>
         <form className=" userform row" >

         <div className="  mb-3 row ">
         <label htmlFor="turf_name" className='col-sm-2 col-form-label' >Turf Name:</label>
         <div className="col-sm-10">
          <input
            type='text'
            className='form-control'
            id='turf_name'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter turf name'
          />
          </div>
        </div>


        <div className="  mb-3 row ">
        <label htmlFor="address" className='col-sm-2 col-form-label' >Address:</label>
        <div className="col-sm-10">
          <input
            type='text'
            className='form-control'
            id='address'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter Address '
          />
          </div>
        </div>


        <div className="  mb-3 row ">
        <label htmlFor="city" className='col-sm-2 col-form-label' >City:</label>
        <div className="col-sm-10">
          <input
            type='text'
            className='form-control'
            id='city'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter City '
          />
        </div></div>


        <div className="  mb-3 row ">
        <label htmlFor="image" className='col-sm-2 col-form-label' >image:</label>
        <div className="col-sm-10">
          <input
            type='text'
            className='form-control'
            id='image'
            onChange={(e)=>handleChange(e)}
            placeholder='Enter Image'
          />
        </div>
        </div>
        
        <div>
          <button onClick={(e)=>submit(e)}  className='btn btn-primary' value="Addturf">
            Save Or Update
          </button>
        </div>
         </form>
    </div>
  )
}
