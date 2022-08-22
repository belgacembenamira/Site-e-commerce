import React from "react";

function Footr() {
  return (
    <div className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Notre reseaux sociaux :</span>
        </div>

        <div>
        <span className="bi bi-facebook"></span>
          <a
            target="_blank"
            href="https://fr-fr.facebook.com/myshop.tunisie/"
            className="me-4 text-reset icon-facebook"
            rel="noreferrer"
          >
            {" "}
            facebook
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
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-4">
            <div className="">
              <h6 className="d-flex justify-content-center">
                <i></i>My-shop
              </h6>
              <p>
                Vu que l'e-commerce, c'est-à-dire le commerce électronique,
                désignesimplement l'achat et la vente de produits et services
                sur Internet. Cependant, le terme est souvent utilisé pour
                décrire toutes les mesures et actions entreprises par un vendeur
                dans le but de vendre des produits directement aux
                consommateurs. nous avons crée notre site my-shop
              </p>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center ">
            <div>
              <div>
                <h6 className=" text-center">Produit :</h6>
              </div>

              <div>
                <p>
                  {" "}
                  <i> vetement pour les hommes</i>
                </p>
                <p>
                  {" "}
                  <i> vetement pour les femmes </i>
                </p>
                <p>
                  {" "}
                  <i> parfun pour les hommes</i>
                </p>
                <p>
                  {" "}
                  <i> parfun pour les femmes</i>
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div>
              <h6 className="d-flex justify-content-center">Contact</h6>
              <div>
                <h6>
                  <p>New York, NY 10012, US</p>
                </h6>

                <p>
                  <i></i>
                  benamierabelgacem@gmail.com
                </p>
                <p>
                  <i></i> + 21693287025
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-6 text-bg-primary p-3">
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="./Home.tsx">
          My-shop.com
        </a>
      </div>
    </div>
  );
}
export default Footr;
