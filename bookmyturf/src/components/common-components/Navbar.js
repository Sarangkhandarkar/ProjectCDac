import {React, useState }from 'react'
import { redirect } from 'react-router-dom'
import httpService from '../http-service/http-service';

export default function Navbar() {
  const [serchterm,setSearchterm] = useState("");
  function submit(e){
    e.preventDefault();
    httpService.getByCity(serchterm);
  }
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Book my Turf</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        {/* login */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/userLogin">User</a></li>
            <li><a className="dropdown-item" href="/adminLogin">Admin</a></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/userlogin">Userlogin</a>
        </li> */}
        {/* registerlogin */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/registeruser">UserRegistration</a>
        </li> */}
        
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
       {/* onSubmit={redirect("/search/"`{${serchterm}}`)} */}
      </ul>
      <form className="d-flex col-5" role="search" onSubmit={(e) => submit(e)}>
        <input className="form-control" type="search" onChange={(e)=>{setSearchterm(e.target.value);console.log(serchterm)}} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
