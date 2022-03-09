import React from 'react'
import Flashcard from './Flashcard'

function FlashCardList ({ flashcards }){
  return (
    <div>
        {flashcards.map(flashcard =>{ 
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  )
}

export default FlashCardList