import React, { useEffect } from "react";
import {
  useGLTF,
  useAnimations,
  SpotLight,
  PerspectiveCamera,
} from "@react-three/drei";
import { LoopOnce } from "three";

const Mascot = (props) => {
  const { scene, animations, cameras } = useGLTF("/mascot.glb");
  const { actions, mixer } = useAnimations(animations, scene);
  console.log(mixer);
  useEffect(() => {
    if (props.anim) {
      void actions["Armature.001|mixamo.com|Layer0"].crossFadeTo(
        actions["Armature.001|mixamo.com|Layer0.001"].play().setLoop(LoopOnce),
        0.2,
        true
      );
      mixer.addEventListener("finished", (e) => {
        actions["Armature.001|mixamo.com|Layer0.001"]
          .fadeOut(0.5)
          .crossFadeTo(
            actions["Armature.001|mixamo.com|Layer0"]
              .reset()
              .fadeIn(0.5)
              .play(),
            1,
            true
          );
      });
    } else {
      void actions["Armature.001|mixamo.com|Layer0.002"].crossFadeTo(
        actions["Armature.001|mixamo.com|Layer0"].reset().play(),
        0,
        true
      );
    }
  }, [actions]);

  return (
    <>
      <group>
        <PerspectiveCamera
          makeDefault
          name="Camera"
          fov={80}
          far={500}
          rotation={[
            cameras[0].rotation.x,
            cameras[0].rotation.y,
            cameras[0].rotation.z,
          ]}
          position={[
            cameras[0].position.x,
            cameras[0].position.y - 0.05,
            cameras[0].position.z + 1.5,
          ]}
        />
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
          distance={5}
          angle={0.45}
          attenuation={6}
          anglePower={10} // Diffuse-cone anglePower (default: 5)
          color="#00dbde"
          position={[2, 7, 3]}
          lookAt={scene}
          intensity={5}
        />
        <SpotLight
          distance={5}
          angle={0.45}
          attenuation={6}
          anglePower={10} // Diffuse-cone anglePower (default: 5)
          color="#fc00ff"
          position={[-2, 7, 3]}
          lookAt={scene}
          intensity={5}
        />
        <primitive object={scene} scale={5} position={[0, -6.5, 0]} />
        {/* <OrbitControls /> */}
      </group>
    </>
  );
};

export default Mascot;
