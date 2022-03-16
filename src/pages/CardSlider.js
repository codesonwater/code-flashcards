import { useEffect, useState } from "react";
import Flashcard from "../components/Flashcard";


function CardSlider() {
  const [flashcard, setFlashcard] = useState({});
  const [topic, setTopic] = useState([])
  const [selectedTopic, setSelectedTopic] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)
  
  

  function previousSlide() { 
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1)
      setFlashcard(topic[currentIndex])
    }  
  }

  function nextSlide() {
    if(currentIndex < topic.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setFlashcard(topic[currentIndex])
    } 
  }

  useEffect(() => {
    fetch("https://code-flashcards.uc.r.appspot.com/questions/")
      .then((response) => response.json())
      .then((data) => {
          setFlashcard(data.questions[currentIndex])
          setSelectedTopic(data.questions[currentIndex].topic)
          setTopic(data.questions)
      })
      .catch(alert);
  }, [currentIndex]);
  

  return (
  <>
  <a href='/' className="backbtn"> ❮ </a>
  <h2>{selectedTopic}</h2>
      <div className="cardSlider">
        <Flashcard flashcard={flashcard} />
      </div>

      <div className="sliderNav">
        <button className="sliderBtn-L" onClick={() => previousSlide() }> {'❮'} </button>
        <button className="sliderBtn-R" onClick={() => nextSlide() }> {'❯'} </button>
      </div>
  </>
  )
}



export default CardSlider;