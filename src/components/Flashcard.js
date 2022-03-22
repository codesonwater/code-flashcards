import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Flashcard ({ flashcard }){
  const { isLightTheme} =useContext(ThemeContext);
  const [flip, setFlip] = useState(false);

  return (
    <div
    className=
      { isLightTheme 
        ? ` card ${flip ? 'flip' : ''}` 
        : ` card-dark ${flip ? 'flip' : ''}`
      }
      onClick={() => setFlip(!flip)}
    >

      <div className="front">
        <div className={isLightTheme ? 'question': 'question-dark'}>
        {flashcard?.question}
        </div>
        {flashcard.options &&
        <div className="flashcard-options">
          {flashcard?.options.map(option => {
            return( 
            <div 
             className={isLightTheme ? 'flashcard-option': 'flashcard-option-dark'}
             key={option}>{option}
            </div>)
          })}
        </div>
        }
      </div> 

      <div 
      className="back"> {flashcard?.answer}
      </div>
    </div>
  )
}

export default Flashcard