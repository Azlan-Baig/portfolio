"use client";
import React, { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HackerRoom } from "../components/HackerRoom";
import { Leva, useControls } from "leva";
import { calculateSizes } from "../constants";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "../components/HeroCamera";

const Hero = () => {
  // const controls = useControls('HeyHey',{
  //   scaleX: { value: 1, min: -10, max: 10 },
  //   scaleY: { value: 1, min: -10, max: 10 },
  //   scaleZ: { value: 1, min: -10, max: 10 },
  //   positionX: { value: 0, min: -10, max: 10 },
  //   positionY: { value: 0, min: -10, max: 10 },
  //   positionZ: { value: 0, min: -10, max: 10 },
  //   rotationX: { value: 0, min: -10, max: 10 },
  //   rotationY: { value: 0, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },
  // })
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="about">
      <div className="w-full flex flex-col mx-auto sm:mt-36 mt-20 c-space gap-3">
        <p className="text-white text-2xl text-center sm:text-3xl font-medium">
          Hi, I am Azlan.
          <span className="waving-hand">👋</span>
        </p>
        <p className="text-white text-center sm:text-6xl text-4xl font-semibold">
          Building Products & Brands
        </p>
      </div>
        <Leva hidden/>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full mt-32">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1,-Math.PI,0]} />
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10,10,10]} intensity={0.5} /> 
          </Suspense>
        </Canvas>
      </div>f
    </section>
  );
};

export default Hero;
