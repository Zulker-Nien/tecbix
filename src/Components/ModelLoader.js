import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./3d.scss";
import ThreeDModel from "./ThreeDModel";
import {
  Scroll,
  ScrollControls,
  Environment,
  Loader,
  Stars,
} from "@react-three/drei";
import HtmlContent from "./HtmlContent";

const ModelLoader = () => {
  const load = useRef();
  useEffect(() => {
    <Loader />;
  }, [load]);

  return (
    <div className="canvas" ref={load} data-aos="fade-in">
      <Canvas>
        <Suspense fallback={null}>
          <ScrollControls pages={6} distance={3.5}>
            <Scroll>
              <ThreeDModel />
              <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={10}
                saturation={0}
                fade
                speed={1}
              />
            </Scroll>
            <Scroll html>
              <HtmlContent />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};

export default ModelLoader;
