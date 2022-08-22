import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar p-3 mb-2 bg-info text-white>
        <Navbar.Brand>My-shop</Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown.Item>
              <Link to="/">Home</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/FAQ">FAQ</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Contact">Contact</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Form">Form</Link>
            </NavDropdown.Item>

            {/* <Link to="/Creer compte">Creer compte</Link>
            <Link to="/connexion">connexion</Link> */}
            <Link to="/Contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
