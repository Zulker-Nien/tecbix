import React, { useEffect } from "react";

import {
  useGLTF,
  useAnimations,
  useScroll,
  PerspectiveCamera,
} from "@react-three/drei";
import "./3d.scss";
import { useFrame } from "@react-three/fiber";
import { damp } from "three/src/math/MathUtils";
import "./3d.scss";

const ThreeDModel = () => {
  const { scene, animations, cameras } = useGLTF(`./background.glb`);
  const { actions } = useAnimations(animations, cameras[0]);

  const scroll = useScroll();

  useEffect(() => {
    void (actions["Camera|Camera|CameraAction"].play().paused = true);
  });

  useFrame((state, delta) => {
    const action = actions["Camera|Camera|CameraAction"];
    const offset = scroll.offset;
    action.time = damp(
      action.time,
      action.getClip().duration * offset,
      10,
      delta
    );
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
        <spotLight
          scale={3}
          position={[
            cameras[0].rotation.x,
            cameras[0].rotation.y + 20,
            cameras[0].rotation.z + 50,
          ]}
          intensity={10}
          lookAt={scene}
          color={"#ca267b"}
        />
        <spotLight
          scale={10}
          // distance={20}
          position={[
            cameras[0].rotation.x, //-1.3816339074497006
            cameras[0].rotation.y + 20, // -1.0832376353088016
            cameras[0].rotation.z - 50, // -1.3574275014966424
          ]}
          intensity={10}
          anglePower={20}
          lookAt={scene}
          color={"#0d99a3"}
        />
        <spotLight
          scale={3}
          position={[
            cameras[0].rotation.x - 50, //-1.3816339074497006
            cameras[0].rotation.y + 20, // -1.0832376353088016
            cameras[0].rotation.z, // -1.3574275014966424
          ]}
          intensity={10}
          lookAt={scene}
          color={"#0d99a3"}
        />
        <spotLight
          scale={3}
          position={[
            cameras[0].rotation.x + 50,
            cameras[0].rotation.y + 20,
            cameras[0].rotation.z,
          ]}
          intensity={40}
          lookAt={scene}
          color={"#ca267b"}
        />
      </group>
      <group>
        <PerspectiveCamera
          makeDefault
          name="Camera"
          fov={22.8}
          far={500}
          rotation={[
            cameras[0].rotation.x, //-1.3816339074497006
            cameras[0].rotation.y, // -1.0832376353088016
            cameras[0].rotation.z, // -1.3574275014966424
          ]}
          position={[
            cameras[0].position.x, //-1.3816339074497006
            cameras[0].position.y, // -1.0832376353088016
            cameras[0].position.z, // -1.3574275014966424
          ]}
          near={5}
        />

        <primitive object={scene} scale={1} />
        {/* </PerspectiveCamera> */}
      </group>
    </>
  );
};

export default ThreeDModel;
