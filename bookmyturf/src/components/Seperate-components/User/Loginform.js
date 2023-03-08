import React, { useContext, useState } from 'react'
import './Form.css';
import {logincontext} from '../../Contexts/Logincontext'
import httpService from '../../http-service/http-service'

export default function Loginform() {
const data = useContext(logincontext);

	const [loginDetails,setLoginDetails] = useState({
		email:"",
		password:""
	});

	function handlechange(e){
		let newloginDetails = {...loginDetails}
		newloginDetails[e.target.name] = e.target.value;
		setLoginDetails(newloginDetails);
	}
	function submit(e){
		e.preventDefault();
		console.log(data);
		httpService.authenticateUser(loginDetails).then(res => console.log(res.data));
	  }
  return (
    <div >
	<center>
      <form className="userform p-4" action="/login" method="post">
		<h2>Login Form</h2>
		<label className='text-light' for="username"><b>Username</b></label>
		<input className='clsinput' type="text" placeholder="Enter Username" name="email" required onBlur={(e)=>handlechange(e)}/>
		<label  className='text-light'for="password"><b>Password</b></label>
		<input className='clsinput' type="password" placeholder="Enter Password" name="password" required onBlur={(e)=>handlechange(e)}/>
		<button className="btn btn-primary btn-lg" type="submit" onClick={(e)=>submit(e)}>Login</button>
		<div className='text-light mt-2 row'>
			<p className='text-danger w-25 text-nowrap col'>Don't have an account?</p>
			<a className='col mx-2' href="/registeruser">Register</a>
		</div>

		
	</form></center>
    </div>
  )
}
