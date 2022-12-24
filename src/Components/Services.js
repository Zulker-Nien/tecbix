import React, { useState, useRef } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./services.scss";
import Button from "./Button";
const Services = (props) => {
  const scrollableDiv = useRef(null);
  const handleClick = () => {
    scrollableDiv.current.scrollTop = 0;
  };
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
                    handleClick();
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
                          ? window.innerWidth >= 1224
                            ? "15vw"
                            : "60vw"
                          : window.innerWidth <= 1224
                          ? "60vw"
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
        <div className="topRight" ref={scrollableDiv}>
          <h1>{props.serviceHeaders[showDesc]}</h1>
          <div className="serviceDesc">
            <p>{props.serviceDesc[showDesc].para1}</p>
            <p>{props.serviceDesc[showDesc].para2}</p>
            <p>{props.serviceDesc[showDesc].para3}</p>
            <p>{props.serviceDesc[showDesc].para4}</p>
            <p>{props.serviceDesc[showDesc].para5}</p>
            <p>{props.serviceDesc[showDesc].para6}</p>
          </div>
          <h3>How will this service Benefit you?</h3>
          <div className="serviceBenefit">
            <div className="item">
              <div className="bullet">
                <VscDebugBreakpointLog color={"#00dbde"} />
              </div>
              <p>{props.serviceBenefit[showDesc].para1}</p>
            </div>

            <div className="item">
              <div className="bullet">
                <VscDebugBreakpointLog color={"#00dbde"} />
              </div>
              <p>{props.serviceBenefit[showDesc].para2}</p>
            </div>

            <div className="item">
              <div className="bullet">
                <VscDebugBreakpointLog color={"#00dbde"} />
              </div>
              <p>{props.serviceBenefit[showDesc].para3}</p>
            </div>

            <div className="item">
              <div className="bullet">
                <VscDebugBreakpointLog color={"#00dbde"} />
              </div>
              <p>{props.serviceBenefit[showDesc].para4}</p>
            </div>

            <div className="item">
              <div className="bullet">
                <VscDebugBreakpointLog color={"#00dbde"} />
              </div>
              <p>{props.serviceBenefit[showDesc].para5}</p>
            </div>

            <div className="item">
              <div className="bullet">
                <VscDebugBreakpointLog color={"#00dbde"} />
              </div>
              <p>{props.serviceBenefit[showDesc].para6}</p>
            </div>
            {props.serviceBenefit[showDesc].para7 == null ? (
              ""
            ) : (
              <div className="item">
                <div className="bullet">
                  <VscDebugBreakpointLog color={"#00dbde"} />
                </div>
                <p>{props.serviceBenefit[showDesc].para7}</p>
              </div>
            )}
            {props.serviceBenefit[showDesc].endLine == null ? (
              ""
            ) : (
              <div className="item">
                <div className="bullet">
                  <VscDebugBreakpointLog color={"#00dbde"} />
                </div>
                <p>{props.serviceBenefit[showDesc].endLine}</p>
              </div>
            )}
          </div>
          <div className="serviceIncluded">
            <div className="includedLeft">
              <h4>Service Checklist</h4>
              <div className="includedItemList">
                <div className="includedItem">
                  <div className="check">
                    <RiCheckboxCircleFill color="#00dbde" />
                  </div>
                  <p>{props.serviceIncluded[showDesc].item1}</p>
                </div>
                <div className="includedItem">
                  <div className="check">
                    <RiCheckboxCircleFill color="#00dbde" />
                  </div>
                  <p>{props.serviceIncluded[showDesc].item2}</p>
                </div>
                <div className="includedItem">
                  <div className="check">
                    <RiCheckboxCircleFill color="#00dbde" />
                  </div>
                  <p>{props.serviceIncluded[showDesc].item3}</p>
                </div>
                <div className="includedItem">
                  <div className="check">
                    <RiCheckboxCircleFill color="#00dbde" />
                  </div>
                  <p>{props.serviceIncluded[showDesc].item4}</p>
                </div>
                <div className="includedItem">
                  <div className="check">
                    <RiCheckboxCircleFill color="#00dbde" />
                  </div>
                  <p>{props.serviceIncluded[showDesc].item5}</p>
                </div>
                <h4 className="price">Starting from $400</h4>
              </div>
            </div>
            <div className="includedRight">
              <div className="rightContainers">
                <h4>Deliverables</h4>
                <p>{props.deliverables[showDesc].item1}</p>
              </div>
              <div className="rightContainers">
                <h4>Time Frame</h4>
                <p>
                  {props.timeframe[showDesc].item1} to{" "}
                  {props.timeframe[showDesc].item2} weeks
                </p>
                <p className="pSmall">
                  (Depends on project size and will be confirmed upon analysis.)
                </p>
              </div>
              <div className="rightContainers">
                <h4>Ideal For</h4>
                <p>{props.idealFor[showDesc]}</p>
              </div>
              <div className="">
                <h4>Customer Participation</h4>
                <p>
                  {props.customer[showDesc].level} :{" "}
                  {props.customer[showDesc].meeting}
                </p>
                <p className="pSmall">
                  (Customer satisfaction is our top priority, hence we show work
                  progress and take feedback on a weekly basis.)
                </p>
              </div>
            </div>
          </div>
          <div className="serviceCTA">
            <p>
              Overall, requirement engineering is an important step in the
              development process, as it helps ensure that the final product or
              system meets the needs of all stakeholders and delivers the
              desired outcomes.
            </p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button label="Let's Start" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
