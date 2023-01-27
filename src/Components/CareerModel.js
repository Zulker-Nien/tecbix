import React from "react";
import {
  useGLTF,
  useAnimations,
  PerspectiveCamera,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
const CareerModel = () => {
  const { scene, animations, materials } = useGLTF("./earth_Small2.glb");
  const { actions } = useAnimations(animations, scene);
  console.log(materials);
  actions["Base Stack"].reset().fadeIn(0.5).play();
  return (
    <group>
      <PerspectiveCamera makeDefault lookAt={scene} position={[0, 1, 2]} />

      <directionalLight
        position={[0, 4, -10]}
        lookAt={scene}
        intensity={3}
        color={"#c5c5c5"}
      />

      <ambientLight intensity={0.4} />
      <PresentationControls>
        <primitive
          object={scene}
          rotation={[-1, 1, 1]}
          scale={1.2}
          //   dispose={null}
          emissive={[0.5, 0.5, 0.5]}
        />
      </PresentationControls>
    </group>
  );
};

export default CareerModel;
