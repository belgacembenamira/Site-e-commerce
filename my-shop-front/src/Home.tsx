import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="row align-items-start mt-3 mx-3 my-3 d-flex justify-content-center">
            <div className="col  ">
              <h1 d-flex justify-content-center>
                {" "}
                <small>Welcom to My-shop </small>
              </h1>
              <i>
                <p d-flex justify-content-center>
                  Myshop est un site marchand qui offre des prix défiant toute
                  concurrence , on y trouve plusieur produits.
                </p>
              </i>
            </div>
            <div className="col">
              <div className="d-flex justify-content-center    ">
                <div className="  d-flex justify-content-center mb-3 w-50 p-3: 18rem  bg-light rounded ">
                  <div className="loop mt-3 mx-3 my-3 max-width: 100%  d-flex justify-content-center">
                    <ReactPlayer
                      loop
                      playing={true}
                      url="https://www.youtube.com/embed/Yab5fRsj2MU"
                    />
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr bg-drak></hr>
        <div></div>

        <div className=" d-flex justify-content-center">
          <h1> Les listes des produits les plus populaires à acheter.</h1>
        </div>

        <div className="row text-center mt-3 mx-3 my-3 " id="test">
          <div className="col-4">
            <div className="zoom-in">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTctbE8fmqtaUGq35n1QR7qCg-hcs8d9UOt4Kj_Chz6yS0f4F01dRweVXnsc3p2OT1rreQ&usqp=CAU"
                />

                <Card.Body>
                  <Card.Title>produit 1</Card.Title>
                  <Card.Text>
                    <del>25$</del>{" "}
                    <ins>
                      {" "}
                      <strong>20$ </strong>
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
                  src="data:image/jpeg;base64,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"
                />

                <Card.Body>
                  <Card.Title>produit 2</Card.Title>
                  <Card.Text>
                    <del>25$</del>
                    <ins>
                      {" "}
                      <ins> <strong>20$ </strong></ins>
                    </ins>{" "}
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
                  src="https://chillandlit.tn/53600-home_default/t-shirt-homme-.jpg"
                />

                <Card.Body>
                  <Card.Title>produit 3</Card.Title>
                  <Card.Text>
                    <del>25$</del> <strong>20$ </strong>
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzGd-T1opka6CzfZTEnw3bt8SJ3T00yedm-uLBY-K8N2KFsheJODvqpMQr6eXJga5Zdg&usqp=CAU"
                />

                <Card.Body>
                  <Card.Title>produit 4</Card.Title>
                  <Card.Text>
                    <del>45$</del> <strong>40$ </strong>
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRom1tuVqvz6LbU-iLYDWb_h7GEXkQlX1VKJw&usqp=CAU"
                />

                <Card.Body>
                  <Card.Title>produit 5</Card.Title>
                  <Card.Text>
                    <del>45$</del> <strong>40$ </strong>
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
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9cqoVN7fNvXGsQZMnHohPt41pjnr50tt6w&usqp=CAU"
                />

                <Card.Body>
                  <Card.Title>produit 6</Card.Title>
                  <Card.Text>
                    <del>45$</del> <strong>40$ </strong>
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
  );
}
export default Home;
