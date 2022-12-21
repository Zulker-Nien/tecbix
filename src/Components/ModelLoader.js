import React, { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import "./3d.scss";
import ThreeDModel from "./ThreeDModel";
import { Scroll, ScrollControls, Loader, Stars } from "@react-three/drei";
import HtmlContent from "./HtmlContent";

const ModelLoader = () => {
  const load = useRef();
  useEffect(() => {
    <Loader />;
  }, [load]);

  return (
    <div className="canvas" ref={load} data-aos="fade-in">
      <Canvas shadowMap>
        <ambientLight intensity={0.1} />
        <directionalLight
          intensity={0.5}
          castShadow
          shadow-mapSize-height={512}
          shadow-mapSize-width={512}
        />
        <Suspense fallback={null}>
          <ScrollControls pages={6} distance={3.5}>
            <Scroll className="scroll">
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
