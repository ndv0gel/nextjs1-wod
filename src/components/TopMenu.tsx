import { Container, Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';

export default function TopMenu() {
  return (
    <Navbar expand="md" style={{ backgroundColor: '#fafafa' }}>
      <Container fluid className="px-4">
        <Navbar.Brand href="#">
          <Image src="/banyans-logo.png" width={220} alt="Banyans Logo" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarNav" />
        
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="px-2 active-page">Home</Nav.Link>
            <Nav.Link href="#" className="px-2">Banyans Menu</Nav.Link>
            <Nav.Link href="#" className="px-2">Reservations</Nav.Link>
            <Nav.Link href="#" className="px-2">Events</Nav.Link>
            <Nav.Link href="#" className="px-2">Gift Cards</Nav.Link>
            
            <Nav.Link href="#" className="px-1">
              <i className="fab fa-instagram"></i>
            </Nav.Link>
            <Nav.Link href="#" className="px-1">
              <i className="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link href="#" className="px-1">
              <i className="fab fa-x-twitter"></i>
            </Nav.Link>
            <Nav.Link href="#" className="px-1">
              <i className="fab fa-tiktok"></i>
            </Nav.Link>
            
            <NavDropdown title="English" id="language-dropdown" className="px-2">
              <NavDropdown.Item href="#">English</NavDropdown.Item>
              <NavDropdown.Item href="#">日本語</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}