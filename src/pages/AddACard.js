import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddACard() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions/" + selectedTopic);
  };

  return (
    <>
      <p style={{marginTop: "3%"}}>why not</p>
      <h1> {" { Add Your Own Card }"} </h1>
      <br />
      <div className="formStyles">
        <form>
          <select
            className="dropdown"
            onChange={(e) => setSelectedTopic(e.target.value)}
            required = "required"
          >
            <option value=""> - Choose from the following topics -</option>
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
          <br/>

          <div className="formLabels">
          <br/>
            <label><b>Question*</b></label>
            <input 
              type = "text"
              required = "true"
              placeholder="What is 2+2?" 
              className="form-input"
            />
          <br/>
            <label><b>Choices</b></label>
            <input 
              type = "text"
              placeholder="1, 2, 3, 4  (4 max)"
              className="form-input"
            />
          <br/>
            <label><b>Answer*</b></label>
            <input 
            type = "text"
            required = "true"
            placeholder="4"
            className="form-input"
            />
          <input
            className="form-button"
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AddACard;
