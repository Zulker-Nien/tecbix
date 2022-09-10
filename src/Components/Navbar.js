import { useState } from "react";
import "./Navbar.scss";
import T from "../Media/T.png";
import E from "../Media/E.png";
import C from "../Media/C.png";
import B from "../Media/B.png";
import I from "../Media/I.png";
import X from "../Media/X.png";
import { Tween } from "react-gsap";
function Navbar() {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="header">
      <div className="logo">
        <div>
          <img src={T} alt={""}></img>
        </div>
        <div>
          <img src={E} alt={""}></img>
        </div>
        <div>
          <img src={C} alt={""}></img>
        </div>
        <div>
          <img src={B} alt={""}></img>
        </div>
        <div>
          <img src={I} alt={""}></img>
        </div>
        <div>
          <img src={X} alt={""}></img>
        </div>
      </div>
      <ul>
        <li>
          <h6>ABOUT US</h6>
        </li>
        <li>
          <h6>SERVICES</h6>
        </li>
        <li>
          <h6>CAREER</h6>
        </li>
        <li>
          <h6>CONTACT</h6>
        </li>
      </ul>

      {drawer ? (
        <div className="sideBarContainer">
          <Tween
            from={{ y: "50px" }}
            to={{ y: "0px" }}
            duration={0.5}
            ease="back.out(5.7)"
          >
            <ul>
              <div
                className="sideBarCloseButton"
                onClick={() => {
                  setDrawer(!drawer);
                }}
              ></div>
              <li>ABOUT US</li>
              <li>SERVICES</li>
              <li>CAREER</li>
              <li>CONTACT</li>
            </ul>
          </Tween>
        </div>
      ) : (
        <div
          className="sideBarContainer"
          onClick={() => {
            setDrawer(!drawer);
          }}
        >
          <Tween
            from={{ x: "20px" }}
            to={{ x: "0px" }}
            duration={1}
            ease="back.out(2.7)"
          >
            <div className="hBurger"></div>
            <div className="hBurger"></div>
            <div className="hBurger"></div>
          </Tween>
        </div>
      )}
    </div>
  );
}

export default Navbar;
