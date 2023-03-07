import React from 'react'
import img1 from '../../images/image1.jpg'
import img2 from '../../images/image2.jpg'
import img3 from '../../images/image3.jpg'
function corousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className=" " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
//     <div id="carouselExample" className="carousel slide">
//   <div className="carousel-inner">
//     <div className="carousel-item active">
//       <img src={img1} className="d-block w-100 " alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={img2} className="d-block w-100" alt="..."/>
//     </div>
//     <div className="carousel-item">
//       <img src={img1} className="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
  )
}

export default corousel
