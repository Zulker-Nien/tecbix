import React, { useEffect } from "react";

import {
  useGLTF,
  useAnimations,
  useScroll,
  PerspectiveCamera,
  useTexture,
  MeshDistortMaterial,
  GradientTexture,
} from "@react-three/drei";
import "./3d.scss";
import { useFrame } from "@react-three/fiber";
import { damp } from "three/src/math/MathUtils";
import "./3d.scss";

import { MeshStandardMaterial } from "three";

const ThreeDModel = () => {
  const { scene, animations, cameras } = useGLTF(`./background2.glb`);
  const { actions } = useAnimations(animations, cameras[0]);
  console.log(<GradientTexture />);
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

  // Material Assigning

  const ColorTextureArray = useTexture(["texMap.png"]);
  let ColorTexture = new MeshStandardMaterial({
    map: ColorTextureArray[0],
    fog: true,
    side: 2,
  });

  const modelParts = [{ childID: "Object_2", mtl: ColorTexture }];
  const mapColor = (parent, type, mtl) => {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name === type) {
          o.material = mtl;
        }
      }
    });
  };
  if (scene) {
    console.log(scene.material);
    for (let object of modelParts) {
      mapColor(scene, object.childID, object.mtl);
    }
  }

  return (
    <>
      <group>
        <directionalLight
          intensity={1}
          color={"#fc00ff"}
          // lookAt={scene}
          // position={[
          //   cameras[0].position.x,
          //   cameras[0].position.y,
          //   cameras[0].position.z,
          // ]}
          rotation={[
            cameras[0].rotation.x, //-1.3816339074497006
            cameras[0].rotation.y, // -1.0832376353088016
            cameras[0].rotation.z, // -1.3574275014966424
          ]}
        />
        <directionalLight
          intensity={1}
          color={"#00dbde"}
          // lookAt={scene}
          position={[
            cameras[0].position.x,
            cameras[0].position.y,
            cameras[0].position.z,
          ]}
          rotation={[
            cameras[0].rotation.x, //-1.3816339074497006
            cameras[0].rotation.y, // -1.0832376353088016
            cameras[0].rotation.z, // -1.3574275014966424
          ]}
        />
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
        {/* <MeshDistortMaterial speed={5}> */}
        {/* <GradientTexture
          stops={[0, 0.8, 1]}
          colors={["#e63946", "#f1faee", "#a8dadc"]}
          size={100}
        > */}
        <primitive object={scene} scale={1} />
        {/* </GradientTexture> */}
        {/* </MeshDistortMaterial> */}
      </group>
    </>
  );
};

export default ThreeDModel;
