import {useState} from "react";

import React from 'react'
import httpService from "../../http-service/http-service";

export default function AddSport() {
    const [data,setData] = useState({
      sport_id : "",
      sport_name : "",
      max_player: "",
      price_per_hour : "",
      
    });
  
    function handle(e){
      let newdata = {...data}
      newdata[e.target.id] = e.target.value;
      setData(newdata);
    }
    function submit(e){
        e.preventDefault();
        httpService.addSport(data)
      }
      return (
        <div>
  
  
        <div className="  mb-3 row ">
           <label htmlFor="sport_id" className='col-sm-2 col-form-label' >Sport Id:</label>
           <div className="col-sm-10">
            <input
              type='text'
              className='form-control'
              id='sport_id'
              onChange={(e)=>handle(e)}
              placeholder='Enter Sport Id'
            />
        </div>
        </div>
  
           <div className="  mb-3 row ">
           <label htmlFor="sport_name" className='col-sm-2 col-form-label' >Sport Name:</label>
           <div className="col-sm-10">
            <input
              type='text'
              className='form-control'
              id='sport_name'
              onChange={(e)=>handle(e)}
              placeholder='Enter Sport Name'
            />
        </div>
        </div>
  
  
        <div className="  mb-3 row ">
           <label htmlFor="max_player" className='col-sm-2 col-form-label' >Max Players:</label>
           <div className="col-sm-10">
            <input
              type='number'
              className='form-control'
              id='max_player'
              onChange={(e)=>handle(e)}
              placeholder='Enter Max Player'
            />
        </div>
        </div>
  
  
        <div className="  mb-3 row ">
           <label htmlFor="price_per_hour" className='col-sm-2 col-form-label' >Price Per Hour:</label>
           <div className="col-sm-10">
            <input
              type='number'
              className='form-control'
              id='price_per_hour'
              onChange={(e)=>handle(e)}
              placeholder='Enter Price Per Hour'
            />
        </div>
        </div>
        <div>

          <button onClick={(e)=>submit(e)} className='btn btn-primary' value="AddSports">
            AddSport
          </button>
        </div>
  
        </div>
      )
    }