import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import "./Whale.module.scss";

export function Whale(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/whale.glb");

  const ref = useRef();

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationAction = actions["Armature|Swim"];
    if (animationAction) {
      animationAction.play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
          </group>
          <group
            name="Whale"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
            ref={ref}
          >
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
