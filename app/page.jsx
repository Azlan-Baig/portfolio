"use client";
import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero/>
    </main>
  );
}

export default Home;
