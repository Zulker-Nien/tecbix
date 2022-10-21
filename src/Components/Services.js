import React from "react";

import "./services.scss";
const Services = (props) => {
  return (
    <div className="serviceContainer">
      <div className="serviceWrapper">
        <div className="topSection">
          <h1>{props.title}</h1>
          <div className="banner"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
