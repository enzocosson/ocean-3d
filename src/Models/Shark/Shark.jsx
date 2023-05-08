import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import "./Shark.module.scss";

export function Shark(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Shark.glb");

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
