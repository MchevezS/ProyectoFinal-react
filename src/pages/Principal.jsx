import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import CarouselsPrincipal from '../components/CarouselsPrincipal';
import Destacados from '../components/Destacados';
import BarradeBusqueda from '../components/BarradeBusqueda';
function Principal() {
  return (
    <div>
    <Header/>
    <BarradeBusqueda/>
    <div style={{display:'flex', justifyContent:'center'}}> 
    <CarouselsPrincipal/>
    </div>
    <Destacados/>
      
    </div>
  )
}

export default Principal