"use client";
import React, { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera, Ring } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { HackerRoom } from "../components/HackerRoom";
import { Leva, useControls } from "leva";
import { calculateSizes } from "../constants";
import { useMediaQuery } from "react-responsive";
import HeroCamera from "../components/HeroCamera";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import Button from "../components/Button";
import Link from "next/link";
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
      <Leva hidden />
      <div className="w-full h-full absolute inset-0 mt-9">
        <Canvas className="w-full h-full ">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} rotation={[0,Math.PI/5,0]} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <Link href={'#contact'} >
        <Button name={"Let's Work Togerther"} isBeam={true} containerClass="sm:w-fit w-full sm:min-w-96" />
        </Link>
      </div>

      </div>
    </section>
  );
};

export default Hero;
