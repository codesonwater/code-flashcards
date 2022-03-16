import React, { useContext } from "react";
import { Link } from "react-router-dom";
import TopicSelector from "../components/TopicSelector";

function Homepage() {
  return (
    <>
      <section className="homeBg">
        <p>welcome to</p>
        <h1> {" { codeCards } "} </h1>
        <br />
        {/* <h2> Select a Topic </h2> */}
        <TopicSelector />
      </section>
    </>
  );
}

export default Homepage;
