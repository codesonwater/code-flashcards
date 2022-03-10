import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Flashcard from "./Flashcard";

function CardSlider() {
  const [flashcard, setFlashcard] = useState({});
  const params = useParams();
  console.log(flashcard);

  useEffect(() => {
    fetch(`http://localhost:3001/questions/${params.id}`)
      .then((response) => response.json())
      .then((data) => setFlashcard(data))
      .catch(alert);
  }, [params.id]);

  return (
    <>
      <div className="cardSlider">
        <Flashcard flashcard={flashcard} />
      </div>
      <div className="sliderNav">
        <button className="sliderBtn"> {'◀'} </button>
        <button className="sliderBtn"> {'►'} </button>
      </div>
    </>
  );
}

export default CardSlider;
