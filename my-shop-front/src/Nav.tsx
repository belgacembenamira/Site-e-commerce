import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";


function NavBAR() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Navbar.Brand href="/Home">My-shop </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Link to="/">Home</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/Contact">
                  Contact
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/FAQ">
                  FAQ
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/">
                  Nav
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div></div>
    </>
  );
}
export default NavBAR;
