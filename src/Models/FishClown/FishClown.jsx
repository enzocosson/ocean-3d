import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import "./FishClown.module.scss";

export function FishClown(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/FishClownBand.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    const animationAction = actions["Armature|Swim"];
    if (animationAction) {
      animationAction.play();
    }
  }, [actions]);

  const scroll = useScroll();
  const tl = useRef();





 

  useFrame(() => {
    if (scroll && scroll.offset)
      tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true, duration: 1 });
    // Card movement and rotation
    tl.current.to(group.current.position, {
      duration: 0.5,
      x: 3,
      y: 0,
      z: 10,
      ease : "power3.out"
    }, 0.4);
   


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
      <group name="Scene">
        <group name="RootNode" position={[26.56, -48.9, -1.04]}>
          <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
            <group name="ClownFish">
              <skinnedMesh
                name="ClownFish_1"
                geometry={nodes.ClownFish_1.geometry}
                material={materials.Outline}
                skeleton={nodes.ClownFish_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish_2"
                geometry={nodes.ClownFish_2.geometry}
                material={materials.Body}
                skeleton={nodes.ClownFish_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish_3"
                geometry={nodes.ClownFish_3.geometry}
                material={materials.Stripes}
                skeleton={nodes.ClownFish_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode002" position={[43.85, -61.61, -48.26]}>
          <group name="Armature002" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_1} />
            <group name="ClownFish002">
              <skinnedMesh
                name="ClownFish002_1"
                geometry={nodes.ClownFish002_1.geometry}
                material={materials["Outline.002"]}
                skeleton={nodes.ClownFish002_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish002_2"
                geometry={nodes.ClownFish002_2.geometry}
                material={materials["Body.002"]}
                skeleton={nodes.ClownFish002_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish002_3"
                geometry={nodes.ClownFish002_3.geometry}
                material={materials["Stripes.002"]}
                skeleton={nodes.ClownFish002_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode014" position={[104.94, -1.61, 38.43]}>
          <group name="Armature014" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_2} />
            <group name="ClownFish014">
              <skinnedMesh
                name="ClownFish014_1"
                geometry={nodes.ClownFish014_1.geometry}
                material={materials["Outline.014"]}
                skeleton={nodes.ClownFish014_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish014_2"
                geometry={nodes.ClownFish014_2.geometry}
                material={materials["Body.014"]}
                skeleton={nodes.ClownFish014_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish014_3"
                geometry={nodes.ClownFish014_3.geometry}
                material={materials["Stripes.014"]}
                skeleton={nodes.ClownFish014_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode015" position={[115.1, -19.72, 127.36]}>
          <group name="Armature015" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_3} />
            <group name="ClownFish015">
              <skinnedMesh
                name="ClownFish015_1"
                geometry={nodes.ClownFish015_1.geometry}
                material={materials["Outline.015"]}
                skeleton={nodes.ClownFish015_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish015_2"
                geometry={nodes.ClownFish015_2.geometry}
                material={materials["Body.015"]}
                skeleton={nodes.ClownFish015_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish015_3"
                geometry={nodes.ClownFish015_3.geometry}
                material={materials["Stripes.015"]}
                skeleton={nodes.ClownFish015_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode016" position={[50.23, 76.72, 160.59]}>
          <group name="Armature016" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_4} />
            <group name="ClownFish016">
              <skinnedMesh
                name="ClownFish016_1"
                geometry={nodes.ClownFish016_1.geometry}
                material={materials["Outline.016"]}
                skeleton={nodes.ClownFish016_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish016_2"
                geometry={nodes.ClownFish016_2.geometry}
                material={materials["Body.016"]}
                skeleton={nodes.ClownFish016_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish016_3"
                geometry={nodes.ClownFish016_3.geometry}
                material={materials["Stripes.016"]}
                skeleton={nodes.ClownFish016_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode018" position={[49, -6.83, 211.36]}>
          <group name="Armature018" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_5} />
            <group name="ClownFish018">
              <skinnedMesh
                name="ClownFish018_1"
                geometry={nodes.ClownFish018_1.geometry}
                material={materials["Outline.018"]}
                skeleton={nodes.ClownFish018_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish018_2"
                geometry={nodes.ClownFish018_2.geometry}
                material={materials["Body.018"]}
                skeleton={nodes.ClownFish018_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish018_3"
                geometry={nodes.ClownFish018_3.geometry}
                material={materials["Stripes.018"]}
                skeleton={nodes.ClownFish018_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode023" position={[-137.87, 28.63, 134.05]}>
          <group name="Armature023" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_6} />
            <group name="ClownFish023">
              <skinnedMesh
                name="ClownFish023_1"
                geometry={nodes.ClownFish023_1.geometry}
                material={materials["Outline.023"]}
                skeleton={nodes.ClownFish023_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish023_2"
                geometry={nodes.ClownFish023_2.geometry}
                material={materials["Body.023"]}
                skeleton={nodes.ClownFish023_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish023_3"
                geometry={nodes.ClownFish023_3.geometry}
                material={materials["Stripes.023"]}
                skeleton={nodes.ClownFish023_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode025" position={[-98.8, -0.1, 230.76]}>
          <group name="Armature025" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_7} />
          </group>
        </group>
        <group name="RootNode026" position={[-136.45, -2.58, 189.26]}>
          <group name="Armature026" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_8} />
            <group name="ClownFish026">
              <skinnedMesh
                name="ClownFish026_1"
                geometry={nodes.ClownFish026_1.geometry}
                material={materials["Outline.026"]}
                skeleton={nodes.ClownFish026_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish026_2"
                geometry={nodes.ClownFish026_2.geometry}
                material={materials["Body.026"]}
                skeleton={nodes.ClownFish026_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish026_3"
                geometry={nodes.ClownFish026_3.geometry}
                material={materials["Stripes.026"]}
                skeleton={nodes.ClownFish026_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode027" position={[-97.57, 83.45, 179.99]}>
          <group name="Armature027" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_9} />
            <group name="ClownFish027">
              <skinnedMesh
                name="ClownFish027_1"
                geometry={nodes.ClownFish027_1.geometry}
                material={materials["Outline.027"]}
                skeleton={nodes.ClownFish027_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish027_2"
                geometry={nodes.ClownFish027_2.geometry}
                material={materials["Body.027"]}
                skeleton={nodes.ClownFish027_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish027_3"
                geometry={nodes.ClownFish027_3.geometry}
                material={materials["Stripes.027"]}
                skeleton={nodes.ClownFish027_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode032" position={[-162.57, 61.89, 46.15]}>
          <group name="Armature032" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_10} />
            <group name="ClownFish032">
              <skinnedMesh
                name="ClownFish032_1"
                geometry={nodes.ClownFish032_1.geometry}
                material={materials["Outline.032"]}
                skeleton={nodes.ClownFish032_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish032_2"
                geometry={nodes.ClownFish032_2.geometry}
                material={materials["Body.032"]}
                skeleton={nodes.ClownFish032_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish032_3"
                geometry={nodes.ClownFish032_3.geometry}
                material={materials["Stripes.032"]}
                skeleton={nodes.ClownFish032_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode039" position={[-149.44, -60.54, 58.36]}>
          <group name="Armature039" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_11} />
            <group name="ClownFish039">
              <skinnedMesh
                name="ClownFish039_1"
                geometry={nodes.ClownFish039_1.geometry}
                material={materials["Outline.039"]}
                skeleton={nodes.ClownFish039_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish039_2"
                geometry={nodes.ClownFish039_2.geometry}
                material={materials["Body.039"]}
                skeleton={nodes.ClownFish039_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish039_3"
                geometry={nodes.ClownFish039_3.geometry}
                material={materials["Stripes.039"]}
                skeleton={nodes.ClownFish039_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode044" position={[-10.03, -152.67, 167.15]}>
          <group name="Armature044" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_12} />
            <group name="ClownFish044">
              <skinnedMesh
                name="ClownFish044_1"
                geometry={nodes.ClownFish044_1.geometry}
                material={materials["Outline.044"]}
                skeleton={nodes.ClownFish044_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish044_2"
                geometry={nodes.ClownFish044_2.geometry}
                material={materials["Body.044"]}
                skeleton={nodes.ClownFish044_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish044_3"
                geometry={nodes.ClownFish044_3.geometry}
                material={materials["Stripes.044"]}
                skeleton={nodes.ClownFish044_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode045" position={[-39.65, -139.83, 151.94]}>
          <group name="Armature045" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_13} />
            <group name="ClownFish045">
              <skinnedMesh
                name="ClownFish045_1"
                geometry={nodes.ClownFish045_1.geometry}
                material={materials["Outline.045"]}
                skeleton={nodes.ClownFish045_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish045_2"
                geometry={nodes.ClownFish045_2.geometry}
                material={materials["Body.045"]}
                skeleton={nodes.ClownFish045_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish045_3"
                geometry={nodes.ClownFish045_3.geometry}
                material={materials["Stripes.045"]}
                skeleton={nodes.ClownFish045_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode046" position={[7.26, -165.38, 119.93]} />
        <group name="RootNode057" position={[-76.06, -138.91, 226.35]}>
          <group name="Armature057" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_14} />
            <group name="ClownFish057">
              <skinnedMesh
                name="ClownFish057_1"
                geometry={nodes.ClownFish057_1.geometry}
                material={materials["Outline.057"]}
                skeleton={nodes.ClownFish057_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish057_2"
                geometry={nodes.ClownFish057_2.geometry}
                material={materials["Body.057"]}
                skeleton={nodes.ClownFish057_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish057_3"
                geometry={nodes.ClownFish057_3.geometry}
                material={materials["Stripes.057"]}
                skeleton={nodes.ClownFish057_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode058" position={[68.36, -105.37, 206.62]} />
        <group name="RootNode069" position={[160.22, -117.33, 360.15]}>
          <group name="Armature069" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_15} />
            <group name="ClownFish069">
              <skinnedMesh
                name="ClownFish069_1"
                geometry={nodes.ClownFish069_1.geometry}
                material={materials["Outline.069"]}
                skeleton={nodes.ClownFish069_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish069_2"
                geometry={nodes.ClownFish069_2.geometry}
                material={materials["Body.069"]}
                skeleton={nodes.ClownFish069_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish069_3"
                geometry={nodes.ClownFish069_3.geometry}
                material={materials["Stripes.069"]}
                skeleton={nodes.ClownFish069_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode074" position={[71.75, -145.64, 206.95]} />
        <group name="RootNode086" position={[108.16, -146.56, 132.54]}>
          <group name="Armature086" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_16} />
            <group name="ClownFish086">
              <skinnedMesh
                name="ClownFish086_1"
                geometry={nodes.ClownFish086_1.geometry}
                material={materials["Outline.086"]}
                skeleton={nodes.ClownFish086_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish086_2"
                geometry={nodes.ClownFish086_2.geometry}
                material={materials["Body.086"]}
                skeleton={nodes.ClownFish086_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish086_3"
                geometry={nodes.ClownFish086_3.geometry}
                material={materials["Stripes.086"]}
                skeleton={nodes.ClownFish086_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode088" position={[36.35, -160.56, -197.38]}>
          <group name="Armature088" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_17} />
            <group name="ClownFish088">
              <skinnedMesh
                name="ClownFish088_1"
                geometry={nodes.ClownFish088_1.geometry}
                material={materials["Outline.088"]}
                skeleton={nodes.ClownFish088_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish088_2"
                geometry={nodes.ClownFish088_2.geometry}
                material={materials["Body.088"]}
                skeleton={nodes.ClownFish088_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish088_3"
                geometry={nodes.ClownFish088_3.geometry}
                material={materials["Stripes.088"]}
                skeleton={nodes.ClownFish088_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode093" position={[47.02, -92.9, -166.65]}>
          <group name="Armature093" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_18} />
            <group name="ClownFish093">
              <skinnedMesh
                name="ClownFish093_1"
                geometry={nodes.ClownFish093_1.geometry}
                material={materials["Outline.093"]}
                skeleton={nodes.ClownFish093_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish093_2"
                geometry={nodes.ClownFish093_2.geometry}
                material={materials["Body.093"]}
                skeleton={nodes.ClownFish093_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish093_3"
                geometry={nodes.ClownFish093_3.geometry}
                material={materials["Stripes.093"]}
                skeleton={nodes.ClownFish093_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode115" position={[-22.92, -124.64, -49.57]}>
          <group name="Armature115" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_19} />
            <group name="ClownFish115">
              <skinnedMesh
                name="ClownFish115_1"
                geometry={nodes.ClownFish115_1.geometry}
                material={materials["Outline.115"]}
                skeleton={nodes.ClownFish115_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish115_2"
                geometry={nodes.ClownFish115_2.geometry}
                material={materials["Body.115"]}
                skeleton={nodes.ClownFish115_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish115_3"
                geometry={nodes.ClownFish115_3.geometry}
                material={materials["Stripes.115"]}
                skeleton={nodes.ClownFish115_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode116" position={[-33.07, -106.53, -138.51]}>
          <group name="Armature116" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_20} />
            <group name="ClownFish116">
              <skinnedMesh
                name="ClownFish116_1"
                geometry={nodes.ClownFish116_1.geometry}
                material={materials["Outline.116"]}
                skeleton={nodes.ClownFish116_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish116_2"
                geometry={nodes.ClownFish116_2.geometry}
                material={materials["Body.116"]}
                skeleton={nodes.ClownFish116_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish116_3"
                geometry={nodes.ClownFish116_3.geometry}
                material={materials["Stripes.116"]}
                skeleton={nodes.ClownFish116_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode126" position={[-91.5, 20.74, -230.49]}>
          <group name="Armature126" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_21} />
            <group name="ClownFish125">
              <skinnedMesh
                name="ClownFish125_1"
                geometry={nodes.ClownFish125_1.geometry}
                material={materials["Outline.125"]}
                skeleton={nodes.ClownFish125_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish125_2"
                geometry={nodes.ClownFish125_2.geometry}
                material={materials["Body.125"]}
                skeleton={nodes.ClownFish125_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish125_3"
                geometry={nodes.ClownFish125_3.geometry}
                material={materials["Stripes.125"]}
                skeleton={nodes.ClownFish125_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode130" position={[-51.2, 75.56, -184.54]}>
          <group name="Armature130" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_22} />
            <group name="ClownFish129">
              <skinnedMesh
                name="ClownFish129_1"
                geometry={nodes.ClownFish129_1.geometry}
                material={materials["Outline.129"]}
                skeleton={nodes.ClownFish129_1.skeleton}
              />
              <skinnedMesh
                name="ClownFish129_2"
                geometry={nodes.ClownFish129_2.geometry}
                material={materials["Body.129"]}
                skeleton={nodes.ClownFish129_2.skeleton}
              />
              <skinnedMesh
                name="ClownFish129_3"
                geometry={nodes.ClownFish129_3.geometry}
                material={materials["Stripes.129"]}
                skeleton={nodes.ClownFish129_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group
          name="Face_end100"
          position={[0, -0.01, 0.02]}
          rotation={[Math.PI, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/FishClownBand.glb");

export default FishClown;
