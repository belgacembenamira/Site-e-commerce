import { Link } from "react-router-dom";
import { Dropdown, Nav, NavDropdown } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  d-flex p-2 borde">
      <div className="container-fluid">
        <div className="align-top">
          <div className="navbar-brand ">
            <div className="">
              <div className="d-flex">
                <div className="p-2">
                  <div className="">
                    <Link to="/Home">
                      <img
                        className=""
                        src={
                          "https://img.freepik.com/vecteurs-premium/digital-shopping-logo-template-design-vecteur-embleme-design-concept-symbole-creatif-icone_316488-2430.jpg?w=740"
                        }
                        alt="My-shop"
                        width="100"
                        height="100"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-2 mt-4">
                  <div>
                    <Link to="/Home">
                      <h2 className=""> My-shop</h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse    d-flex justify-content-end"
          id="navbarSupportedContent"
        >
          <Nav>
            <div className="d-flex flex-row d-flex justify-content-start">
              <div className="d-flex bd-highlight mb-3 ">
                <div className="p-2 bd-highlight">
                  <NavDropdown.Item>
                    <Link to="/Auth">Connexion</Link>
                  </NavDropdown.Item>
                </div>

                <div className="p-2 bd-highlight">
                  <NavDropdown.Item>
                    <Link to="/FAQ">FAQ</Link>
                  </NavDropdown.Item>
                </div>
                <div className="p-2 bd-highlight">
                  <NavDropdown.Item>
                    <Link to="/Form">Formulaire</Link>
                  </NavDropdown.Item>
                </div>
                <div className="p-2 bd-highlight">
                  <NavDropdown.Item>
                    <Link to="/Contact">Contact</Link>
                  </NavDropdown.Item>
                </div>

                <Dropdown className="mx-5 btn  btn-sm btn-sm">
                  <Dropdown.Toggle variant="primary " id="dropdown-basic">
                    catégorie
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/Homme"> Produit pour les Hommes</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/Femme"> Produit pour les Femmes</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    ></input>

                    <button className="btn btn-outline-success">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </Nav>
          <hr></hr>
        </div>
      </div>
    </nav>
  );
}
