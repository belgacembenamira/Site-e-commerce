export default function Reservation() {
  return (
    <div className="d-flex justify-content-center">
      <div className=" text-center ">
        <div>
          <label className="form-label" htmlFor="form4Example1">
            votre nom
          </label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>
        <div>
          <label className="form-label" htmlFor="form4Example1">
            votre address
          </label>
          <input type="text" id="form4Example1" className="form-control" />
        </div>
        <div>
          <label className="form-label" htmlFor="form4Example1">
            Numero de telephone
          </label>
          <input type="number" id="form4Example1" className="form-control" />
        </div>
        <div className="d-flex justify-content-center btn  btn-block mb-4 ">
          <button type="submit">Reserver</button>
        </div>
      </div>
    </div>
  );
}
