import React, { useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";

export function Car() {
  const gltf = useLoader(GLTFLoader, "models/car/scene.gltf");

  useEffect(() => {
    gltf.scene.scale.set(0.0015, 0.0015, 0.0015);
    gltf.scene.position.set(0, 0.99, 0);

    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 20;
      }
    });
  });

  return (
    <>
      <primitive object={gltf.scene} />
      {/* <ambientLight></ambientLight> */}
    </>
  );
}





// watch this video to continue project
// What is left is getting the tyres to move
// https://youtu.be/pbfJt-XMPo4?si=c3VqP6ezqsCAwhW7