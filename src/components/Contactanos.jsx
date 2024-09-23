import React from 'react'
import '../style/Contactanos.css'
import { Link } from 'react-router-dom'

function Contactanos() {
  return (
    <div>
    <h1> Bienvenidos a Dhara Artesanal </h1>
    <h2>Sigue nuestras Redes Sociales</h2>
    <div className='contenedorRedes'>

      <div className='face'>
      <Link to={"https://www.facebook.com/profile.php?id=100063838320536"}> <i className="fa-brands fa-facebook redes"></i> </Link>
      </div>
      <div className='whatsapp'>
        <Link to={"https://web.whatsapp.com/"}> <i className="fa-brands fa-whatsapp redes"></i> </Link>
        </div>
        <div className='insta'>
          <Link to={"https://www.instagram.com/dhara.artesanal?igsh=MTR3YXM0bm9pMzJpdQ=="}> <i className="fa-brands fa-instagram redes"></i> </Link> 
          </div>
          <div className='ubicacion'>
           <Link to={"https://www.google.com/maps/dir/9.9319808,-84.1842688/-18.54057,-53.13267/@-3.9939455,-90.588436,4z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"}> <i className="fa-solid fa-location-dot redes"></i> </Link>
           </div>
    <div className='correo'>
       <Link to={"dhara.macrame@gmail.com."}> <i className="fa-solid fa-envelope"> dhara.macrame@gmail.com</i> </Link>
    </div>          
         <div className='telefono'>
         <Link to={"83151653"}> <i className="fa-solid fa-phone"> +506 83151653</i> </Link>
         </div>     
     </div>  

    </div>
    
  
  )
}

export default Contactanos