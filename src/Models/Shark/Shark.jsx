import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import gsap from "gsap";
// import { useFrame } from "@react-three/fiber";
import "./Shark.module.scss";

export function Shark(props) {
  const { nodes, materials, animations } = useGLTF("/models/Shark.glb");

  const ref = useRef();

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const animationAction = actions["Armature|Swim"];
    if (animationAction) {
      animationAction.play();
    }
  }, [actions]);

  // const tl = useRef();

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline({ paused: true });
  //   // Card movement and rotation
  //   tl.current.to(ref.current.position, {
  //     duration: 0.5,
  //     x: 13,
  //     y: 0,
  //     z: 7,
  //     onUpdate: () => {
  //       ref.current.rotation.y += 0.05;
  //     },
  //   });

  //   // Card rotation --------------------------------
  //   tl.current.to(
  //     ref.current.rotation,
  //     {
  //       duration: 0.5,
  //       x: -1.57,
  //       y: 4.71,
  //       z: 0,

  //       onUpdate: () => {
  //         ref.current.rotation.y -= 0.05;
  //       },
  //     },
  //     0
  //   );

  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     const windowHeight = window.innerHeight;
  //     const documentHeight = document.documentElement.scrollHeight;
  //     const progress = scrollTop / (documentHeight - windowHeight);
  //     tl.current.seek(progress * tl.current.duration());
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group
            name="Armature"
            position={[0, 0, 0.45]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <primitive object={nodes.Root} />
          </group>
          <group
            name="Shark"
            position={[0, 0.33, 0.37]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={159.42}
          >
            <skinnedMesh
              name="Shark_1"
              geometry={nodes.Shark_1.geometry}
              material={materials.Bottom}
              skeleton={nodes.Shark_1.skeleton}
            />
            <skinnedMesh
              name="Shark_2"
              geometry={nodes.Shark_2.geometry}
              material={materials.Top}
              skeleton={nodes.Shark_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/Shark.glb");

export default Shark;
