import { useState } from "react";
import "./Navbar.scss";
import Logo from "../Media/Tecbix2.png";
import { Link } from "react-router-dom";
function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const [showServices, setShowServices] = useState(false);
  return (
    <>
      <div
        className="header"
        data-aos="fade-down"
        // data-aos-duration="800"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
      >
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
          </div>
        ) : (
          <div
            className="sideBarContainer"
            onClick={() => {
              setDrawer(!drawer);
            }}
          >
            <div className="hBurger"></div>
            <div className="hBurger"></div>
            <div className="hBurger"></div>
          </div>
        )}
      </div>
      {showServices && (
        <div className="serviceDropdownContainer">
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
        </div>
      )}
    </>
  );
}

export default Navbar;
