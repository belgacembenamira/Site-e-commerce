import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
function Femme() {
  return (
    <div>
      <div>
        <div>
          <div className="container">
            <div className="row align-items-start mt-3 mx-3 my-3 d-flex justify-content-center">
              <div className="col ">
                <h1> Welcom to cathogorie Femme</h1>
                <p d-flex justify-content-center>
                  Découvrez la dernière collection de My-shop, feuilletez le
                  catalogue et profitez de toutes les promotions prêt à porter
                  pour les femmes .
                </p>
              </div>
              <div className="col">
                <img
                  className="  mb-15  width:100%;
                  height: 230px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgea2mstvcU2KoOmdLNI-MDKcgoc9R_042g&usqp=CAU"
                  alt="femme"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>

          <div className="row text-center mt-3 mx-3 my-3 " id="test">
            <div className="col-4">
              <div className="zoom-in">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRom1tuVqvz6LbU-iLYDWb_h7GEXkQlX1VKJw&usqp=CAU"
                  />

                  <Card.Body>
                    <Card.Title>produit 82</Card.Title>
                    <Card.Text>
                      <del>45$</del>{" "}
                      <ins>
                        {" "}
                        <strong>40$ </strong>
                      </ins>
                    </Card.Text>
                    <Button variant="light">
                      <Link to="/reservation"> acheter</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-4">
              <div className="">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9cqoVN7fNvXGsQZMnHohPt41pjnr50tt6w&usqp=CAU"
                  />

                  <Card.Body>
                    <Card.Title>produit 100</Card.Title>
                    <Card.Text>
                      {" "}
                      <del>45$</del>{" "}
                      <ins>
                        {" "}
                        <strong>40$ </strong>
                      </ins>
                    </Card.Text>
                    <Button variant="light">
                      <Link to="/reservation"> acheter</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-4 ">
              <div className="">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzGd-T1opka6CzfZTEnw3bt8SJ3T00yedm-uLBY-K8N2KFsheJODvqpMQr6eXJga5Zdg&usqp=CAU"
                  />

                  <Card.Body>
                    <Card.Title>produit 150</Card.Title>
                    <Card.Text>
                      <del>45$</del>{" "}
                      <ins>
                        {" "}
                        <strong>40$ </strong>
                      </ins>
                    </Card.Text>
                    <Button variant="light">
                      <Link to="/reservation"> acheter</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-4">
              <div className="mt-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPeLHEDhHrYHMmP6ICcgKGCG16YMqPXxZsQ&usqp=CAU"
                  />

                  <Card.Body>
                    <Card.Title>produit 950</Card.Title>
                    <Card.Text>
                      <del>45$</del>{" "}
                      <ins>
                        {" "}
                        <strong>40$ </strong>
                      </ins>
                    </Card.Text>
                    <Button variant="light">
                      <Link to="/reservation"> acheter</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-4">
              <div className="mt-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://photos6.spartoo.com/photos/190/19049576/19049576_350_A.jpg"
                  />

                  <Card.Body>
                    <Card.Title>produit 910</Card.Title>
                    <Card.Text>
                      <del>45$</del>{" "}
                      <ins>
                        {" "}
                        <strong>40$ </strong>
                      </ins>
                    </Card.Text>
                    <Button variant="light">
                      <Link to="/reservation"> acheter</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className="col-4">
              <div className="mt-3">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm819wl2hICqIfJjLxQCEn5zR1SHjRynD2rg&usqp=CAU"
                  />

                  <Card.Body>
                    <Card.Title>produit 605</Card.Title>
                    <Card.Text>
                      <del>45$</del>{" "}
                      <ins>
                        {" "}
                        <strong>40$ </strong>
                      </ins>
                    </Card.Text>
                    <Button variant="light">
                      <Link to="/reservation"> acheter</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Femme;
