import { useState, useContext } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Store from "../store";

function Navbar() {
  const store = useContext(Store);
  const { show, setShow, setFalse, department, setDepartment } = store;
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <div
        className="header"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
      >
        <div
          className="logo"
          onClick={() => {
            setFalse();
            setDepartment("");
          }}
        >
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={"/2.png"}
                width="50%"
                height="100%"
                alt={""}
                loading="lazy"
              ></img>
              <p style={{ color: "#fff" }}>{department}</p>
            </Link>
          </div>
        </div>
        <ul>
          <li
            onClick={() => {
              setFalse();
              setDepartment("");
            }}
          >
            <Link to="/about-us" style={{ textDecoration: "none" }}>
              <h6>ABOUT US</h6>
            </Link>
          </li>
          <li
            onClick={() => {
              setFalse();
              setDepartment("");
            }}
          >
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <h6>BLOG</h6>
            </Link>
          </li>
          <li onClick={setShow}>
            <h6 style={show ? { color: "#fc00ff" } : { color: "#efefef" }}>
              SERVICES
            </h6>
          </li>
          <li
            onClick={() => {
              setFalse();
              setDepartment("");
            }}
          >
            <Link to="/career" style={{ textDecoration: "none" }}>
              <h6>CAREER</h6>
            </Link>
          </li>
          <li
            onClick={() => {
              setFalse();
              setDepartment("");
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <h6>CONTACT</h6>
            </Link>
          </li>
        </ul>

        {drawer ? (
          <div className="sideBarContainer">
            {show ? (
              ""
            ) : (
              <ul>
                <div
                  className="sideBarCloseButton"
                  onClick={() => {
                    setDrawer(!drawer);
                    setDepartment("");
                  }}
                  data-aos="zoom-out"
                ></div>
                <Link
                  to="/"
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setDrawer(!drawer);
                    setDepartment("");
                  }}
                  data-aos="fade-down"
                  data-aos-delay="0"
                >
                  <li>HOME</li>
                </Link>

                <Link
                  to="/about-us"
                  style={{ textDecoration: "none" }}
                  onClick={() => {
                    setDrawer(!drawer);
                    setDepartment("");
                  }}
                  data-aos="fade-down"
                  data-aos-delay="50"
                >
                  <li>ABOUT US</li>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                  <li onClick={setShow}>SERVICES</li>
                </Link>
                <Link
                  to="/career"
                  onClick={() => {
                    setDrawer(!drawer);
                    setDepartment("");
                  }}
                  style={{ textDecoration: "none" }}
                  data-aos="fade-down"
                  data-aos-delay="150"
                >
                  <li>CAREER</li>
                </Link>

                <Link
                  to="/contact"
                  onClick={() => {
                    setDrawer(!drawer);
                    setDepartment("");
                  }}
                  style={{ textDecoration: "none" }}
                  data-aos="fade-down"
                  data-aos-delay="200"
                >
                  <li>CONTACT</li>
                </Link>
              </ul>
            )}
          </div>
        ) : (
          <div
            className="sideBarContainer"
            onClick={() => {
              setDrawer(!drawer);
            }}
          >
            <div
              className="hBurger"
              data-aos="fade-left"
              data-aos-delay="0"
            ></div>
            <div
              className="hBurger"
              data-aos="fade-left"
              data-aos-delay="50"
            ></div>
            <div
              className="hBurger"
              data-aos="fade-left"
              data-aos-delay="100"
            ></div>
          </div>
        )}
      </div>
      {show && (
        <div className="serviceDropdownContainer">
          <div className="serviceDropdownWrapper">
            <ul
              onClick={() => {
                setFalse();
                setDrawer(false);
              }}
            >
              <li
                onClick={() => {
                  setDepartment("Startup Setup");
                }}
              >
                <Link to="/services/startup-setup">Startup Setup</Link>
              </li>

              <li
                onClick={() => {
                  setDepartment("Marketing");
                }}
              >
                <Link to="/services/marketing">Marketing</Link>
              </li>

              <li
                onClick={() => {
                  setDepartment("Development");
                }}
              >
                <Link to="/services/software-development">
                  Software Development
                </Link>
              </li>

              <li
                onClick={() => {
                  setDepartment("Outsourcing");
                }}
              >
                <Link to="/services/outsourcing">Outsourcing</Link>
              </li>
            </ul>
          </div>
          <div className="back left"></div>
        </div>
      )}
    </>
  );
}

export default observer(Navbar);
