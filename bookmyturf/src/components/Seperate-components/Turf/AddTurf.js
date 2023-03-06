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
    <div className="text-danger bg-light rounded-4 p-5 mt-5">
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
      <div className="row">
        <div className="col"><label htmlFor="image" className='col-sm-5 col-form-label' >Select Sports</label></div>
        <div className="col">
              <input type='checkbox' className='form-check-input' id='checkbox1'></input>
              <label htmlFor="checkbox1" className="form-check-label">. Cricket</label>
        </div>
        <div className="col col-xs-4">
            <input type='text'  placeholder="Rate"></input>  
        </div>
        <div className="col col-xs-4">
            <input type='text' placeholder="Max No of Players"></input>  
        </div>
        <div className="col col-xs-4">
            <input type='text' placeholder="Time slot"></input>  
        </div>
      </div>





        {/* <div className="mb-3 row ">
                <label htmlFor="image" className='col-sm-2 col-form-label' >Select Sports</label>
          <div className="col-sm-10 col">
              <input type='checkbox' className='form-check-input' id='checkbox1'></input>
              <label htmlFor="checkbox1" className="form-check-label">. Cricket</label>
          </div>  
              <div className="input-group-sm">
                <input type='text' placeholder="Rate"></input>
          </div>
        </div> */}
        
        {/* <label htmlFor="cheackbox" className='col-sm-2 col-form-label'>Select Sports</label> */}
        <div>
            <button onClick={(e)=>submit(e)}  className='btn btn-primary' value="Addturf">Save Or Update</button>
        </div>
         </form>
    </div>
  )
}
