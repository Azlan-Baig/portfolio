"use client";
import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";

function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
}

export default Home;
