import React, { useContext } from "react";
import TopicSelector from "../components/TopicSelector";
import { ThemeContext } from "../context/ThemeContext";

function Homepage() {
  const {isLightTheme} = useContext(ThemeContext)  
  return (
    <>      
     <section className={isLightTheme ? 'HomeBg': 'DarkHomeBg'}>
        <p style={isLightTheme ? {color: "lightseagreen" }: {color: "#eee"}  }>welcome to</p>
        <h1 style={isLightTheme ? {color: "lightslategrey" }: {color: "#ddd"}  }> {" { codeCards } "} </h1>
        <br />
        <TopicSelector />
      </section>
    </>
  );
}

export default Homepage;
