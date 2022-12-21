import React, { useState } from "react";
import "./services.scss";
const Services = (props) => {
  const [showDesc, setShowDesc] = useState(0);
  return (
    <div className="serviceContainer">
      <div className="serviceWrapper">
        <div className="topLeft">
          {/* <h1>{props.title}</h1> */}
          <div className="banner">
            {props.serviceHeaders.map((item, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    setShowDesc(index);
                  }}
                  style={{
                    backgroundColor:
                      showDesc === index
                        ? item.clicked
                          ? "#1f1f1f"
                          : "#00dbde"
                        : "",
                    color:
                      showDesc === index
                        ? item.clicked
                          ? "#00dbde"
                          : "#1f1f1f"
                        : "",
                    width:
                      showDesc === index
                        ? item.clicked
                          ? "15vw"
                          : "15vw"
                        : "",
                    transition: "width 0.3s",
                  }}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        <div className="topRight">
          <h1>{props.serviceHeaders[showDesc]}</h1>
          <p>{props.serviceDesc[showDesc].para1}</p>
          <p>{props.serviceDesc[showDesc].para2}</p>
          <p>{props.serviceDesc[showDesc].para3}</p>
          <p>{props.serviceDesc[showDesc].para4}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
