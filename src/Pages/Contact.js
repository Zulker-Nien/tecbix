import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Components/Button";
import { SiUpwork } from "react-icons/si";
import { CgFacebook } from "react-icons/cg";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import "./Home.scss";

const Contact = () => {
  const form = useRef();
  const notify = () => toast("Thank you for reaching out.");
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
      <div className="ContactContainer">
        <div className="contactUs">
          <div className="contactform">
            <h1>Connect with Us</h1>
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
                rows={5}
                type="text"
                name="message"
                required
              />
              <p>Your Interests</p>
              <div className="checklist">
                <label>
                  <input type="checkbox" />
                  <h3>Startup</h3>
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  <h3>Marketing</h3>
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  <h3>Software</h3>
                </label>
                <br />
                <label>
                  <input type="checkbox" />
                  <h3>Outsourcing</h3>
                </label>
                <br />
              </div>
              <Button label="Submit" type="submit" value="Send" />
            </form>
          </div>
        </div>

        <div className="contactCanvas">
          <div className="informationContainer">
            <div className="contactInfo">
              <span>
                <FaPhoneAlt size={30} color="#0d99a3" />
                <a href="tel: 880 1888 799 003">
                  <p>+880 188 879 9003</p>
                </a>
              </span>
              <span>
                <AiFillMail size={35} color="#0d99a3" />
                <a href="mailto: info@tebix.com" target="_blank">
                  <p>info@tebix.com</p>
                </a>
              </span>
            </div>
            <div className="socialInfo">
              <div>
                <SiUpwork size={20} color="#1c1c1c" />
              </div>
              <div>
                <CgFacebook size={20} color="#1c1c1c" />
              </div>
              <div>
                <GrInstagram size={20} color="#1c1c1c" />
              </div>
              <div>
                <FaLinkedinIn size={20} color="#1c1c1c" />
              </div>
              <div>
                <FaYoutube size={20} color="#1c1c1c" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
