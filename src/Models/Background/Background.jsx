import {
  Environment,
  Sphere,
  Sparkles,
  useDepthBuffer,
} from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
import Spotlight from "../Spotlight/Spotlight";

import * as THREE from "three";
import "./Background.module.scss";

export function Background() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const scale = Array.from({ length: 1000 }, () => 0.5 + Math.random() * 10);

  const depthBuffer = useDepthBuffer({ frames: 1 });
  return (
    <>
      <Sparkles
        count={scale.length}
        size={scale}
        position={[0, 0.9, 0]}
        scale={[windowWidth / 20, windowHeight / 20, windowWidth / 20]}
        speed={0.5}
      />
      <Spotlight
        depthBuffer={depthBuffer}
        color="#0c8cbf"
        position={[0, 20, 15]}
      />
      <Spotlight color="#0c8cbf" position={[0, 25, 0]} />

      <Environment preset="city" background />
      <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          color={"#ffffff"}
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            colorA={"#468faf"}
            colorB={"#012a4a"}
            axes={"y"}
            start={0.9}
            end={-0.1}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
}

export default Background;
