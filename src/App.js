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
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init();
  });
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
          <Route path="/Services/startup-setup" element={<StartupSetup />} />
          <Route path="/Services/marketing" element={<Marketing />} />
          <Route
            path="/Services/software-development"
            element={<SoftwareDev />}
          />
          <Route path="/Services/outsourcing" element={<Outsoucing />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
