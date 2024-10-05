import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";
import AccountModal from "./AccountModal.tsx";

interface SitePrimaryNavbarProps {
  fullWidth?: boolean
}

function SitePrimaryNavbar({ fullWidth }: SitePrimaryNavbarProps) {
  return (
      <Navbar expand="lg" className="bg-primary navbar-dark">
        <Container fluid={fullWidth}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">HK-Portfolio</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink as={Link} to="/">Home</NavLink>
              <NavLink as={Link} to="/apps/weather">Weather</NavLink>
              <NavLink as={Link} to="/apps/todos">Todo Tracker</NavLink>
              <NavLink as={Link} to="/apps/forum">Forum</NavLink>
              <NavLink as={Link} to="/apps/easybill">EasyBills</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <AccountModal />
          </Nav>
        </Container>
      </Navbar>
  );
}

export default SitePrimaryNavbar;