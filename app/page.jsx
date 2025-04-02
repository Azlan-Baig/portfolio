"use client";
import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default Home;
