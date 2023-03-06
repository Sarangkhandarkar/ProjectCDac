import {useState} from "react";

import React from 'react'
import httpService from "../../http-service/http-service";
import  "../Sport/AddSport"

export default function AddTurf() {
  const [data,setData] = useState({
    turf_id : "",
    name : "",
    address : "",
    city : "",
    image : "",
    ownerid : {id : ""},
    sports :[]
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
    <div className="text-danger">
        <center><h1>Add Turf</h1></center>
         <form >

         <div className="  mb-3 row ">
         <label htmlFor="name" className='col-sm-2 col-form-label' >Turf Name:</label>
         <div className="col-sm-10">
          <input
            type='text'
            className='form-control'
            id='name'
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
        {/* check boxes */}
        <div className="  mb-3 row ">
        <label htmlFor="image" className='col-sm-2 col-form-label' >Select Sports</label>
        <div className="col-sm-10 ">
          <input type='checkbox' className='form-check-input' id='checkbox1'></input>
          <label htmlFor="checkbox1" className="form-check-label">. Cricket</label>
          <div className="input-group-sm"><input type='text' placeholder="Rate"></input></div>
        </div>
        </div>
        
        
        <div>
          <label htmlFor="cheackbox" className='col-sm-2 col-form-label'>Select Sports</label>
        <div name='cheackbox'>
          <input type='checkbox' value='1' id="1"></input>
        </div>
        <div>
          <button onClick={(e)=>submit(e)}  className='btn btn-primary' value="Addturf">
            Save Or Update
          </button>
        </div>
        </div>
         </form>
    </div>
  )
}
