"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type * as THREE from "three";

const Circle = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const circleCount = 8;
  const radius = 2;

  useFrame((_state, delta) => {
    groupRef.current.rotation.y += delta;
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: circleCount }).map((_, index) => (
        <mesh key={index} position={[0, 0, -0.1 * index]} rotation={[0, 0, (Math.PI * 2 * index) / circleCount]}>
          <circleGeometry args={[radius, 64]} />
          <meshStandardMaterial color="black" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
};

export const ContactScene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Circle />
    </Canvas>
  );
};
