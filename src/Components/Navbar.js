import { useState } from "react";
import "./Navbar.scss";
import T from "../Media/T.png";
import E from "../Media/E.png";
import C from "../Media/C.png";
import B from "../Media/B.png";
import I from "../Media/I.png";
import X from "../Media/X.png";
import { Tween } from "react-gsap";
import { Link } from "react-router-dom";
function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <>
      <div className="header">
        <div className="logo">
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={T} alt={""}></img>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={E} alt={""}></img>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={C} alt={""}></img>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={B} alt={""}></img>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={I} alt={""}></img>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={X} alt={""}></img>
            </Link>
          </div>
        </div>
        <ul>
          <li>
            <h6>ABOUT US</h6>
          </li>
          <li
            onClick={() => {
              setShowServices(!showServices);
            }}
          >
            <h6
              style={showServices ? { color: "#ca267b" } : { color: "#0d99a3" }}
            >
              SERVICES
            </h6>
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

                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setDrawer(!drawer);
                  }}
                >
                  <li>HOME</li>
                </Link>
                <li>ABOUT US</li>
                <Link
                  to="/services"
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setDrawer(!drawer);
                  }}
                >
                  <li>SERVICES</li>
                </Link>
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
      {showServices && (
        <div className="serviceDropdownContainer">
          <Tween
            from={{ y: "-50px" }}
            to={{ y: "0px" }}
            duration={0.5}
            ease="back.out(2.7)"
          >
            <div className="serviceDropdownWrapper">
              <ul>
                <li>Startup setup</li>
                <li>|</li>
                <li>Marketing</li>
                <li>|</li>
                <li>Software Development</li>
                <li>|</li>
                <li>Outsourcing</li>
              </ul>
            </div>
          </Tween>
        </div>
      )}
    </>
  );
}

export default Navbar;
