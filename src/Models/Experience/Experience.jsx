import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import FishClown from "../FishClown/FishClown";
import BlueFish from "../BlueFish/BlueFish";
import Shark from "../Shark/Shark";
import Whale from "../Whale/Whale";
import Background from "../Background/Background";

export function Experience(props) {
  // const { position } = props;
  return (
    <>
      <Suspense fallback={null}>
        <ambientLight color="#ffffff" intensity={0.3} />
        <directionalLight color="#5e60ce" position={[0, 5, 1]} intensity={10} />
        <OrbitControls enableZoom={false} />
        <color attach="background" args={["#89c2d9"]} />
        <Background />
        <FishClown position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05} />
        <BlueFish position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05} />
        <Shark position={[0, -5, 0]} rotation={[0, 0, 0]} scale={0.4} />
        <Whale position={[0, -50, -100]} rotation={[0, 0, 0]} scale={1.5} />
      </Suspense>
    </>
  );
}

export default Experience;
