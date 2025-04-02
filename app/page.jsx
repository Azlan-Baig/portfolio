"use client";
import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";

function Home() {
  return (
    <main className="max-w-full mx-auto">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Contact/>
    </main>
  );
}

export default Home;
