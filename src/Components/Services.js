import React, { useState } from "react";
import "./services.scss";
const Services = (props) => {
  const [showDesc, setShowDesc] = useState(0);
  return (
    <div className="serviceContainer">
      <div className="serviceWrapper">
        <div className="topLeft">
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
          <div className="banner">
            {props.serviceHeaders.map((item, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    setShowDesc(index);
                    // setClicked(true);
                  }}
                  style={{
                    backgroundColor:
                      showDesc === index
                        ? item.clicked
                          ? "#1f1f1f"
                          : "#0d99a3"
                        : "",
                    color:
                      showDesc === index
                        ? item.clicked
                          ? "#0d99a3"
                          : "#1f1f1f"
                        : "",
                  }}
                >
                  {item}
                  {console.log(showDesc)}
                </p>
              );
            })}
          </div>
        </div>
        <div className="topRight">
          <h1>{props.serviceHeaders[showDesc]}</h1>
          <p>{props.serviceDesc[showDesc]}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
