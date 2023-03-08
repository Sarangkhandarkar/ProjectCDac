import React from 'react'

import '../Seperate-components/Dashboard/Card.css'



export default function Homepage() {
  return (
    <>
  
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>

  <div class="carousel-inner ">
  <div class="carousel-item active ">


      <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto " >
  <img src="g1.gif" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay  ">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
  </div>
  </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="f10.jpeg" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="f20.jpeg" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="H1.jpg" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="tt1.jpg" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="T1.jpg" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
  </div>
    </div>
 

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden text-dark">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
</div>

    </>
  )
}
