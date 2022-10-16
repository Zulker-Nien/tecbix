import React, { useRef } from "react";

import introimg from "../Media/topBG.png";
import infoimg1 from "../Media/infoimg1.png";
import infoimg3 from "../Media/infoimg3.png";
import infoimg4 from "../Media/infoimg4.png";
import infoimg5 from "../Media/infoimg5.png";
import Button from "../Components/Button";
import HomeBgImage from "../Components/HomeBgImage";

import "./Home.scss";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

import { Link } from "react-router-dom";

function Home() {
  const notify = () => toast("Thank you for reaching out.");

  const form = useRef();

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_7o1rkpr",
        "template_6a8zyxg",
        form.current,
        "9nHI7wpXTvokwU1vi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.preventDefault();
    e.target.reset();
    notify();
  };

  return (
    <>
      <div className="homeContainer">
        <div className="intro">
          <img src={introimg} alt={""}></img>
          <div className="slogan">
            <div className="name">
              <h1>TECBIX</h1>
            </div>
            <div className="headline">
              <h5>IT Enabled Services</h5>
            </div>
            <div className="catchphrase">
              <h3>Building the future,</h3>
              <h3>One innovation at a time.</h3>
            </div>
          </div>
        </div>
        <div className="aboutUs">
          <div className="homeSwirlBackground">
            <HomeBgImage />
          </div>
          <h1>Get to know us</h1>
          <div className="line"></div>
          <p>
            A tech-driven company that helps you make sense of your data and get
            results. With a dedicated team of experts, we strive to be your most
            reliable technology partner. Tecbix is built on a foundation of
            innovation and quality. We don't just talk about being a flexible
            partner for your business; we live
          </p>
        </div>
        <div className="services">
          <h1>What we do</h1>
          <div className="line"></div>
          <p>
            Tecbix offers a comprehensive solution to meet the demands of each
            client for outsourcing any back-office, administrative, and non-core
            business activities. With the help of our services, enterprises may
            fulfill their daily data processing requirements without having to
            worry about the associated operational and managerial
            responsibilities. We utilize our skilled IT-enabled services to
            provide you with the highest level of in-business value, and we have
            the know-how to manage intricate business procedures.
          </p>

          <div className="serviceinfo">
            <div className="info">
              <img src={infoimg1} alt={""}></img>
              <h6>Startup Setup</h6>
            </div>
            <div className="info">
              <img src={infoimg3} alt={""}></img>
              <h6>Outsourcing</h6>
            </div>
            <div className="info">
              <img src={infoimg4} alt={""}></img>
              <h6>Web Development</h6>
            </div>
            <div className="info">
              <img src={infoimg5} alt={""}></img>
              <h6>Marketing</h6>
            </div>
          </div>
          <div className="serviceButton">
            <Link to="/services">
              <Button label="View all Services" />
            </Link>
          </div>
        </div>
        <div className="contactUs">
          <div className="homeSwirlBackgroundContact">
            <HomeBgImage />
          </div>
          <div className="contactform">
            <h1>GET IN TOUCH</h1>
            <div className="line"></div>
            <form className="form" ref={form} onSubmit={sendEmail}>
              <input placeholder="Your Name" type="name" name="name" required />
              <input
                placeholder="Your Email"
                type="email"
                name="email"
                required
              />
              <textarea
                placeholder="Your Query"
                rows={8}
                type="text"
                name="message"
                required
              />
              <div className="contactButton">
                <Button label="Submit" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
