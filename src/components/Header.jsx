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
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
            <NavDropdown title="Seleccione una opcion" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Registrarse</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Inicio Sesion
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cerrar Sesion</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  );
}

export default BasicExample;
