
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
      <Link to={"Facebook"}> <i className="fa-brands fa-facebook"></i> </Link>
        <Link to={"Whatsapp"}> <i className="fa-brands fa-whatsapp"></i> </Link>
          <Link to={"Insta"}> <i className="fa-brands fa-instagram"></i> </Link> 
           <Link to={"Ubicacion"}> <i className="fa-solid fa-location-dot"></i> </Link>
     </div>
  <div className='correoTelefono'>
       <Link to={"Correo"}> <i className="fa-solid fa-envelope"> dhara.macrame@gmail.com</i> </Link>
         <Link to={"Telefono"}> <i className="fa-solid fa-phone"> +506 83151653</i> </Link>
     </div>
</div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <h1 className='nombreEmprendimiento'>Dhara Artesanal </h1>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default BasicExample;
