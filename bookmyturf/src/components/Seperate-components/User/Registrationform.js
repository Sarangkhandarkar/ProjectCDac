import React from 'react'
import "./Loginform.css"

export default function Registrationform() {
  return (
    <div>
        <center><h1>User Registration</h1></center>
      <form className=" userform row " action="/register" method="post">
     
        

      <div className="form-group row">
                <label for="firstname" className='col-sm-2 col-form-label' >First Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control' type="text" id="firstname" name="firstname" required /><br/>
                  </div>
      </div>

      <div className="form-group row">
                <label for="lastname" className='col-sm-2 col-form-label'>Last Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control' type="text" id="lastname" name="lastname" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label for="email" className='col-sm-2 col-form-label'>Email:</label>
                  <div className="col-sm-10">
                  <input className='form-control' type="text" id="email" name="Email" required /><br/>
                  </div>
      </div>

      <div className="form-group row">
      <label for="contactno" className='col-sm-2 col-form-label'>Contact Number:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="tel" id="contactno" name="contactno" required/><br/>

                  </div>
      </div>

      <div className="form-group row">
                 <label for="password" className='col-sm-2 col-form-label'>Password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" id="password" name="password" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label for="confirmpassword" className='col-sm-2 col-form-label'>Confirm Password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" id="confirmpassword" name="confirmpassword" required/><br/>
                  </div>
      </div>  
      <div>
      <fieldset className="form-group row" />
        <div className="row">
        <label className="col-form-label col-sm-2 ">Role</label>
          <div className="col-sm-10">
          <div className="form-check">
          <input className="form-check-input" type="radio" name="userRole" id="gridRadios1" value="turf"  />
          <label className="form-check-label" for="gridRadios1">
            Turf Owner
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="userRole" id="gridRadios2" value="player" checked />
          <label className="form-check-label" for="gridRadios2">
            Players
          </label>
        </div>
        </div>
      </div>
      </div>
        <input className='clsbutton' type="submit" value="Register"/>
      </form>
    </div>
  )
}
