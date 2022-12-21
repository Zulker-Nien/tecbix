import React, { useEffect, useRef } from "react";
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
import fragmentShader from "./fragmentShader";
import vertexShader from "./vertexShader";

const ThreeDModel = () => {
  const group = useRef();
  const { nodes, animations, cameras } = useGLTF("/background2.glb");
  const { actions } = useAnimations(animations, cameras[0]);

  console.log(cameras);
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
      <group ref={group} dispose={null}>
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -0.79]}>
            <group name="8cbaae0db5f84a5e95ba67c90f0cc0a7stlcleanermaterialmergergle">
              <mesh
                name="Object_2"
                geometry={nodes.Object_2.geometry}
                scale={1}
                castShadow
                receiveShadow
              >
                <shaderMaterial
                  fragmentShader={fragmentShader}
                  vertexShader={vertexShader}
                />
              </mesh>
            </group>
          </group>
          <PerspectiveCamera
            makeDefault
            name="Camera"
            fov={22.8}
            far={500}
            rotation={[
              cameras[0].rotation.x,
              cameras[0].rotation.y,
              cameras[0].rotation.z,
            ]}
            position={[
              cameras[0].position.x,
              cameras[0].position.y,
              cameras[0].position.z,
            ]}
            near={5}
          />
        </group>
      </group>
    </>
  );
};

export default ThreeDModel;
