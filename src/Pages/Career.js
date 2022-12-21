import React, { Suspense, useState } from "react";
import "./Home.scss";
import Footer from "../Components/Footer";
import { Canvas } from "@react-three/fiber";
import CareerModel from "../Components/CareerModel";
import { Html, Loader, Stars } from "@react-three/drei";
import { BsFillCalendarRangeFill } from "react-icons/bs";
import { CgRemote } from "react-icons/cg";
import { GiGrowth, GiExtraTime } from "react-icons/gi";
import { GoGlobe } from "react-icons/go";
import { RiParentFill } from "react-icons/ri";

// const jobBox = () => {
//   return (
//     <>
//       <div></div>
//     </>
//   );
// };
const Box = ({ ...props }) => {
  return (
    <div className="boxContainer">
      <div className="iconContainer">{props.icon}</div>
      <div className="descContainer">
        <h3>{props.title}</h3>
        <p>This is a description</p>
      </div>
    </div>
  );
};
const Career = () => {
  const [job, setJob] = useState(false);
  return (
    <>
      <div className="careerContainer">
        <div className="modelContainer">
          <Canvas>
            <Suspense fallback={null}>
              <CareerModel />
              <Html position={[-1.33, 1.5, 0]}>
                <div className="topLead">
                  <h1>Join us in building a culture of innovation</h1>
                </div>
              </Html>
              <Html position={[-1.33, 1.15, 0]}>
                <div className="ring"></div>
              </Html>
              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={10}
                saturation={0}
                fade
                speed={1}
              />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
        <div className="workPointContainer">
          <div className="workPointWrapper">
            <div>
              <Box
                title={"4 day work week"}
                icon={<BsFillCalendarRangeFill size={30} />}
              />
            </div>
            <div>
              <Box title={"Remote work"} icon={<CgRemote size={30} />} />
            </div>
            <div>
              <Box
                title={"International Opportunities"}
                icon={<GiGrowth size={30} />}
              />
            </div>
            <div>
              <Box
                title={"Growth Opportunities"}
                icon={<GoGlobe size={30} />}
              />
            </div>
            <div>
              <Box title={"Parental Leave"} icon={<RiParentFill size={30} />} />
            </div>
            <div>
              <Box title={"Flexible Hours"} icon={<GiExtraTime size={30} />} />
            </div>
          </div>
        </div>
        <div className="jobBoard">
          <div className="title">
            <h1>Job Openings</h1>
          </div>
          {job ? (
            <div className="board"></div>
          ) : (
            <div className="emptyBoard">
              <h3>
                Stay tuned. Our team is growing everyday and surely we will have
                a place for you soon.
              </h3>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
