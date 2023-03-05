import {useState} from "react";

import React from 'react'

export default function AddTurf() {
  return (
    <div>
        <center><h1>Add Turf</h1></center>
         <form>
         <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='turfName'
            value="turfName"
            onChange={(e) => setTurfName(e.target.value)}
            placeholder='Enter turf name'
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='address'
            value="address"
            onChange={(e) => setAddress(e.target.value)}
            placeholder='Enter Address '
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='city'
            value="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder='Enter City '
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='image'
            value="image"
            onChange={(e) => setImage(e.target.value)}
            placeholder='Enter Image'
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='ownerId'
            value="ownerId"
            onChange={(e) => setOwnerId(e.target.value)}
            placeholder='Enter OwnerId'
          />
        </div>
        <div className=" userform row ">
          <input
            type='text'
            className='form-group row'
            id='sportsId'
            value="sportsId"
            onChange={(e) => setSportsId(e.target.value)}
            placeholder='Enter SportsId'
          />
        </div>
        <div>
          <button onClick={(e) => saveTurf(e)} className='btn btn-primary' value="Addturf">
            Save Or Update
          </button>
        </div>
         </form>
    </div>
  )
}
