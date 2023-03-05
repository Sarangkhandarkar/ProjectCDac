import React,{useState} from 'react'
import "./Loginform.css"
import httpService from '../../http-service/http-service';
import md5 from 'crypto-js/md5';


function Registrationform() {
  // const url = "http://localhost:7070/students"
  const [data,setData] =useState({
    firstname: "",
    lastname: "",
    email: "",
    contactno: "",
    password: ""
  })

function handle(e){
  let newdata = {...data}
  newdata[e.target.id] = e.target.value;
  setData(newdata);
}

function passMatch(e){
  if(data.password === e.target.value){
    let obj = {...data};
    obj['password']=md5(e.target.value);
    setData(obj);
  }else{
    e.target.setCustomValidity("password should match");
    //alert("password not match")
  }
}

// function submit(e){
//     e.preventDefault();
//     axios.post(url,{
//       firstname: data.firstname,
//       lastname  : data.lastname,
//       email: data.email,
//       contactno: data.contactno,
//       password: data.password,
//       confirmpassword: data.confirmpassword
//     }).then(resp=>{
//       console.log(resp.data)
//     })

function submit(e){
  e.preventDefault();
  httpService.registeruser(data).then(res => console.log(res.data));
}
  return (
    <div>
        <center><h1>User Registration</h1></center>
      <form autocomplete="off" className=" userform row " onSubmit={(e) => submit(e)}>
     
        

      <div className="form-group row">
                <label htmlFor="firstname" className='col-sm-2 col-form-label bg-light rounded h-25' >First Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onBlur={(e)=>handle(e)} type="text" id="firstname" name="firstname" required /><br/>
                  </div>
      </div>
                  {/* col-sm-3 col-form-label col-form-label-sm text-left */}
      <div className="form-group row">
                <label htmlFor="lastname" className='col-sm-2 col-form-label bg-light rounded h-25'>Last Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onBlur={(e)=>handle(e)} type="text" id="lastname" name="lastname" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label htmlFor="email" className='col-sm-2 col-form-label bg-light rounded h-25'>Email:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onBlur={(e)=>handle(e)}  type="text" id="email" name="email" required /><br/>
                  </div>
      </div>

      <div className="form-group row">
      <label htmlFor="contactno" className='col-sm-2 col-form-label bg-light rounded h-25'>Contact Number:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="tel" onBlur={(e)=>handle(e)} id="contactno" name="contactno" required/><br/>

                  </div>
      </div>

      <div className="form-group row">
                 <label htmlFor="password" className='col-sm-2 col-form-label bg-light rounded h-25'>Password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" onBlur={(e)=>handle(e)} id="password" name="password" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label htmlFor="confirmpassword" className='col-sm-2 col-form-label bg-light rounded h-25'>Confirm Password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" onBlur={(e)=>passMatch(e)} id="confirmpassword" name="confirmpassword" required/><br/>
                  </div>
      </div>   
      <div className=" form-group row">
          <label className="col-form-label col-sm-2 ">Role</label>
              <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userRole" id="gridRadios1" value="turf" defaultChecked />
                        <label className="form-check-label" htmlFor="gridRadios1">Turf Owner</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="userRole" id="gridRadios2" value="player" />
                        <label className="form-check-label" htmlFor="gridRadios2">Players</label>
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
