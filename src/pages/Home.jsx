import React from "react";
import About from "../components/Home/About";
import Bikes from "../components/Home/Bikes";
import Exhibition from "../components/Home/Exhibition";
import Features from "../components/Home/Features";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/Hero";
import Questions from "../components/Home/Questions";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features />
      <Bikes />
      <Exhibition />
      <Questions />
      <Footer />
    </div>
  );
};

export default Home;
