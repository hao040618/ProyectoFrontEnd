import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import TypeClotheBar from "../components/TypeClotheBar/TypeClotheBar";
import ClotheCards from "../components/ClotheCards/ClotheCards";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <TypeClotheBar />
        <ClotheCards />
      </main>
    </>
  );
}

export default Home;
