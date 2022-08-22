import React from "react";

function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <form className=" w-50 p-3 h-50 p-3  ">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">
            votre mail s'il vous plait
          </label>
          <input
            type="email"
            className="form-control mt-1"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="form-group mt-4">
          <label htmlFor="exampleFormControlSelect1">
            {" "}
            vous pourriez faire la selection de votre option{" "}
          </label>
          <select className="form-control mt-1" id="exampleFormControlSelect1">
            <option> votre reclamation</option>
            <option>votre opition</option>
            <option>votre Question</option>
          </select>
        </div>
        <div className="form-group"></div>
        <div className="form-group mt-4">
          <label htmlFor="exampleFormControlTextarea1"> your message</label>
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
  );
}

export default Contact;
