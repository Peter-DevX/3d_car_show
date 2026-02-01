import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { ACESFilmicToneMapping, PCFSoftShadowMap } from "three";
import { Ground } from "./Ground";
import { Car } from "./Car.js";
import { Rings } from "./Rings.js";
import { Boxes } from "./Boxes.js";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { FloatingGrid } from "./FloatingGrid.js";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
            {/* <Rings /> */}
          </>
        )}
      </CubeCamera>
      <Rings />
      <Boxes />
      <FloatingGrid />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={160}
        angle={0.99}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={20}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={160}
        angle={0.99}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={20}
      />

      <Ground />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.6}
          width={300}
          height={300}
          kernelSize={5}
          luminanceThreshold={0.95}
          luminanceSmoothing={0.025}
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL}
          offset={[0.0005, 0.0012]}
        />
      </EffectComposer>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas
        shadows
        gl={{
          antialias: true,
          // eslint-disable-next-line no-undef
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
        shadowMap={{
          enabled: true,
          type: PCFSoftShadowMap,
        }}
      >
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;
