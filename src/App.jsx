import "./App.css";
// import Router from"react-router-dom"
import { Routes, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import { Footer } from "./Components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import Service from "./pages/Service/Service";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="service" element={<Service />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
