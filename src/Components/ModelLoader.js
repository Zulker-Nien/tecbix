import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./3d.scss";
import ThreeDModel from "./ThreeDModel";

import { PerspectiveCamera } from "@react-three/drei";

const ModelLoader = () => {
  return (
    <div className="canvas">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />
        <spotLight
          color={"#ca267b"}
          position={[0, 10, 0]}
          intensity={1}
          penumbra={0}
          angle={20}
        />
        <PerspectiveCamera />
        <Suspense fallback={null}>
          <ThreeDModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelLoader;
