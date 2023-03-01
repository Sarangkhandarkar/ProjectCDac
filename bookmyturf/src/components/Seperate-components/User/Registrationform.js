import React from 'react'
import "./Loginform.css"

export default function Registrationform() {
  return (
    <div>
        <center><h1>User Registration</h1></center>
      <form className="userform" action="/register" method="post">
        <label for="firstname">First Name:</label>
        <input className='clsinput' type="text" id="firstname" name="firstname" required /><br/>

        <label for="lastname">Last Name:</label>
        <input className='clsinput' type="text" id="lastname" name="lastname" required/><br/>

        <label for="email">Email:</label>
        <input className='clsinput' type="email" id="email" name="email" required/><br/>

        <label for="contactno">Contact Number:</label>
        <input className='clsinput'type="tel" id="contactno" name="contactno" required/><br/>

        <label for="password">Password:</label>
        <input className='clsinput'type="password" id="password" name="password" required/><br/>

        <label for="confirmpassword">Confirm Password:</label>
        <input className='clsinput'type="password" id="confirmpassword" name="confirmpassword" required/><br/>
        <div>
        <label for="role">Role:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className='clsinput'type="radio" id="turfowner" name="role" value="turfowner" required/>
        <label for="turfowner">Turf Owner</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input className='clsinput'type="radio" id="client" name="role" value="client" required/>
        <label for="client">Client</label>
        </div>
        <input className='clsbutton' type="submit" value="Register"/>
      </form>
    </div>
  )
}
