import React from "react"
import './Footer.css'


export default function Footer() {
  return (
    <footer className=" footer " >
    <div className="bg-dark  ">
    <div className="row">
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Product</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Product 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Plans & Prices</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Frequently asked questions</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Company</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Job postings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News and articles</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 footer-column">
        <ul className="nav flex-column">
          <li className="nav-item">
            <span className="footer-title">Contact & Support</span>
          </li>
          <li className="nav-item">
            <span className="nav-link"><i className="fas fa-phone"></i>+47 45 80 80 80</span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-comments"></i>Live chat</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-envelope"></i>Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><i className="fas fa-star"></i>Give feedback</a>
          </li>
        </ul>
      </div>
    </div>

    <div className="text-center"><i className="fas fa-ellipsis-h"></i></div>
    
    <div className="row text-center">
      <div className="col-md-4 box">
        <span className="copyright quick-links">Copyright &copy; Your Website <script>document.write(new Date().getFullYear())</script>
        </span>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline social-buttons">
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 box">
        <ul className="list-inline quick-links">
          <li className="list-inline-item">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Terms of Use</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </footer>


// {/* <div class="bg-dark text-center text-lg-start text-white">
 
  
 
//     <div class="row mt-4">
     
//       <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
//         <h5 class="text-uppercase">See other books</h5>

//         <ul class="list-unstyled mb-0">
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-book fa-fw fa-sm me-2"></i>All books</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors</a>
//           </li>
//         </ul>
//       </div>
      
//       <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
//         <h5 class="text-uppercase">Execution of the contract</h5>

//         <ul class="list-unstyled">
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy</a>
//           </li>
//         </ul>
//       </div>
//      <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
//         <h5 class="text-uppercase">Publishing house</h5>

//         <ul class="list-unstyled">
//           <li>
//             <a href="#!" class="text-white">The BookStore</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white">123 Street</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white">05765 NY</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-briefcase fa-fw fa-sm me-2"></i>Send us a book</a>
//           </li>
//         </ul>
//       </div>
      

     
//       <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
//         <h5 class="text-uppercase">Write to us</h5>

//         <ul class="list-unstyled">
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the order status</a>
//           </li>
//           <li>
//             <a href="#!" class="text-white"><i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the newsletter</a>
//           </li>
//         </ul>
//       </div>
     
//     </div>
  
  
  

 
//   <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
//     © 2021 Copyright:
//     <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
//   </div>



// </div> */}
  )
}


