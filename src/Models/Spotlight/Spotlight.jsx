import { Vector3 } from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { SpotLight } from "@react-three/drei";

export function Spotlight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      castShadow
      ref={light}
      penumbra={1}
      distance={30}
      angle={2}
      attenuation={25}
      anglePower={20}
      intensity={0.5}
      {...props}
    />
  );
}

export default Spotlight;
