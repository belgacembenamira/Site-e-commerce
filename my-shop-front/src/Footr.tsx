import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footr() {
  return (
    <div className="text-center text-lg-start bg-light text-muted my-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
      </section>

      <section>
        <div className="row">
          <div className="col-4  ">
            <div className="">
              <h6 className="d-flex justify-content-center">
                {" "}
                <Link className="" to="/Home">
                  My-shop
                </Link>
              </h6>
              <div className="mx-15">
                <p>
                  Vu que l'e-commerce, c'est-à-dire le commerce électronique,
                  désignesimplement l'achat et la vente de produits et services
                  sur Internet. Nous avons crée notre site my-shop
                </p>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center ">
            <div>
              <div>
                <h6 className=" text-center">Produit :</h6>
              </div>

              <div>
                <Link to="/Homme">
                  <p>
                    <i> vetement pour les hommes</i>
                  </p>
                </Link>
                <Link to="/Femme">
                  <p>
                    <i> vetement pour les femmes </i>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <h6 className="">Contact:</h6>
              <div>
                <div className="mt-4 my-3">
                  <a
                    href="https://www.facebook.com/myshop.tunisie/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="facebook social mx-3"
                    title="Go  to facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/accounts/login/?next=/myshop.fr/"
                    className="instagram social mx-3"
                    title="Go to instagrem"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </div>

                <h6>
                  <p>Adresse :Ariana 2080</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12767.633318478418!2d10.185495!3d36.868613!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18230110ecd2e03c!2smyshop!5e0!3m2!1sfr!2stn!4v1661690445830!5m2!1sfr!2stn"
                    width="350"
                    height="150"
                    loading="lazy"
                    title="Mp"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </h6>

                <p>
                  <a href="mailto:benamaierabelgacem@gmail.com">
                    benamierabelgacem@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/21693287025"
                    target="_blank"
                    rel="noreferrer"
                  >
                    + 21693287025
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-6 text-bg-primary p-3">
        © 2022 Copyright:
        <Link className="text-reset fw-bold" to="/Home">
          <h6 className=""> My-shop.com</h6>
        </Link>
      </div>
    </div>
  );
}
export default Footr;
