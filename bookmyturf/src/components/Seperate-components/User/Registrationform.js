import React,{useState} from 'react'
import "./Loginform.css"
//import apiurl from "./APIUrl.json"

import axios from 'axios';
let newdata ="";
function Registrationform() {
  const url = "http://localhost:7070/students"
  const [data,setData] =useState({
    firstname: "",
    lastName  : "",
    email: "",
    contactno: "",
    password: "",
    confirmpassword: ""
  })
  // const [firstName , setFirstName] = useState("")
  // const [lastName , setLastName] = useState("")
  // const [email , setEmail] = useState("")
  // const [contactno , setContactno] = useState("")
  // const [password , setPassword] = useState("")
  // const [confirmpassword , setConfirmpassword] = useState("")

function handle(e){
  newdata = {...data}
  newdata[e.target.id] = e.target.value;
  setData(newdata);
}

function passMatch(e){
  if(data.password === e.target.value){
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }else{
    alert("password not match")
  }
  
}

function submit(e){
    e.preventDefault();
    axios.post(url,{
      firstname: data.firstname,
    lastName  : data.lastName,
    email: data.email,
    contactno: data.contactno,
    password: data.password,
    confirmpassword: data.confirmpassword
    }).then(resp=>{
      console.log(resp.data)
    })

    
}
  return (
    <div>
        <center><h1>User Registration</h1></center>
      <form className=" userform row " onSubmit={(e) => submit(e)}>
     
        

      <div className="form-group row">
                <label for="firstname" className='col-sm-2 col-form-label' >First Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onChange={(e)=>handle(e)} type="text" id="firstname" name="firstname" required /><br/>
                  </div>
      </div>

      <div className="form-group row">
                <label for="lastname" className='col-sm-2 col-form-label'>Last Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onChange={(e)=>handle(e)} type="text" id="lastname" name="lastname" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label for="email" className='col-sm-2 col-form-label'>Email:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onChange={(e)=>handle(e)}  type="text" id="email" name="email" required /><br/>
                  </div>
      </div>

      <div className="form-group row">
      <label for="contactno" className='col-sm-2 col-form-label'>Contact Number:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="tel" onChange={(e)=>handle(e)} id="contactno" name="contactno" required/><br/>

                  </div>
      </div>

      <div className="form-group row">
                 <label for="password" className='col-sm-2 col-form-label'>Password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" onChange={(e)=>handle(e)} id="password" name="password" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label for="confirmpassword" className='col-sm-2 col-form-label'>Confirm Password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" onBlur={(e)=>passMatch(e)} id="confirmpassword" name="confirmpassword" required/><br/>
                  </div>
      </div>   
      <div className=" form-group row">
          <label className="col-form-label col-sm-2 ">Role</label>
              <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userRole" id="gridRadios1" value="turf"  />
                        <label className="form-check-label" for="gridRadios1">Turf Owner</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userRole" id="gridRadios2" value="player" checked />
                        <label className="form-check-label" for="gridRadios2">Players</label>
                    </div>
              </div>
      </div>
        {/* <button className='clsbutton'>Register</button> */}
        <input className='clsbutton' type="submit" value="Register" />
      </form>
    </div>
  )
}
export default Registrationform;
