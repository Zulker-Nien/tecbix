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
          <p>{props.serviceDesc[showDesc].para5}</p>
          <p>{props.serviceDesc[showDesc].para6}</p>
          <h1>How will this service Benefit you?</h1>
          <ul>
            <li>
              <p>{props.serviceBenefit[showDesc].para1}</p>
            </li>
            <li>
              <p>{props.serviceBenefit[showDesc].para2}</p>
            </li>
            <li>
              <p>{props.serviceBenefit[showDesc].para3}</p>
            </li>
            <li>
              <p>{props.serviceBenefit[showDesc].para4}</p>
            </li>
            <li>
              <p>{props.serviceBenefit[showDesc].para5}</p>
            </li>
            <li>
              <p>{props.serviceBenefit[showDesc].para6}</p>
            </li>
            {props.serviceBenefit[showDesc].para7 == null ? (
              ""
            ) : (
              <li>
                <p>{props.serviceBenefit[showDesc].para7}</p>
              </li>
            )}
          </ul>
          <p>{props.serviceBenefit[showDesc].endLine}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
