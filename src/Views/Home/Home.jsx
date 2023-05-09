import { Canvas } from "@react-three/fiber";
// import { useState } from "react";
import styles from "./Home.module.scss";
// import classNames from "classnames";
import { Experience } from "../../Models/Experience/Experience";

function Home() {
  // const [isDiveOpen, setIsDiveOpen] = useState(false);

  // const underwater = classNames({
  //   [styles.underwater]: true,
  //   [styles.underwater__active]: isDiveOpen,
  // });

  // function handleClick() {
  //   setIsDiveOpen(true);
  // }

  return (
    <div className={styles.main}>
      <Canvas
        className={styles.webgl}
        camera={{
          fov: 90,
          position: [0, 0, 20],
        }}
      >
        <Experience />
      </Canvas>
      <div className={styles.couverture}>
      <h1 className={styles.title}>OCEAN</h1>
        <div className={styles.underwater}>

        </div>
      </div>
    </div>
  );
}

export default Home;
