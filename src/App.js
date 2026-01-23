// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import "./style.css";
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import Ground from "./Ground.js";

// function CarShow() {
//   return (
//     <>
//       <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={2} />
//       <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
//       {/* <mesh>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshBasicMaterial color={"lightgreen"} />
//       </mesh> */}

//       <color args={[0, 0, 0]} attach="background" />
//       <spotLight
//         color={[1, 0.25, 0.7]}
//         intensity={1.5}
//         angle={0.5}
//         penumbra={0.5}
//         position={[5, 5, 0]}
//         castShadow
//         shadow-bias={-0.0001}
//       />

//       <spotLight
//         color={[0.14, 0.5, 1]}
//         intensity={2}
//         angle={0.6}
//         penumbra={0.5}
//         position={[-5, 5, 0]}
//         castShadow
//         shadow-bias={-0.0001}
//       />
//       <Ground />
//     </>
//   );
// }

// function App() {
//   return (
//     <Suspense fallback={null}>
//       <Canvas shadows gl={{
//         antialias: true,
//         toneMapping: THREE.ACESFilmicToneMapping,
//       }}>
//         <CarShow />
//       </Canvas>
//     </Suspense>
//   );
// }

// export default App;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ACESFilmicToneMapping } from "three";
import Ground from "./Ground.js";

function CarShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />

      <color args={[0, 0, 0]} attach="background" />

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={150}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={200}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
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
      >
        <CarShow />
      </Canvas>
    </Suspense>
  );
}

export default App;