import React from 'react'
import '../style/Contactanos.css'


function Contactanos() {
  return (
    <div>
    <h1> Bienvenidos a Dhara Artesanal </h1>
    <div className='contenedorRedes'>
    <div className='redesSociales'>
      <div className='face'>
      <Link to={"Facebook"}> <i className="fa-brands fa-facebook redes"></i> </Link>
      </div>
      <div className='whatsapp'>
        <Link to={"Whatsapp"}> <i className="fa-brands fa-whatsapp redes"></i> </Link>
        </div>
        <div className='insta'>
          <Link to={"Insta"}> <i className="fa-brands fa-instagram redes"></i> </Link> 
          </div>
          <div className='ubicacion'>
           <Link to={"Ubicacion"}> <i className="fa-solid fa-location-dot redes"></i> </Link>
           </div>
    </div>
    <div className='correoTelefono'>
       <Link to={"Correo"}> <i className="fa-solid fa-envelope"> dhara.macrame@gmail.com</i> </Link>
         <div className='telefono'>
         <Link to={"Telefono"}> <i className="fa-solid fa-phone"> +506 83151653</i> </Link>
         </div>     
     </div>  
</div>
    
    </div>
  )
}

export default Contactanos