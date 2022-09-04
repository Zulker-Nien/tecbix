import introimg from "../Media/introimg.png";
import infoimg1 from "../Media/infoimg1.png";
import Button from "../Components/Button";
import "./Home.scss";

function Home() {
  return (
    <div className="homeContainer">
      <div className="intro">
        <div className="slogan">
          <div className="name">
            <h1>TECBIX</h1>
          </div>
          <div className="headline">
            <h5>
              <i>IT Enables Services</i>
            </h5>
          </div>
          <div className="catchphrase">
            <h3>Building the future,</h3>
            <h3>One innovation</h3>
            <h3>at a time.</h3>
          </div>
        </div>
        <div className="introimg">
          <img src={introimg} alt={""}></img>
        </div>
      </div>
      <div className="aboutUs">
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
          A tech-driven company that helps you make sense of your data and get
          results. With a dedicated team of experts, we strive to be your most
          reliable technology partner. Tecbix is built on a foundation of
          innovation and quality. We don't just talk about being a flexible
          partner for your business; we live
        </p>
        <div className="serviceinfo">
          <div className="info">
            <img src={infoimg1} alt={""}></img>
            <h6>Startup Setup</h6>
          </div>
          <div className="info">
            <img src={infoimg1} alt={""}></img>
            <h6>Startup Setup</h6>
          </div>
          <div className="info">
            <img src={infoimg1} alt={""}></img>
            <h6>Startup Setup</h6>
          </div>
          <div className="info">
            <img src={infoimg1} alt={""}></img>
            <h6>Startup Setup</h6>
          </div>
          <div className="info">
            <img src={infoimg1} alt={""}></img>
            <h6>Startup Setup</h6>
          </div>
        </div>
        <div>
          <Button label="View all Services" />
        </div>
      </div>
      <div className="contactUs">
        <div className="contactform">
          <h1>GET IN TOUCH</h1>
          <div className="line"></div>
          <div className="form">
            <input className="formInput" placeholder="Your Name"></input>
            <input className="formInput" placeholder="Your Email"></input>
            <textarea
              className="formInput"
              placeholder="Your Query"
              rows={8}
            ></textarea>
          </div>
          <div>
            <Button label="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
