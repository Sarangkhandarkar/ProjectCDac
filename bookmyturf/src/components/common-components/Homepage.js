import React from 'react'

export default function Homepage() {
  return (
    <>
   
    
      {/* <div className="card w-25">
        <img className="card-img-top" src={i1} alt="Card cap"/>
        <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
      <div class="card text-bg-dark"id='Homepage'>
  <img src="image1.jpg" class="img-fluid rounded-start" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card " id='Homepage'>
  <img src="image1.jpg" class="img-fluid rounded-start  " alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<div class="card" id='Homepage'  >
  <img src="image1.jpg" class="img-fluid rounded-start" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    </>
  )
}
