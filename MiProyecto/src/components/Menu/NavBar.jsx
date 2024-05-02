
import './NavBar.css'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navBar" style={{ width: '100vw' }} >
        <Navbar.Brand href="#home">🍕🥟</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Promos</Nav.Link>
            <NavDropdown title="Productos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Emapandas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fatay</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Tartas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Como Llegar</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
