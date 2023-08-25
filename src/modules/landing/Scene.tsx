"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

export const Scene: React.FC = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>{/* <Model /> */}</Suspense>
    </Canvas>
  );
};
