import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function TopicSelector() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    console.log(selectedTopic);
    navigate("/questions/");
  };

  return (
    <form>
      <select
        className="dropdown"
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
