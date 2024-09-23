import '../style/Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



function BasicExample() {
  return (
  <>
<br/>

<div className='navbar'>
    <Navbar expand="lg" className="bg-body-tertiary">
    <img className='logo' src='src/img/IMG_20231218_211651_662 - Dhara Macrame.jpg'></img>
    <Link to={"carritodecompras"}> <i class="bi bi-cart4"></i></Link>
      <Container>
      <NavDropdown title="Inicio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Bolsa de valor</NavDropdown.Item>
              <NavDropdown.Item href="/ProductosDestacados">Productos Destacados </NavDropdown.Item>
            </NavDropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto1">
            <NavDropdown title="Sobre Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="/SobreNosotros">Informacion sobre la filosofia de Dhara y la nudoterapia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto3">
            <NavDropdown title="Contactanos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Contactanos">ver Informacion</NavDropdown.Item>
            </NavDropdown>  
          </Nav>
            <Nav className="me-auto2">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Aretes"> Aretes</NavDropdown.Item>
              <NavDropdown.Item href="/Tapiz"> Tapiz tamaño estándar y tamaño grande </NavDropdown.Item>
              <NavDropdown.Item href="/Carteras"> Cartera de mano </NavDropdown.Item>
              <NavDropdown.Item href="Cuadros/"> Cuadro personalizado </NavDropdown.Item>
              <NavDropdown.Item href="#action/VerMas"> Ver mas </NavDropdown.Item>
            </NavDropdown>  
          </Nav>
          <Nav className="me-auto3">
            <NavDropdown title="Metodo de Pago" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sinpe Movil </NavDropdown.Item>
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
