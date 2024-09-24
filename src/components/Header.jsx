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
    <div>
    <img className='logo' src='src/img/IMG_20231218_211651_662 - Dhara Macrame.jpg'></img>
    <Link to={"/SobreNosotros"}> <i className="bi bi-cart4"></i></Link>
    </div>
      <Container className='contenedorurl'>
      <NavDropdown title="Inicio" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ProductosDestacados">Productos Destacados </NavDropdown.Item>
              <NavDropdown.Item href="/Login">Cerrar sesion</NavDropdown.Item>
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
              <NavDropdown.Item href="/ProductosTapiz"> Tapiz tamaño estándar y tamaño grande </NavDropdown.Item>
              <NavDropdown.Item href="/CarterasBolsos"> Cartera de mano y bolsos </NavDropdown.Item>
              <NavDropdown.Item href="/ProductosAgregadosForm"> Productos agregados recientemente </NavDropdown.Item>
            </NavDropdown>  
          </Nav>
          <Nav className="me-auto3">
            <NavDropdown title="Metodo de Pago" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sinpe Movil</NavDropdown.Item>
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
