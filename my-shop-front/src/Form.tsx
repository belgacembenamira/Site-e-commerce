import React from "react";

function Form() {
  return (
    <div className="d-flex justify-content-center">
      <form className="form-control form-control-lg w-50 p-3 h-50 p-3">
        <div>
          <label className="form-label" htmlFor="form4Example1">
            Name :
          </label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>
        <div className="form-outline mb-4  form-control-lg mt-4">
          <label className="form-label" htmlFor="form4Example2">
            Email address :
          </label>
          <input type="email" id="form4Example2" className="form-control" />
        </div>
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form4Example3">
            Message :
          </label>
          <textarea className="form-control" id="form4Example3"></textarea>
        </div>

        {/* <div className="form-check d-flex justify-content-center mb-4">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="form4Example4"
            checked
          />
          <label className="form-check-label" htmlFor="form4Example4">
            Send me a copy of this message
          </label>
        </div> */}
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary btn-block mb-4 ">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
export default Form;
