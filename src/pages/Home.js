import React, { useContext } from "react";
import TopicSelector from "../components/TopicSelector";

function Homepage() {
  return (
    <>      
     <section className="HomeBg">
        <p>welcome to</p>
        <h1> {" { codeCards } "} </h1>
        <br />
        <TopicSelector />
      </section>
    </>
  );
}

export default Homepage;
