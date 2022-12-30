import React, { useEffect } from "react";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  SpotLight,
} from "@react-three/drei";

const Mascot = (props) => {
  const { scene, animations } = useGLTF("/mascot.glb");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    if (props.anim) {
      void actions["Armature.001|mixamo.com|Layer0"].crossFadeTo(
        actions["Armature.001|mixamo.com|Layer0.001"].reset().play(),
        0.2,
        true
      );
    } else {
      void actions["Armature.001|mixamo.com|Layer0.001"].crossFadeTo(
        actions["Armature.001|mixamo.com|Layer0"].reset().play(),
        0.2,
        true
      );
    }
  });

  return (
    <>
      <group>
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[-20, 2, 10]}
          color={"#fc00ff"}
          intensity={0.5}
        />
        <directionalLight
          position={[20, 2, 10]}
          color={"#00dbde"}
          intensity={0.5}
        />
        <SpotLight
          distance={10}
          angle={0.35}
          attenuation={6}
          anglePower={5} // Diffuse-cone anglePower (default: 5)
          color="#00dbde"
          position={[2, 7, 3]}
          lookAt={scene}
          intensity={2}
        />
        <SpotLight
          distance={10}
          angle={0.35}
          attenuation={6}
          anglePower={5} // Diffuse-cone anglePower (default: 5)
          color="#fc00ff"
          position={[-2, 7, 3]}
          lookAt={scene}
          intensity={2}
        />
        <primitive object={scene} scale={5} position={[0, -6.5, 0]} />
        {/* <OrbitControls /> */}
      </group>
    </>
  );
};

export default Mascot;
