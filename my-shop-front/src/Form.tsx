import React from "react";

function Form() {
  return (
    <div className="d-flex d-flex justify-content-center my-5">
      <div className="card bg-light mb-3 w-50 p-3: 18rem d-flex justify-content-center">
        <div className="card-header justify-content-center">
          <h2 className="d-flex  justify-content-center">Formulaire</h2>
        </div>
        <div className="card-body d-flex justify-content-center">
          <div className="d-flex d-flex justify-content-center">
            <form className=" w-100 p-3 h-50 p-3  ">
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Votre mail :</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                ></input>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="exampleFormControlTextarea1">
                  {" "}
                  Votre message
                </label>
                <textarea
                  className="form-control mt-1"
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
              <div className="form-group mt-4">
                <label htmlFor="exampleFormControlTextarea1">
                  {" "}
                  Votre message
                </label>
                <textarea
                  className="form-control mt-1"
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary mb-2 mt-4">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
