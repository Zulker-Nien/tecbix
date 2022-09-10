import introimg from "../Media/topBG.png";
import infoimg1 from "../Media/infoimg1.png";
import Button from "../Components/Button";
import HomeBgImage from "../Components/HomeBgImage";
import { useMediaQuery } from "react-responsive";
import serviceImg from "../Media/Services.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "./Home.scss";

function Home() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="homeContainer">
      <div className="intro">
        <img src={introimg} alt={""}></img>
        <div className="slogan">
          <div className="name">
            <h1>TECBIX</h1>
          </div>
          <div className="headline">
            <h5>
              <i>IT Enabled Services</i>
            </h5>
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
          A tech-driven company that helps you make sense of your data and get
          results. With a dedicated team of experts, we strive to be your most
          reliable technology partner. Tecbix is built on a foundation of
          innovation and quality. We don't just talk about being a flexible
          partner for your business; we live
        </p>
        {isTabletOrMobile ? (
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="serviceinfo"
          >
            <SwiperSlide>
              <div className="info">
                <img src={infoimg1} alt={""}></img>
                <h6>Startup Setup</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="info">
                <img src={infoimg1} alt={""}></img>
                <h6>Startup Setup</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="info">
                <img src={infoimg1} alt={""}></img>
                <h6>Startup Setup</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="info">
                <img src={infoimg1} alt={""}></img>
                <h6>Startup Setup</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="info">
                <img src={infoimg1} alt={""}></img>
                <h6>Startup Setup</h6>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
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
        )}
        <div className="serviceButton">
          {/* <Button label="View all Services" /> */}

          <img src={serviceImg} alt={""}></img>
        </div>
      </div>
      <div className="contactUs">
        <div className="homeSwirlBackgroundContact">
          <HomeBgImage />
        </div>
        <div className="contactform">
          <h1>GET IN TOUCH</h1>
          <div className="line"></div>
          <form className="form">
            <input placeholder="Your Name"></input>
            <input placeholder="Your Email"></input>
            <textarea placeholder="Your Query" rows={8}></textarea>
            <div>
              <Button label="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
