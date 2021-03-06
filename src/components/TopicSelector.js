import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function TopicSelector() {
  const { isLightTheme} =useContext(ThemeContext);
  const [selectedTopic, setSelectedTopic] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions/"+selectedTopic);
  };

  return (
    <form>
      <select
        className={isLightTheme ? "dropdown" : "dropdown-dark"}
        onChange={(e) => setSelectedTopic(e.target.value)}
      >
        <option value=""> - Select A Topic -</option>
        <option value="coding-basics">Coding Basics</option>
        <option value="keyboard-shortcuts">Keyboard Shortcuts</option>
        <option value="cli">Command Line Interface (CLI)</option>
        <option value="loops">Loops</option>
        <option value="css">CSS</option>
        <option value="api">API</option>
        <option value="databases">Databases</option>
        <option value="react">React</option>
        <option value="applied-theory">Applied Theory</option>
        <option value="coding-interview-questions">
          Coding Interview Questions
        </option>
      </select>
      <br />
      <input
        className="button"
        type="submit"
        value="Get Started"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default TopicSelector;
