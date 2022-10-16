import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <div className="mainContainer">
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
