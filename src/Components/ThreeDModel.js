import React, { useEffect } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";
import "./3d.scss";
import { useFrame } from "@react-three/fiber";
import { damp } from "three/src/math/MathUtils";
const ThreeDModel = () => {
  const { scene, animations, cameras } = useGLTF(`./background.glb`);
  const { actions } = useAnimations(animations, cameras[0]);

  actions["Camera|CameraAction"].play();

  useFrame((state) => {
    state.camera.position.set(
      cameras[0].position.x,
      cameras[0].position.y,
      cameras[0].position.z
    );
    state.camera.rotation.set(
      cameras[0].rotation.x,
      cameras[0].rotation.y,
      cameras[0].rotation.z
    );
  });

  function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y = 0.01;
  }
  animate();
  return (
    <>
      <group>
        <primitive object={scene}>
          {console.log(actions["Camera|CameraAction"])}
        </primitive>
      </group>
    </>
  );
};

export default ThreeDModel;
