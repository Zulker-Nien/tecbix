import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { observer } from "mobx-react-lite";
import {
  PerspectiveCamera,
  useGLTF,
  useAnimations,
  Stars,
  Loader,
} from "@react-three/drei";
import "./Home.scss";
import {
  GiFist,
  GiFireBowl,
  GiGrowth,
  GiCube,
  GiThreeFriends,
  GiNotebook,
} from "react-icons/gi";
import { GoLaw } from "react-icons/go";
import { Link } from "react-router-dom";
import { HiLightBulb, HiShieldCheck } from "react-icons/hi";
import Footer from "../Components/Footer";
import Button from "../Components/Button";

const ModelLoad = () => {
  const { scene, animations, cameras } = useGLTF("./aboutTest1.glb");
  const { actions } = useAnimations(animations, scene);
  console.log(actions);
  actions["CameraAction.003"].reset().fadeIn(1).play();
  actions["PlaneAction"].reset().fadeIn(1).play();

  useFrame((state, delta) => {
    state.camera.position.set(
      cameras[0].position.x, // -209
      cameras[0].position.y, // 102.8
      cameras[0].position.z // 20.43
    );
    state.camera.rotation.set(
      cameras[0].rotation.x, // v
      cameras[0].rotation.y, // -1.0832376353088016
      cameras[0].rotation.z // -1.3574275014966424
    );
  });

  return (
    <>
      <group>
        <PerspectiveCamera
          makeDefault
          fov={25}
          position={[
            cameras[0].position.x,
            cameras[0].position.y,
            cameras[0].position.z,
          ]}
        />
        <primitive object={scene} />
      </group>
    </>
  );
};
const AboutUs = () => {
  return (
    <>
      <div className="aboutUsContainer">
        <div className="aboutCanvas">
          <Canvas>
            <Suspense fallback={null}>
              <ModelLoad />
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
        {/* Vision */}
        <div className="missionvisionContainer">
          <div className="missionvisionTitle">
            <h1>the</h1>
            <h1>
              <span>vis</span>
              <span>ion</span>
            </h1>
            <h1>we</h1>
            <h1>have</h1>
          </div>
          <div className="missionvisionWrapper">
            <h1>
              Tecbix was founded by a team of 5 visionaries with a single goal,
              to break beyond the traditional mindset for running a business and
              replace it with something revolutionary. We want to build a
              workplace where employees not only produce a creative and
              innovative piece of art (work) but also enjoy doing it.
            </h1>
          </div>
        </div>
        {/* Mission */}
        <div className="missionvisionContainer">
          <div className="missionvisionTitle">
            <h1>the</h1>
            <h1>
              <span>mis</span>
              <span>sion</span>
            </h1>
            <h1>we</h1>
            <h1>are</h1>
            <h1>in</h1>
          </div>
          <div className="missionvisionWrapper">
            <h1>
              Tecbix offers the best strategic solutions to any business of any
              size. We do this by coming up with marketing, technological,
              workforce and operation-related answers to any problems. What sets
              us apart is our emphasis on client needs - every solution offered
              has its analysis done to select the most optimum and effective one
              of them all.
            </h1>
          </div>
        </div>
        {/* Values */}
        <div className="valueContainer">
          <div className="valueTitle">
            <h1>the</h1>
            <h1>
              <span>val</span>
              <span>ues</span>
            </h1>
            <h1>we</h1>
            <h1>work</h1>
            <h1>by</h1>
          </div>
          <div className="valueWrapper">
            <div className="valueItem">
              <div className="icon">
                <GiFist color={"c5c5c5"} />
              </div>
              <h1>Motivate the team</h1>
              <h3>
                Welcome others and help them grow to their full potential.
              </h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <GiCube color={"c5c5c5"} />
              </div>
              <h1>Discover different perspectives</h1>
              <h3>Listen to understand and speak to explain.</h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <GoLaw color={"c5c5c5"} />
              </div>
              <h1>Be Accountable</h1>
              <h3>
                Back assumptions with data, and make decisions you can own up
                to.
              </h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <GiFireBowl color={"c5c5c5"} />
              </div>
              <h1>Have Passion</h1>
              <h3>
                Any work is art if you love it, if you love it you will take
                care of it.
              </h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <GiGrowth color={"c5c5c5"} />
              </div>
              <h1>Think improvement</h1>
              <h3>Discover new knowledge whenever you get the chance.</h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <HiLightBulb color={"c5c5c5"} />
              </div>
              <h1>Be eager to learn</h1>
              <h3>
                Any work is art if you love it, if you love it you will take
                care of it.
              </h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <HiShieldCheck color={"c5c5c5"} />
              </div>
              <h1>Be transparent</h1>
              <h3>Avoid dishonesty and shenanigans at all costs.</h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <GiThreeFriends color={"c5c5c5"} />
              </div>
              <h1>Don't be mean</h1>
              <h3>
                Anything can be communicated with respect and being polite is
                the way to go.
              </h3>
            </div>
            <div className="valueItem">
              <div className="icon">
                <GiNotebook color={"c5c5c5"} />
              </div>
              <h1>Note the details</h1>
              <h3>Attention to detail is the key to a spotless artwork.</h3>
            </div>
          </div>
        </div>
        <div className="ctaServiceContainer">
          <h1>
            Browse from our various services or take an assessment to know your
            business needs.
          </h1>
          <div className="buttonContainer">
            <div>
              <Link to={"/assessment"} style={{ textDecoration: "none" }}>
                <Button label="Take an Assessment" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default observer(AboutUs);
