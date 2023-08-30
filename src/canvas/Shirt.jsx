import React from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useSnapshot } from "valtio";
import state from "../store";

const Shirt = () => {
  const snap = useSnapshot(state);

  // import the 3d model
  const { nodes, materials } = useGLTF("/shirt_baked.glb");

  // Create 3d model and texture

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      ></mesh>
    </group>
  );
};

export default Shirt;
