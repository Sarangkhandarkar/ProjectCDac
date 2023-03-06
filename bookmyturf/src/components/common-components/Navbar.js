import {React, useState }from 'react'
import httpService from '../http-service/http-service';

export default function Navbar() {
  const [serchtype,setSerchtype] = useState("");
  const [serchterm,setSearchterm] = useState("");
  function submit(e){
    e.preventDefault();
    setSerchtype(document.getElementById('searchtype').value);
    console.log(serchterm);
    httpService.SearchBy(serchtype,serchterm);
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
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/userLogin">User</a></li>
            <li><a className="dropdown-item" href="/adminLogin">Admin</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/addturf">Addturf</a>
          
        </li>
      </ul>
      <form className="d-flex col-5 form-inline" role="search" onSubmit={(e) => submit(e)}>
      <ul className='my-2 mx-2'>
          {/* <label htmlFor='searchtype' className='bg-primary rounded'>Search by</label> */}
          <select className='rounded' id='searchtype' onChange={(e)=>setSerchtype(e.target.value)}>
            <option value="sports">Sports</option>
            <option value="name" >Name</option>
            <option value="city">City</option>
        </select>
      </ul>
        <input className="form-control" type="search" onChange={(e)=>{setSearchterm(e.target.value);console.log(serchterm)}} placeholder="Search" aria-label="Search"/>
        
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
