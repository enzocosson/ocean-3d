import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import "./BlueFish.module.scss";

export function GoldFish(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/BlueFishBand.glb");

  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    const animationAction = actions["Armature|Swim.001"];
    if (animationAction) {
      animationAction.play();
    }
  }, [actions]);

  const [speed, setSpeed] = useState(0);

  useEffect(() => {
    setSpeed(0.5 + Math.random());
  }, []);

  useFrame((state, delta) => {
    group.current.position.y =
      0 + 0.1 * Math.sin(state.clock.elapsedTime * 2 * speed);
    group.current.rotation.y = Math.atan2(
      group.current.position.x,
      group.current.position.z
    );
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RootNode" position={[99.85, -141.98, 239.7]}>
          <group name="Armature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root} />
            <group name="Fish2">
              <skinnedMesh
                name="Fish2_1"
                geometry={nodes.Fish2_1.geometry}
                material={materials.Body}
                skeleton={nodes.Fish2_1.skeleton}
              />
              <skinnedMesh
                name="Fish2_2"
                geometry={nodes.Fish2_2.geometry}
                material={materials.Fins}
                skeleton={nodes.Fish2_2.skeleton}
              />
              <skinnedMesh
                name="Fish2_3"
                geometry={nodes.Fish2_3.geometry}
                material={materials.Front}
                skeleton={nodes.Fish2_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode001" position={[49.84, 83.47, 81.8]}>
          <group name="Armature001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_1} />
            <group name="Fish2001">
              <skinnedMesh
                name="Fish2001_1"
                geometry={nodes.Fish2001_1.geometry}
                material={materials["Body.001"]}
                skeleton={nodes.Fish2001_1.skeleton}
              />
              <skinnedMesh
                name="Fish2001_2"
                geometry={nodes.Fish2001_2.geometry}
                material={materials["Fins.001"]}
                skeleton={nodes.Fish2001_2.skeleton}
              />
              <skinnedMesh
                name="Fish2001_3"
                geometry={nodes.Fish2001_3.geometry}
                material={materials["Front.001"]}
                skeleton={nodes.Fish2001_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode002" position={[-126.19, 3.9, 127.92]}>
          <group name="Armature002" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_2} />
            <group name="Fish2002">
              <skinnedMesh
                name="Fish2002_1"
                geometry={nodes.Fish2002_1.geometry}
                material={materials["Body.002"]}
                skeleton={nodes.Fish2002_1.skeleton}
              />
              <skinnedMesh
                name="Fish2002_2"
                geometry={nodes.Fish2002_2.geometry}
                material={materials["Fins.002"]}
                skeleton={nodes.Fish2002_2.skeleton}
              />
              <skinnedMesh
                name="Fish2002_3"
                geometry={nodes.Fish2002_3.geometry}
                material={materials["Front.002"]}
                skeleton={nodes.Fish2002_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode003" position={[38.66, 142.82, 207.97]}>
          <group name="Armature003" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_3} />
            <group name="Fish2003">
              <skinnedMesh
                name="Fish2003_1"
                geometry={nodes.Fish2003_1.geometry}
                material={materials["Body.003"]}
                skeleton={nodes.Fish2003_1.skeleton}
              />
              <skinnedMesh
                name="Fish2003_2"
                geometry={nodes.Fish2003_2.geometry}
                material={materials["Fins.003"]}
                skeleton={nodes.Fish2003_2.skeleton}
              />
              <skinnedMesh
                name="Fish2003_3"
                geometry={nodes.Fish2003_3.geometry}
                material={materials["Front.003"]}
                skeleton={nodes.Fish2003_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode004" position={[174.63, -29.44, 325.49]}>
          <group name="Armature004" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_4} />
            <group name="Fish2004">
              <skinnedMesh
                name="Fish2004_1"
                geometry={nodes.Fish2004_1.geometry}
                material={materials["Body.004"]}
                skeleton={nodes.Fish2004_1.skeleton}
              />
              <skinnedMesh
                name="Fish2004_2"
                geometry={nodes.Fish2004_2.geometry}
                material={materials["Fins.004"]}
                skeleton={nodes.Fish2004_2.skeleton}
              />
              <skinnedMesh
                name="Fish2004_3"
                geometry={nodes.Fish2004_3.geometry}
                material={materials["Front.004"]}
                skeleton={nodes.Fish2004_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode005" position={[95.39, -168.58, 8.83]}>
          <group name="Armature005" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_5} />
            <group name="Fish2005">
              <skinnedMesh
                name="Fish2005_1"
                geometry={nodes.Fish2005_1.geometry}
                material={materials["Body.005"]}
                skeleton={nodes.Fish2005_1.skeleton}
              />
              <skinnedMesh
                name="Fish2005_2"
                geometry={nodes.Fish2005_2.geometry}
                material={materials["Fins.005"]}
                skeleton={nodes.Fish2005_2.skeleton}
              />
              <skinnedMesh
                name="Fish2005_3"
                geometry={nodes.Fish2005_3.geometry}
                material={materials["Front.005"]}
                skeleton={nodes.Fish2005_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode006" position={[-47.08, 88.3, -93.91]}>
          <group name="Armature006" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_6} />
            <group name="Fish2006">
              <skinnedMesh
                name="Fish2006_1"
                geometry={nodes.Fish2006_1.geometry}
                material={materials["Body.006"]}
                skeleton={nodes.Fish2006_1.skeleton}
              />
              <skinnedMesh
                name="Fish2006_2"
                geometry={nodes.Fish2006_2.geometry}
                material={materials["Fins.006"]}
                skeleton={nodes.Fish2006_2.skeleton}
              />
              <skinnedMesh
                name="Fish2006_3"
                geometry={nodes.Fish2006_3.geometry}
                material={materials["Front.006"]}
                skeleton={nodes.Fish2006_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode008" position={[-48.51, 186.88, 110]}>
          <group name="Armature008" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_7} />
            <group name="Fish2008">
              <skinnedMesh
                name="Fish2008_1"
                geometry={nodes.Fish2008_1.geometry}
                material={materials["Body.008"]}
                skeleton={nodes.Fish2008_1.skeleton}
              />
              <skinnedMesh
                name="Fish2008_2"
                geometry={nodes.Fish2008_2.geometry}
                material={materials["Fins.008"]}
                skeleton={nodes.Fish2008_2.skeleton}
              />
              <skinnedMesh
                name="Fish2008_3"
                geometry={nodes.Fish2008_3.geometry}
                material={materials["Front.008"]}
                skeleton={nodes.Fish2008_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode009" position={[-226.27, 69.59, 407.36]}>
          <group name="Armature009" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_8} />
            <group name="Fish2009">
              <skinnedMesh
                name="Fish2009_1"
                geometry={nodes.Fish2009_1.geometry}
                material={materials["Body.009"]}
                skeleton={nodes.Fish2009_1.skeleton}
              />
              <skinnedMesh
                name="Fish2009_2"
                geometry={nodes.Fish2009_2.geometry}
                material={materials["Fins.009"]}
                skeleton={nodes.Fish2009_2.skeleton}
              />
              <skinnedMesh
                name="Fish2009_3"
                geometry={nodes.Fish2009_3.geometry}
                material={materials["Front.009"]}
                skeleton={nodes.Fish2009_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode010" position={[-72.82, 141.03, 16.29]}>
          <group name="Armature010" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_9} />
            <group name="Fish2010">
              <skinnedMesh
                name="Fish2010_1"
                geometry={nodes.Fish2010_1.geometry}
                material={materials["Body.010"]}
                skeleton={nodes.Fish2010_1.skeleton}
              />
              <skinnedMesh
                name="Fish2010_2"
                geometry={nodes.Fish2010_2.geometry}
                material={materials["Fins.010"]}
                skeleton={nodes.Fish2010_2.skeleton}
              />
              <skinnedMesh
                name="Fish2010_3"
                geometry={nodes.Fish2010_3.geometry}
                material={materials["Front.010"]}
                skeleton={nodes.Fish2010_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode011" position={[18, 15.52, 221.99]}>
          <group name="Armature011" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_10} />
            <group name="Fish2011">
              <skinnedMesh
                name="Fish2011_1"
                geometry={nodes.Fish2011_1.geometry}
                material={materials["Body.011"]}
                skeleton={nodes.Fish2011_1.skeleton}
              />
              <skinnedMesh
                name="Fish2011_2"
                geometry={nodes.Fish2011_2.geometry}
                material={materials["Fins.011"]}
                skeleton={nodes.Fish2011_2.skeleton}
              />
              <skinnedMesh
                name="Fish2011_3"
                geometry={nodes.Fish2011_3.geometry}
                material={materials["Front.011"]}
                skeleton={nodes.Fish2011_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode007" position={[-62.3, 79.37, -203.52]}>
          <group name="Armature007" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_11} />
            <group name="Fish2007">
              <skinnedMesh
                name="Fish2012_1"
                geometry={nodes.Fish2012_1.geometry}
                material={materials["Body.012"]}
                skeleton={nodes.Fish2012_1.skeleton}
              />
              <skinnedMesh
                name="Fish2012_2"
                geometry={nodes.Fish2012_2.geometry}
                material={materials["Fins.012"]}
                skeleton={nodes.Fish2012_2.skeleton}
              />
              <skinnedMesh
                name="Fish2012_3"
                geometry={nodes.Fish2012_3.geometry}
                material={materials["Front.012"]}
                skeleton={nodes.Fish2012_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode012" position={[-140.47, 124.44, -341.94]}>
          <group name="Armature012" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_12} />
            <group name="Fish2012">
              <skinnedMesh
                name="Fish2013_1"
                geometry={nodes.Fish2013_1.geometry}
                material={materials["Body.013"]}
                skeleton={nodes.Fish2013_1.skeleton}
              />
              <skinnedMesh
                name="Fish2013_2"
                geometry={nodes.Fish2013_2.geometry}
                material={materials["Fins.013"]}
                skeleton={nodes.Fish2013_2.skeleton}
              />
              <skinnedMesh
                name="Fish2013_3"
                geometry={nodes.Fish2013_3.geometry}
                material={materials["Front.013"]}
                skeleton={nodes.Fish2013_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode013" position={[-87.99, 154.98, -128.16]}>
          <group name="Armature013" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_13} />
            <group name="Fish2013">
              <skinnedMesh
                name="Fish2014_1"
                geometry={nodes.Fish2014_1.geometry}
                material={materials["Body.014"]}
                skeleton={nodes.Fish2014_1.skeleton}
              />
              <skinnedMesh
                name="Fish2014_2"
                geometry={nodes.Fish2014_2.geometry}
                material={materials["Fins.014"]}
                skeleton={nodes.Fish2014_2.skeleton}
              />
              <skinnedMesh
                name="Fish2014_3"
                geometry={nodes.Fish2014_3.geometry}
                material={materials["Front.014"]}
                skeleton={nodes.Fish2014_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode014" position={[-72.48, 9.57, -421.32]}>
          <group name="Armature014" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_14} />
            <group name="Fish2014">
              <skinnedMesh
                name="Fish2015_1"
                geometry={nodes.Fish2015_1.geometry}
                material={materials["Body.015"]}
                skeleton={nodes.Fish2015_1.skeleton}
              />
              <skinnedMesh
                name="Fish2015_2"
                geometry={nodes.Fish2015_2.geometry}
                material={materials["Fins.015"]}
                skeleton={nodes.Fish2015_2.skeleton}
              />
              <skinnedMesh
                name="Fish2015_3"
                geometry={nodes.Fish2015_3.geometry}
                material={materials["Front.015"]}
                skeleton={nodes.Fish2015_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode015" position={[-6.07, -63.18, -340.48]}>
          <group name="Armature015" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_15} />
            <group name="Fish2015">
              <skinnedMesh
                name="Fish2016_1"
                geometry={nodes.Fish2016_1.geometry}
                material={materials["Body.016"]}
                skeleton={nodes.Fish2016_1.skeleton}
              />
              <skinnedMesh
                name="Fish2016_2"
                geometry={nodes.Fish2016_2.geometry}
                material={materials["Fins.016"]}
                skeleton={nodes.Fish2016_2.skeleton}
              />
              <skinnedMesh
                name="Fish2016_3"
                geometry={nodes.Fish2016_3.geometry}
                material={materials["Front.016"]}
                skeleton={nodes.Fish2016_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode016" position={[154.86, -91.92, -40.86]}>
          <group name="Armature016" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_16} />
            <group name="Fish2016">
              <skinnedMesh
                name="Fish2017_1"
                geometry={nodes.Fish2017_1.geometry}
                material={materials["Body.017"]}
                skeleton={nodes.Fish2017_1.skeleton}
              />
              <skinnedMesh
                name="Fish2017_2"
                geometry={nodes.Fish2017_2.geometry}
                material={materials["Fins.017"]}
                skeleton={nodes.Fish2017_2.skeleton}
              />
              <skinnedMesh
                name="Fish2017_3"
                geometry={nodes.Fish2017_3.geometry}
                material={materials["Front.017"]}
                skeleton={nodes.Fish2017_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode017" position={[54.39, 171.31, -66.7]}>
          <group name="Armature017" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_17} />
            <group name="Fish2017">
              <skinnedMesh
                name="Fish2018_1"
                geometry={nodes.Fish2018_1.geometry}
                material={materials["Body.018"]}
                skeleton={nodes.Fish2018_1.skeleton}
              />
              <skinnedMesh
                name="Fish2018_2"
                geometry={nodes.Fish2018_2.geometry}
                material={materials["Fins.018"]}
                skeleton={nodes.Fish2018_2.skeleton}
              />
              <skinnedMesh
                name="Fish2018_3"
                geometry={nodes.Fish2018_3.geometry}
                material={materials["Front.018"]}
                skeleton={nodes.Fish2018_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode018" position={[-25.91, -71.54, -206.62]}>
          <group name="Armature018" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_18} />
            <group name="Fish2018">
              <skinnedMesh
                name="Fish2019_1"
                geometry={nodes.Fish2019_1.geometry}
                material={materials["Body.019"]}
                skeleton={nodes.Fish2019_1.skeleton}
              />
              <skinnedMesh
                name="Fish2019_2"
                geometry={nodes.Fish2019_2.geometry}
                material={materials["Fins.019"]}
                skeleton={nodes.Fish2019_2.skeleton}
              />
              <skinnedMesh
                name="Fish2019_3"
                geometry={nodes.Fish2019_3.geometry}
                material={materials["Front.019"]}
                skeleton={nodes.Fish2019_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode019" position={[-119.79, 3.04, -304.01]}>
          <group name="Armature019" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_19} />
            <group name="Fish2019">
              <skinnedMesh
                name="Fish2020_1"
                geometry={nodes.Fish2020_1.geometry}
                material={materials["Body.020"]}
                skeleton={nodes.Fish2020_1.skeleton}
              />
              <skinnedMesh
                name="Fish2020_2"
                geometry={nodes.Fish2020_2.geometry}
                material={materials["Fins.020"]}
                skeleton={nodes.Fish2020_2.skeleton}
              />
              <skinnedMesh
                name="Fish2020_3"
                geometry={nodes.Fish2020_3.geometry}
                material={materials["Front.020"]}
                skeleton={nodes.Fish2020_3.skeleton}
              />
            </group>
          </group>
        </group>
        <group name="RootNode020" position={[80.08, -129.83, -208.58]}>
          <group name="Armature020" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Root_20} />
            <group name="Fish2020">
              <skinnedMesh
                name="Fish2021"
                geometry={nodes.Fish2021.geometry}
                material={materials["Body.021"]}
                skeleton={nodes.Fish2021.skeleton}
              />
              <skinnedMesh
                name="Fish2021_1"
                geometry={nodes.Fish2021_1.geometry}
                material={materials["Fins.021"]}
                skeleton={nodes.Fish2021_1.skeleton}
              />
              <skinnedMesh
                name="Fish2021_2"
                geometry={nodes.Fish2021_2.geometry}
                material={materials["Front.021"]}
                skeleton={nodes.Fish2021_2.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/BlueFishBand.glb");

export default GoldFish;
