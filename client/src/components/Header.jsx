import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useProvideAuth } from "../hooks/useAuth";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
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
            <Nav.Link as={Link} to="/login">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;