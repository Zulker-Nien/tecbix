import React, { useState, useRef, Suspense, useEffect } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./services.scss";
import Button from "./Button";
import { Canvas } from "@react-three/fiber";
import Mascot from "./Mascot";

const Services = (props) => {
  const scrollableDiv = useRef(null);
  const handleClick = () => {
    scrollableDiv.current.scrollTop = 0;
    setAnim(false);
  };
  const [showDesc, setShowDesc] = useState(0);
  const [anim, setAnim] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDiv.current.scrollTop > 1000) {
        setAnim(true);
      } else {
        setAnim(false);
      }
      return () => {
        scrollableDiv.current.removeEventListener("scroll", handleScroll);
      };
    };

    scrollableDiv.current.addEventListener("scroll", handleScroll);
  }, [handleClick]);
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

            {props.serviceBenefit[showDesc].para5 == null ? (
              ""
            ) : (
              <div className="item">
                <div className="bullet">
                  <VscDebugBreakpointLog color={"#00dbde"} />
                </div>
                <p>{props.serviceBenefit[showDesc].para5}</p>
              </div>
            )}

            {props.serviceBenefit[showDesc].para6 == null ? (
              ""
            ) : (
              <div className="item">
                <div className="bullet">
                  <VscDebugBreakpointLog color={"#00dbde"} />
                </div>
                <p>{props.serviceBenefit[showDesc].para6}</p>
              </div>
            )}
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
                  <p>{props.serviceChecklist[showDesc].item1}</p>
                </div>
                <div className="includedItem">
                  <div className="check">
                    <RiCheckboxCircleFill color="#00dbde" />
                  </div>
                  <p>{props.serviceChecklist[showDesc].item2}</p>
                </div>
                <div className="includedItem">
                  <div className="check">
                    <RiCheckboxCircleFill color="#00dbde" />
                  </div>
                  <p>{props.serviceChecklist[showDesc].item3}</p>
                </div>
                {props.serviceChecklist[showDesc].item4 == null ? (
                  ""
                ) : (
                  <div className="includedItem">
                    <div className="check">
                      <RiCheckboxCircleFill color="#00dbde" />
                    </div>
                    <p>{props.serviceChecklist[showDesc].item4}</p>
                  </div>
                )}
                {props.serviceChecklist[showDesc].item5 == null ? (
                  ""
                ) : (
                  <div className="includedItem">
                    <div className="check">
                      <RiCheckboxCircleFill color="#00dbde" />
                    </div>
                    <p>{props.serviceChecklist[showDesc].item5}</p>
                  </div>
                )}
                {props.serviceChecklist[showDesc].item6 == null ? (
                  ""
                ) : (
                  <div className="includedItem">
                    <div className="check">
                      <RiCheckboxCircleFill color="#00dbde" />
                    </div>
                    <p>{props.serviceChecklist[showDesc].item6}</p>
                  </div>
                )}
                {props.serviceChecklist[showDesc].item7 == null ? (
                  ""
                ) : (
                  <div className="includedItem">
                    <div className="check">
                      <RiCheckboxCircleFill color="#00dbde" />
                    </div>
                    <p>{props.serviceChecklist[showDesc].item7}</p>
                  </div>
                )}
                <h4 className="price">{props.price[showDesc]}</h4>
              </div>
            </div>
            <div className="includedRight">
              <div className="rightContainers">
                {props.deliverables[showDesc].item1 == null ? (
                  ""
                ) : (
                  <h4>Deliverables</h4>
                )}

                {props.deliverables[showDesc].item1 == null ? (
                  ""
                ) : (
                  <p>{props.deliverables[showDesc].item1}</p>
                )}
                {props.deliverables[showDesc].item2 == null ? (
                  ""
                ) : (
                  <p>{props.deliverables[showDesc].item2}</p>
                )}
                {props.deliverables[showDesc].item3 == null ? (
                  ""
                ) : (
                  <p>{props.deliverables[showDesc].item3}</p>
                )}
                {props.deliverables[showDesc].item4 == null ? (
                  ""
                ) : (
                  <p>{props.deliverables[showDesc].item4}</p>
                )}
                {props.deliverables[showDesc].item5 == null ? (
                  ""
                ) : (
                  <p>{props.deliverables[showDesc].item5}</p>
                )}
                {props.deliverables[showDesc].item6 == null ? (
                  ""
                ) : (
                  <p>{props.deliverables[showDesc].item6}</p>
                )}
              </div>

              <div className="rightContainers">
                <h4>Time Frame</h4>
                <p>{props.timeframe[showDesc].item1}</p>
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
            <p>{props.endLine[showDesc]}</p>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button label="Let's Start" />
            </Link>
          </div>
        </div>
        <div className="topModel">
          <Canvas shadows>
            <Suspense fallback={null}>
              <Mascot anim={anim} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Services;
