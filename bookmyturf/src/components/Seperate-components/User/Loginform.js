import React, { useState } from 'react'
import './Loginform.css';


export default function Loginform() {
	const [loginDetails,setLoginDetails] = useState({
		username:"",
		password:""
	});

	function handlechange(e){
		loginDetails[e.target.name] = e.target.value;
	}

  return (
    <div>
		
      <form className="userform" action="/login" method="post">
		<h2>Login Form</h2>
		<label for="username"><b>Username</b></label>
		<input className='clsinput' type="text" placeholder="Enter Username" name="username" required onBlur={(e)=>handlechange(e)}/>
		<label for="password"><b>Password</b></label>
		<input className='clsinput' type="password" placeholder="Enter Password" name="password" required onBlur={(e)=>handlechange(e)}/>
		<button className="clsbutton" type="submit">Login</button>
		<div className="register">
			<p>Don't have an account?</p>
			<a href="/registeruser">Register</a>
		</div>

		
	</form>
    </div>
  )
}
