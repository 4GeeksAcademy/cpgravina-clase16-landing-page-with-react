import React from "react";


import { Navbar } from "./navbar.jsx";

import { Cards } from "./cards.jsx";

import { Footer } from "./footer.jsx";

import { Jumbotron } from "./jumbotron.jsx";

//create your first component
export const Home = () => {
  return (
    <>
      <Navbar />
        <section>
          <Jumbotron/>
          <Cards />
        </section>
      <Footer />
    </>
  );
};

export default Home;
