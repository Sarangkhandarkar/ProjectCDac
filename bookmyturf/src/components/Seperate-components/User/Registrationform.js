import React,{useState} from 'react'
import './Form.css';
import httpService from '../../http-service/http-service';
import md5 from 'crypto-js/md5';
import { useNavigate } from 'react-router-dom';



function Registrationform() {
  //const userrole = document.getElementsByName('userRole').values;
  // const url = "http://localhost:7070/students"
  // const [data,setData] =useState({
  //   first_name: "",
  //   last_name: "",
  //   email: "",
  //   contact_no: "",
  //   password: "",
  //   role: ""
  // })

  const [data,setData] =useState({
    first_name: "string",
    last_name: "string",
    contact_no: "stringstri",
    password: "string",
    email: "string",
    role: "TURF_OWNER",
    date_of_registration: "",
    location:"string",
    
  })

  function onchangevlaue(e){
    data['role']=e.target.value;
    console.log(e.target.value)
  }
function handle(e){
  let newdata = {...data}
  newdata[e.target.id] = e.target.value;
  setData(newdata);
}

function passMatch(e){
  data['date_of_registration']= new Date().toJSON().slice(0, 10);
  if(data.password === e.target.value){
    let obj = {...data};
    obj['password']=(e.target.value);
    setData(obj);
  }else{
    e.target.setCustomValidity("password should match");
    //alert("password not match")
  }
}

// function submit(e){
//     e.preventDefault();
//     axios.post(url,{
//       first_name: data.first_name,
//       last_name  : data.last_name,
//       email: data.email,
//       contact_no: data.contact_no,
//       password: data.password,
//       confirmpassword: data.confirmpassword
//     }).then(resp=>{
//       console.log(resp.data)
//     })
const navigate = useNavigate();
function submit(e){
  e.preventDefault();
  httpService.registeruser(data).then(res => {console.log(res.data)});
  navigate('/userLogin');
  //data['date_of_registration']=new Date().toLocaleDateString();
}
  return (
    <div className='registerform pe-5'  >
        <center><h1 className='mb-2 text-light'>User Registration</h1></center>
      <form autocomplete="off" onSubmit={(e) => submit(e)}>
     
        

      <div className="form-group row" >
        
                <label htmlFor="first_name" className='col-sm-2 col-form-label fw-bold   text-end text-light  rounded-2 h-25' >First Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control col-xs-4 ' onBlur={(e)=>handle(e)} type="text" id="first_name" name="first_name" required /><br/>
                  </div>
      </div>
                  {/* col-sm-3 col-form-label fw-bold   text-end text-light rounded-2  col-form-label fw-bold   text-end text-light rounded-2 -sm text-left */}
      <div className="form-group row">
                <label htmlFor="last_name" className='col-sm-2 col-form-label fw-bold   text-end text-light rounded-2  h-25'>Last Name:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onBlur={(e)=>handle(e)} type="text" id="last_name" name="last_name" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label htmlFor="email" className='col-sm-2 col-form-label fw-bold   text-end text-light rounded-2  h-25'>Email:</label>
                  <div className="col-sm-10">
                  <input className='form-control' onBlur={(e)=>handle(e)}  type="text" id="email" name="email" required /><br/>
                  </div>
      </div>

      <div className="form-group row">
      <label htmlFor="contact_no" className='col-sm-2 col-form-label fw-bold   text-end text-light rounded-2  h-25'>Contact Number:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="tel" onBlur={(e)=>handle(e)} id="contact_no" name="contact_no" required/><br/>

                  </div>
      </div>

      <div className="form-group row">
      <label htmlFor="location" className='col-sm-2 col-form-label fw-bold   text-end text-light rounded-2  h-25'>City:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="tel" onBlur={(e)=>handle(e)} id="location" name="location" required/><br/>

                  </div>
      </div>

      <div className="form-group row">
                 <label htmlFor="password" className='col-sm-2 col-form-label fw-bold   text-end text-light rounded-2  h-25'>password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" onBlur={(e)=>handle(e)} id="password" name="password" required/><br/>
                  </div>
      </div>

      <div className="form-group row">
                  <label htmlFor="confirmpassword" className='col-sm-2 col-form-label fw-bold   text-end text-light rounded-2   h-25'>Confirm password:</label>
                  <div className="col-sm-10">
                  <input className='form-control'type="password" onBlur={(e)=>passMatch(e)} id="confirmpassword" name="confirmpassword" required/><br/>
                  </div>
      </div>   
      {/* <div className="form-group row">
                  <label htmlFor="date_of_registration" className='col-sm-2 col-form-label fw-bold  text-end text-light rounded-2 h-25'>Registration Date:</label>
                  <div className="col-sm-10">
                  <input className='form-control 'type="date" onBlur={(e)=>handle(e)} id="date_of_registration" name="date_of_registration"  required/><br/>
                  </div>
      </div>    */}
      <div className=" form-group row">
          <label className="col-form-label fw-bold  text-end text-light rounded-2 col-sm-2  ">Role</label>
              <div className="col-sm-10 row" onChange={(e)=>onchangevlaue(e)}>
                    <div className="form-check col mx-auto ps-5">
                        <input className="form-check-input " type="radio" name="userRole" id="gridRadios1" value="TURF_OWNER" defaultChecked />
                        <label className="form-check-label bg-light rounded px-2" htmlFor="gridRadios1">Turf Owner</label>
                    </div>
                    <div className="form-check col mx-auto ps-5">
                        <input className="form-check-input" type="radio" name="userRole" id="gridRadios2" value="USER" />
                        <label className="form-check-label bg-light rounded px-2" htmlFor="gridRadios2">Players</label>
                    </div>
              </div>
      </div>
        {/* <button className='clsbutton'>Register</button> */}
        <div className='row w-25 mx-auto'><input className='btn btn-primary btn-lg mb-3 col-sm-5 mx-auto' type="submit" value="Register" /></div>
      </form>
    </div>
  )
}
export default Registrationform;
