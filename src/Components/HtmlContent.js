import React, { useRef } from "react";
import "./3d.scss";

import emailjs from "@emailjs/browser";
import Button from "./Button";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import "aos/dist/aos.css";
const HtmlContent = () => {
  const form = useRef();

  const notify = () => toast("Thank you for reaching out.");

  // Email Query Form Submission
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

  const ref = useRef();
  return (
    <>
      <div className="HtmlContainer">
        <div className="section1">
          <div className="slogan" ref={ref}>
            <h1 data-aos="fade-in">
              MINIMIZE{" "}
              <span
                data-aos="fade-in"
                data-aos-delay="50"
                style={{ color: "#00dbde" }}
              >
                PROBLEM
              </span>
            </h1>
            <h1 data-aos="fade-in" data-aos-delay="150">
              MAXIMIZE{" "}
              <span
                style={{ color: "#fc00ff" }}
                data-aos="fade-in"
                data-aos-delay="200"
              >
                SOLUTION
              </span>
            </h1>
          </div>
        </div>
        <div className="section2">
          <div className="aboutUs">
            <p>
              The right <span> strategy </span> is the key to your
              <span> success</span>
            </p>
          </div>
        </div>
        <div className="section3">
          <p>
            <span>Creative</span>
            <br /> <span>Premium</span>
            <br /> <span>Unique</span>
            <br /> <span>Powerful</span> <br />
            are just a few words to describe how{" "}
            <span className="Tec">Tec</span>
            <span className="bix">bix </span> will transform your business
          </p>
        </div>
        <div className="section4">
          <div className="leadWrapper">
            <h1>Leave all the headache behind</h1>
            <h3>
              Let us redefine your business efficiency while you enjoy the
              benefits.
            </h3>
            <span>
              <a
                href="/assessment"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <Button label={"Take an assessment"} />
              </a>
            </span>
          </div>
        </div>
        <div className="section5">
          <div className="contactUs">
            <div className="contactform">
              <h1>GET IN TOUCH</h1>
              <div className="line"></div>
              <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                  placeholder="Your Name"
                  type="name"
                  name="name"
                  required
                />
                <input
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  required
                />
                <textarea
                  placeholder="Your Query"
                  rows={5}
                  type="text"
                  name="message"
                  required
                />
                <p>Your Interests</p>
                <div className="checklist">
                  <div>
                    <input type="checkbox" />
                    <label>Startup-Setup</label>
                  </div>
                  <br />
                  <div>
                    <input type="checkbox" />
                    <label>Marketing</label>
                  </div>
                  <br />
                  <div>
                    <input type="checkbox" />
                    <label>Web Development</label>
                  </div>
                  <br />
                  <div>
                    <input type="checkbox" />
                    <label>Outsourcing</label>
                  </div>
                  <br />
                </div>
                <div className="contactButton">
                  <Button label="Submit" type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HtmlContent;
