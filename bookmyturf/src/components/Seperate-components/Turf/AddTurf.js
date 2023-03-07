import {useState} from "react";

import React from 'react'
import httpService from "../../http-service/http-service";
import  "../Sport/AddSport"

export default function AddTurf() {
  const [sport,setSport] = useState({
    sportid: "",
    sport_name: "",
    rate_per_hour: "",
    max_players: ""
  })
  const [sportid,setSportid] = useState("");
  const [spname,setSpname] = useState("");
  const [maxplay,setMaxplay] = useState("");
  const [rate,setRate] = useState("");
  // console.log(spid,spname);
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

  function handlesport(e){
    let newsport={...sport}
    newsport[e.target.id]=e.target.value;
    newsport['sport_name']=document.getElementById(newsport['sportid']).innerText;
    setSport(newsport)
  }
  // function addsportsjson(){
  //   let newsport= {...sport}
  //   newsport['sportid']=document.getElementById('sportid').value;
  //   newsport['sport_name']=document.getElementById('sportid').innerText
  //   newsport['no_of_players']=document.getElementById('no_of_players').value;
  //   newsport['max_players']=document.getElementById('max_players').value;
  //   setSport(newsport)
  //   console.log(sport)
  //   let newdata = {...data};
  //   newdata.sports.push(sport);
  //   console.log(data)
  // }
  function addsportsjson(e){
    e.preventDefault();
    let newdata = {...data}
    newdata.sports.push(sport);

  //   let what={...sport};
  //   what['sportid']=spid;
  //   what['sport_name']=document.getElementById(spid).innerText;
  //   what['rate_per_hour']=rate;
  //   what['max_players']=maxplay;
  //   // console.log(what)
  //   setSport(what)
  //   // setSport(newsport);
  //   // newsport['max_players']=document.getElementById('max_players').value;
    
  // //   newsport['no_of_players']=document.getElementById('no_of_players').value;
  // //   newsport['max_players']=document.getElementById('max_players').value;
  }

  return (
    <div className="text-danger rounded-4 mt-5 pe-5 text-center fw-bold text-light">
        <center><div className="my-3"><h1>Add Turf</h1></div></center>
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
        <div className="col"><label htmlFor="image" className='col-sm-5 text-nowrap col-form-label' >Select Sports</label></div>
        {/* <div className="col">
              <input type='checkbox' className='form-check-input' id='checkbox1'></input>
              <label htmlFor="checkbox1" className="form-check-label">. Cricket</label>
        </div> */}
        <div className="col">
        <select className='rounded w-100 p-1' id='sportid' onChange={(e)=>{setSportid(e.target.value);handlesport(e)}} required>
            <option value="0" id="0">Sport Name</option>
            <option value="1" id="1">Cricket</option>
            <option value="2" id="2">Football</option>
            <option value="3" id="3">Batminton</option>
            <option value="4"id="4">Table Tennis</option>
            <option value="5" id="5">Lawn Tennis</option>
          </select>
        </div>
        <div className="col col-xs-4">
            <input type='text'  placeholder="Rate" id="rate_per_hour" onChange={(e)=>handlesport(e)} required></input>  
        </div>
        <div className="col col-xs-4">
            <input type='text' placeholder="Max No of Players" id="max_players" onChange={(e)=>handlesport(e)} required></input>  
        </div>
        <div className="col col-sm-2">
          <select className='rounded w-100 p-1' id='searchtype' required >
            <option value="1" >10:00am - 11:00am</option>
            <option value="2" >11:00am - 12:00pm</option>
            <option value="3">12:00pm - 01:00pm</option>
            <option value="4">01:00pm - 02:00pm</option>
            <option value="5">02:00pm - 03:00pm</option>
            <option value="6">03:00pm - 04:00pm</option>
            <option value="7">04:00pm - 05:00pm</option>
            <option value="8">05:00pm - 06:00pm</option>
            <option value="9">06:00pm - 07:00pm</option>
            <option value="10">07:00pm - 08:00pm</option>
            <option value="11">08:00pm - 09:00pm</option>
          </select>
            {/* <input type='text' placeholder="Time slot"></input>   */}
        </div>
        <button className="col col-sm-1 rounded-3 text-light bg-primary " onClick={(e)=>addsportsjson(e)}>Add</button>
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
