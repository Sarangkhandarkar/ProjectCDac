import React, { useContext, useState } from 'react'
import './Form.css';
import {Logincontext} from '../../Contexts/Logincontext'
import httpService from '../../http-service/http-service'
import { useNavigate } from 'react-router-dom';

export default function Loginform() {
const navigate = useNavigate();

const [userrole,setUserrole] =useState({
	userRole: ""
});
const {userdetails,setUserdetails} = useContext(Logincontext);

	const [loginDetails,setLoginDetails] = useState({
		email:"",
		password:""
	});

	function handlechange(e){
		let newloginDetails = {...loginDetails}
		newloginDetails[e.target.name] = e.target.value;
		setLoginDetails(newloginDetails);
	}

	function handleUserRole(e){
		let newuserrole = {...userrole}
		newuserrole[e.target.name]=e.target.value;		
		setUserrole(newuserrole)
	}
	function submit(e){
		e.preventDefault();
		if (userrole.userRole==='TURF_OWNER'){
			httpService.authenticateOwner(loginDetails).then(res => {console.log(res.data);setUserdetails(res.data);});
		}else{
			httpService.authenticateUser(loginDetails).then(res => {console.log(res.data);setUserdetails(res.data);});
			navigate('/UserProfile')
		}
		console.log(userrole.userRole)	
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
		<div className="row" onChange={(e)=>handleUserRole(e)}>
                    <div className="form-check col">
                        <input className="form-check-input " type="radio" name="userRole" id="gridRadios1" value="TURF_OWNER" defaultChecked />
                        <label className="form-check-label bg-light rounded px-2 text-nowrap" htmlFor="gridRadios1">Turf Owner</label>
                    </div>
                    <div className="form-check col">
                        <input className="form-check-input" type="radio" name="userRole" id="gridRadios2" value="USER" />
                        <label className="form-check-label bg-light rounded px-2" htmlFor="gridRadios2">Players</label>
                    </div>
        </div>
		<button className="btn btn-primary btn-lg" type="submit" onClick={(e)=>submit(e)}>Login</button>
		<div className='text-light mt-2 row'>
			<p className='text-danger w-25 text-nowrap col'>Don't have an account?</p>
			<a className='col mx-2 text-danger fw-bold' href="/registeruser">Register</a>
		</div>

		
	</form></center>
    </div>
  )
}
