import React from 'react'
import i1 from '../../images/image1.jpg'

export default function Homepage() {
  return (
    <div>
      {/* <div className="card w-25">
        <img className="card-img-top" src={i1} alt="Card cap"/>
        <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
 <div className="card-deck w-100 p-5">
        <div className= "card p-2 m-2">
          <img className="card-img-top mw-20" src="" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className= "card p-2 m-2">
          <img className="card-img-top" src= "{i1}" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div className= "card p-2 m-2">
          <img className="card-img-top" src= "{i1}" alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}
