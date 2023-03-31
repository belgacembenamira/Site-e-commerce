import React, { useState } from "react";

export default function Auth(props: any) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container d-flex justify-content-center">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title  d-flex justify-content-center">
              Connexion
            </h3>
            <div className="text-center">
              Avez vous un compte?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                creer compte
              </span>
            </div>
            <div className="form-group mt-3">
              <label>votre addrese</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>mot de passe </label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Connexion
              </button>
            </div>
            <p className="text-center mt-2">Mot de passe oublié</p>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="Auth-form-container d-flex justify-content-center">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title  d-flex justify-content-center">
            Creation d'un compte
          </h3>
          <div className="text-center">
            vous etes sur de créer un compte ?{" "}
            <span
              className="link-primary  d-flex justify-content-center"
              onClick={changeAuthMode}
            >
              Connexion
            </span>
          </div>
          <div className="form-group mt-3">
            <label>votre Nom</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Belgacem ben amira"
            />
          </div>
          <div className="form-group mt-3">
            <label>votre mail</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="votre adresse mail"
            />
          </div>
          <div className="form-group mt-3">
            <label>mots de passe </label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="mots de passe"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              connexion
            </button>
          </div>
          <p className="text-center mt-2">mots de passe oubliée?</p>
        </div>
      </form>
    </div>
  );
}
