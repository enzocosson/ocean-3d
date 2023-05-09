import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import "./Whale.module.scss";

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Whale(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/whale.glb");

  const scroll = useScroll();
  const ref = useRef();
  const tl = useRef();

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationAction = actions["Armature|Swim"];
    if (animationAction) {
      animationAction.play();
    }
  }, [actions]);

  useFrame(() => {
    if (scroll && scroll.offset)
      tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    // Card movement and rotation
    tl.current.to(ref.current.position, {
      duration: 0.5,
      x: 0,
      y: 35,
      z: 70,
      onUpdate: () => {
        ref.current.rotation.y += 0.05;
      },
    });

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollTop / (documentHeight - windowHeight);
      tl.current.seek(progress * tl.current.duration());
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene" ref={ref}>
        <group name="RootNode">
          <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group name="Whale" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh
              name="Whale_1"
              geometry={nodes.Whale_1.geometry}
              material={materials.Top}
              skeleton={nodes.Whale_1.skeleton}
            />
            <skinnedMesh
              name="Whale_2"
              geometry={nodes.Whale_2.geometry}
              material={materials.Bottom}
              skeleton={nodes.Whale_2.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/whale.glb");

export default Whale;
