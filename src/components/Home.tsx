import React from "react";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import Hero from "./Hero.tsx";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

export default Home;
