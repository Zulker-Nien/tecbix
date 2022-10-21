import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";
import StartupSetup from "./Pages/Services/StartupSetup";
import Marketing from "./Pages/Services/Marketing";
import SoftwareDev from "./Pages/Services/SoftwareDev";
import Outsoucing from "./Pages/Services/Outsoucing";
import AboutUs from "./Pages/AboutUs";

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
          <Route path="/services/startup-setup" element={<StartupSetup />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route
            path="/services/software-development"
            element={<SoftwareDev />}
          />
          <Route path="/services/outsourcing" element={<Outsoucing />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
