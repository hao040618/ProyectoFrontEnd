import React from "react";
import NavBar from "../components/NavBar/NavBar";
import CollectionHero from "../components/CollectionHero/CollectionHero";
import TypeClotheCards from "../components/TypeClotheCards/TypeClotheCards";

function Collection() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <CollectionHero />
        <TypeClotheCards />
      </main>
    </>
  );
}

export default Collection;
