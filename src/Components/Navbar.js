import { useState } from "react";
import "./Navbar.scss";
// import T from "../Media/T.png";
// import E from "../Media/E.png";
// import C from "../Media/C.png";
// import B from "../Media/B.png";
// import I from "../Media/I.png";
// import X from "../Media/X.png";
import Logo from "../Media/Tecbix2.png";
import { Tween } from "react-gsap";
import { Link } from "react-router-dom";
function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <>
      <div className="header">
        <div
          className="logo"
          onClick={() => {
            setShowServices(false);
          }}
        >
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} alt={""}></img>
            </Link>
          </div>
        </div>
        <ul>
          <li
            onClick={() => {
              setShowServices(false);
            }}
          >
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <h6>ABOUT US</h6>
            </Link>
          </li>
          <li
            onClick={() => {
              setShowServices(!showServices);
            }}
          >
            <h6 style={showServices ? { color: "#ca267b" } : { color: "#fff" }}>
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
              <ul
                onClick={() => {
                  setShowServices(false);
                }}
              >
                <li>
                  <Link to="/services/startup-setup">Startup Setup</Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="/services/marketing">Marketing</Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="/services/software-development">
                    Software Development
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link to="/services/outsourcing">Outsourcing</Link>
                </li>
              </ul>
            </div>
          </Tween>
        </div>
      )}
    </>
  );
}

export default Navbar;
