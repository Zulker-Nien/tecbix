import React, { useRef, useEffect } from "react";
import "./3d.scss";

import emailjs from "@emailjs/browser";
import Button from "./Button";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useFrame } from "@react-three/fiber";
import Footer from "./Footer";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);
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
  const scroll = useScroll();
  // useAnimationFrame((time, delta) => {
  // })
  // useEffect(() => {
  //   // data.offset = current scroll position, between 0 and 1, dampened
  //   // data.delta = current delta, between 0 and 1, dampened

  //   gsap.to(".canvas", {
  //     scrollTrigger: {
  //       scroller: ".HtmlContainer",
  //       trigger: ".slogan",
  //       endTrigger: ".about",
  //       markers: { startColor: "white" },
  //       start: `top +500px `,
  //       end: "bottom +500px",
  //       pin: "true",
  //       scrub: "1",
  //       invalidateOnRefresh: true,
  //       toggleActions: "play reverse",
  //       onEnter: () =>
  //         gsap.fromTo(
  //           ".slogan",
  //           {
  //             opacity: 0,
  //             y: 200,
  //             duration: 1,
  //           },
  //           { opacity: 1, x: 0, duration: 1 }
  //         ),
  //       onEnterBack: () =>
  //         gsap.fromTo(
  //           ".slogan",
  //           {
  //             opacity: 1,
  //             x: 0,
  //             duration: 1,
  //           },
  //           { opacity: 0, duration: 1 }
  //         ),
  //     },
  //   });
  // }, [ScrollTrigger]);

  const ref = useRef();
  const data = useScroll();
  useFrame(() => {
    const d = data.curve(1 / 3, 1 / 3);
  });
  return (
    <>
      <div className="HtmlContainer">
        <div className="section1" data-aos="fade-in">
          <div className="slogan" ref={ref}>
            <h1>
              Got a <span>dream</span>
            </h1>
            <h1> to make that idea</h1>
            <h1> into a reality?</h1>
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
            <span>Creative</span>, <span>Premium</span>, <span>Unique</span> and{" "}
            <span>Powerful</span> are just a few words to describe how Tecbix
            will transform your business
          </p>
        </div>
        <div className="section4">
          <div className="leadWrapper">
            <h1>Leave all the headache behind</h1>
            <h3>
              Let us redefine your business efficiency while you enjoy the
              benefits.
            </h3>
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
                  <input type="checkbox" />
                  <label>Startup-Setup</label>
                  <br />
                  <input type="checkbox" />
                  <label>Marketing</label>
                  <br />
                  <input type="checkbox" />
                  <label>Web Development</label>
                  <br />
                  <input type="checkbox" />
                  <label>Outsourcing</label>
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
