import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FishClown from "../../Models/FishClown/FishClown";
import BlueFish from "../../Models/BlueFish/BlueFish";
import Shark from "../../Models/Shark/Shark";
import Whale from "../../Models/Whale/Whale";
import Background from "../../Models/Background/Background";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.main}>
      <Canvas
        className={styles.webgl}
        camera={{
          fov: 64,
          position: [0, 0, 20],
        }}
      >
        <ambientLight color="#ffffff" intensity={0.3} />
        <directionalLight color="#5e60ce" position={[0, 5, 1]} intensity={10} />
        <OrbitControls enableZoom={false} />
        <color attach="background" args={["#89c2d9"]} />
        <Suspense fallback={null}>
          <Background />
          <FishClown position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05} />
          <BlueFish position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.05} />
          <Shark position={[0, -5, 0]} rotation={[0, 0, 0]} scale={0.4} />
          <Whale position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1.5} />
        </Suspense>
      </Canvas>
      <div className={styles.couverture}></div>
    </div>
  );
}

export default Home;
