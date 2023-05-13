import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "./Home.module.scss";
import { Experience } from "../../Models/Experience/Experience";

function Home() {

  const cameraRef = useRef();


  return (
 <>
    <Canvas
    className={styles.webgl}
    camera={{
      position: [0, 0, 20],
      fov: 90,
      near: 0.1,
      far: 1000,
      ref: cameraRef,
    }}
  >
    <Experience />
  </Canvas>
    <div className={styles.main}>
    
      <section className={styles.couverture}>
        <h1 className={styles.title}>OCEAN</h1>
      </section>

      <section className={styles.whale}>
        <div className={styles.content}>
          <h2>Whale</h2>
          <p>The blue whale is the largest animal on the planet, reaching lengths of up to 100 feet and weighing as much as 200 tons. They are filter feeders that eat mostly krill, and can be found in all of the world's oceans.</p>
          {/* <img className={styles.whale_img} src="/images/whale.png" alt="" /> */}
        </div>
      </section>

      <section className={styles.shark}>
        <div className={styles.content}>
          <h2>Shark</h2>
          <p>The great white shark is one of the most feared predators in the ocean. They can grow up to 20 feet long and are known for their powerful bite and sharp teeth. They hunt a variety of prey, including seals, sea lions, and other fish.</p>
        </div>
      </section>

      <section className={styles.clownfish}>
        <div className={styles.content}>
          <h2>ClownFish</h2>
          <p>Clownfish are small, brightly colored fish that are found in tropical waters. They are known for their distinctive orange and white stripes, and for their symbiotic relationship with sea anemones. Clownfish live in small groups and feed on algae and small invertebrates.</p>
        </div>
      </section>

      <section className={styles.bluefish}>
        <div className={styles.content}>
          <h2>Blue Tang</h2>
          <p>The blue tang, also known as the surgeonfish, is a tropical fish that can be found in the coral reefs of the Pacific and Indian Oceans. They have a vibrant blue color and a sharp spine on their tail that they use for defense. They are herbivores and feed on algae and other small plants.</p>
        </div>
      </section>
    </div></>

  );
}

export default Home;
