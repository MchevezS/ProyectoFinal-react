import '../style/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function BasicExample() {
  return (
  <>
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
<br/>

<div className='navbar'>
    <Navbar expand="lg" className="bg-body-tertiary">
    <img className='logo' src='src/img/IMG_20231218_211651_662 - Dhara Macrame.jpg'></img>
      <Container>
      <NavDropdown title="Inicio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bolsa de valor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Productos Destacados </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto1">
            <NavDropdown title="Sobre Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Informacion sobre la filosofia de Dhara y la nudoterapia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Nav className="me-auto2">
            <NavDropdown title="Productos/Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">aca voy agregar todos los productos que haya </NavDropdown.Item>
            </NavDropdown>  
          </Nav>
          <Nav className="me-auto3">
            <NavDropdown title="Metodo de Pago" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sinpe Movil</NavDropdown.Item>
            </NavDropdown>  
          </Nav>
        </Navbar.Collapse>
          <i className="fa-solid fa-bars"></i>
      </Container>
    </Navbar>
    </div>
    </>
  );
}

export default BasicExample;
