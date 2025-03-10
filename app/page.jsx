"use client";
import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero/>
    </main>
  );
}

export default Home;
