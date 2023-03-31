import { BrowserRouter, Route, Routes } from "react-router-dom";

import FAQ from "./FAQ";
import Contact from "./Contact";
import Home from "./Home";
import Form from "./Form";
import Navbar from "./Nav";
import Footer from "./Footr";
import Auth from "./Auth";
import Reservation from "./Reservation";
import Homme from "./homme";
import Femme from "./Femme";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/Homme" element={<Homme />} />
        <Route path="/Femme" element={<Femme />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
