import React from "react";
import "./Home.scss";

import "react-toastify/dist/ReactToastify.css";

// import emailjs from "@emailjs/browser";

import ModelLoader from "../Components/ModelLoader";

function Home() {
  return (
    <div className="homeContainer">
      <ModelLoader />
    </div>
  );
}

export default Home;
