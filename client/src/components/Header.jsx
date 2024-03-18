import { Navbar, Nav,  Container } from "react-bootstrap";
import { Link, } from "react-router-dom";
// import { useProvideAuth } from "../hooks/useAuth";

function Header() {
return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">
        THAT'S ANOTHER STORY
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="top-nav" />
      <Navbar.Collapse id="top-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/register">
            Sign Up
          </Nav.Link>
          
          
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/login">
            Sign In
          </Nav.Link>
        
        </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}
export default Header;
