import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

import { ToastContainer } from "react-toastify";

import { Routes, Route } from "react-router-dom";
import StartupSetup from "./Pages/Services/StartupSetup";
import Marketing from "./Pages/Services/Marketing";
import SoftwareDev from "./Pages/Services/SoftwareDev";
import Outsourcing from "./Pages/Services/Outsourcing";
import AboutUs from "./Pages/AboutUs";
import { useEffect } from "react";
import Contact from "./Pages/Contact";
import Assessment from "./Pages/Assessment";
import Career from "./Pages/Career";
import Aos from "aos";
import Blog from "./Pages/Blog";
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
          <Route path="/Services/outsourcing" element={<Outsourcing />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="/assessment" element={<Assessment />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
