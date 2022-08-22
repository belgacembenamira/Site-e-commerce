import React from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div>
      <section>
        <h3 className="text-center mb-4 pb-2 text-primary fw-bold">FAQ</h3>
        <p className="text-center mb-5">les reponeses des question fréquante</p>

        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary">
              <i className="far fa-paper-plane text-primary pe-2"></i>C est qoui
              my-shop
            </h6>
            <p>
              <strong>
                <u>My-shop!</u>
              </strong>{" "}
              My-shop est site de e-commerce en linge
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary">
              <i className="fas fa-pen-alt text-primary pe-2"></i>
              comment contacter ?
            </h6>
            <p>
              <strong>
                <u>A l'aide nos pages dans les reseau socieaux </u>
              </strong>{" "}
              <div className="me-5 d-none d-lg-block">
                <h6>les reseaux sociaux sont:</h6>
              </div>
              <a
                target="_blank"
                href="https://fr-fr.facebook.com/myshop.tunisie/"
                className="me-4 text-reset"
                rel="noreferrer"
              >
                {" "}
                facebook
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                href=" https://www.instagram.com/accounts/login/?next=/myshop.fr/"
                className="me-4 text-reset"
              >
                {" "}
                instagrem
                <i className="fab fa-instagram"></i>
              </a>
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mb-4">
            <h6 className="mb-3 text-primary">
              <i className="fas fa-rocket text-primary pe-2"></i> Si vous etes
              un autre message contactez nos a l'aide notre from
            </h6>
            <p>
              notre fromulaire
              <Link
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                to={"/Form"}
              >
                {" "}
                Form
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
