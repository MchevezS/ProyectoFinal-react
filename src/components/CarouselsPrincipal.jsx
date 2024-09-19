import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import '../style/CarouselsPrincipal.css'
function CarouselsPrincipal() {
  return (
  <>
   <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="src/img/33.jpg" className="d-block w-100" alt="..."  style={{ height: '350px' }}/>
    </div>
    <div className="carousel-item">
      <img src="src/img/Lo que dejó junio_20240903_173230_0003 - Dhara Macrame.png" className="d-block w-100" alt="..." style={{ height: '550px' }}/>
    </div>
    <div className="carousel-item">
      <img src="src/img/Lo que dejó junio_20240903_173230_0000 - Dhara Macrame.png" className="d-block w-100" alt="..." style={{ width: '100%', height: 'auto' }}/>
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




    
  </>
  )
}

export default CarouselsPrincipal
