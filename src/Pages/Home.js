import React from "react";
import "./Home.scss";
import "react-toastify/dist/ReactToastify.css";

import ModelLoader from "../Components/ModelLoader";

function Home() {
  return (
    <div className="homeContainer">
      <ModelLoader />
    </div>
  );
}

export default Home;
