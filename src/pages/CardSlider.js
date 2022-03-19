import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { ThemeContext } from "../context/ThemeContext";


function CardSlider() {
  const [flashcard, setFlashcard] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [topic, setTopic] = useState([])
  const [selectedTopic, setSelectedTopic] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)
  const params = useParams();
  const { isLightTheme, light, dark } =useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  let { topicSlug } = params
  
  if(!topicSlug) { topicSlug = "" }
  
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
    fetch(`https://code-flashcards.uc.r.appspot.com/questions/${topicSlug}`)
      .then((response) => response.json())
      .then((data) => {
          setFlashcard(data.questions[currentIndex])
          setSelectedTopic(data.questions[currentIndex].topic)
          setTopic(data.questions)
          setLoaded(true);
      })
      .catch(alert);
  }, [currentIndex]);
  
  if (!loaded) {
    return <>
              <div className={"loader"} style={{marginTop: "10em"}}>
              </div>
              <h2>Loading...</h2>
          </>;
  }

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