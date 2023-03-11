import React from 'react'
//import { Logincontext } from '../Contexts/Logincontext'

import '../Seperate-components/Dashboard/Card.css'
import './Footer.css'



export default function Homepage() {
// const { data , setData } =useContext(Logincontext);

//   const init = () => {
//   console.log(data)
//   // setData({
//   //   name: 'Vaibhav',
//   //   job: 'developer'
//   // })
//  }

// useEffect(()=>{ init();})
  return (
    <>
    <div className='bg'>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" carousel-transition-duration="0.05">
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
   
    <h4 className="card-text mx-auto mt-5">The five S’s of sports training are:  </h4>
    <h3 className="card-text  mx-auto mt-5"> stamina, speed, strength, skill, and spirit;</h3>
    <h2 className="card-text  mx-auto mt-5">but the greatest of these is spirit.</h2>
  </div>
  </div>
  </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  
  <img src="f10.jpeg" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>

    <h1 className="card-title">Cricket</h1>
    <h3 className="card-text">Life is short, Play Hard!!!</h3>
    
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="f2.jpeg" className="img-fluid rounded-start " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h1 className="card-title">FootBall</h1>
    <h3 className="card-text">Don’t just chase your dreams…run them down!</h3>
    
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="H1.jpg" className="img-fluid rounded-start  opacity-50" id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h1 className="card-title">Hockey</h1>
    <h3 className="card-text">For the love of the Game.</h3>
    
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="tt1.jpg" className="img-fluid rounded-start opacity-50 " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h1 className="card-title">Table Tennis</h1>
    <h3 className="card-text">Get your Game on.</h3>
   
  </div>
  </div>
    </div>


    <div class="carousel-item">
    <div className="card text-bg-dark col-sm-7 mt-5 text-center mx-auto" >
  <img src="T1.jpg" className="img-fluid rounded-start opacity-50 " id='imagecontainer' alt="..."/>
  <div className="card-img-overlay "id='Homepage-Container'>
    <h1 className="card-title">Tennis</h1>
    <h3 className="card-text">Don’t race against others, race against yourself!</h3>
   
  </div>
  </div>
    </div>
 

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>
</div>
</div>
    </>
  )
}
