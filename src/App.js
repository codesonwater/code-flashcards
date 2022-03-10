import React, { useState, useEffect } from "react";
import "./App.css";
import FlashCardList from "./components/FlashCardList";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { UserContextProvider } from './context/UserContext';
// import { initializeApp } from 'firebase/app';

// import { GuestRoute } from './components/GuestRoute';
// import { LoginPage } from './pages/Login';
// import { AuthRoute } from './components/AuthRoute';
// import { AuthenticatedPage } from './pages/Authenticated';
// import HomePage from './pages/Home';

// const firebaseConfig = {
//   apiKey: "AIzaSyBb2f2-cHxcPrYMdoYkA6uxcUM68XzrIOE",
//   authDomain: "code-flashcards.firebaseapp.com",
//   projectId: "code-flashcards",
//   storageBucket: "code-flashcards.appspot.com",
//   messagingSenderId: "183290892669",
//   appId: "1:183290892669:web:75628b5e99a339f528bc14",
//   measurementId: "G-25T6T1C914"
// };

// initializeApp(firebaseConfig);

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);

  // useEffect(() => {
  //   fetch to api bring in all data 
  //   API.get("http://localhost:3000")
  //     .then((res) => res.json())
  //     .then((data) => setFlashcards(data));
  // }, []);

  return (
    <div className="container">
      <FlashCardList flashcards={flashcards} />
    </div>

    // <Router>
    //   <UserContextProvider>
    //     <Routes>
    //       <Route
    //         path="/login"
    //         element={
    //           <GuestRoute>
    //             <LoginPage />
    //           </GuestRoute>
    //         }
    //       />
    //       <Route
    //         path="/authenticated"
    //         element={
    //           <AuthRoute>
    //             <AuthenticatedPage />
    //           </AuthRoute>
    //         }
    //       />
    //       <Route path="/" element={<HomePage />} />
    //     </Routes>
    //   </UserContextProvider>
    // </Router>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 2+2?",
    answer: "4",
    options: ["2", "3", "4", "5"],
  },
  {
    id: 2,
    question: "What does CRUD stand for?",
    answer: " Create, Read, Update, Delete",
    options: [],
  },
  {
    id: 3,
    question: "What is an object?",
    answer: "A collection of keys and values",
    options: [],
  },
  {
    id: 4,
    question: "There is only one way to write a function?",
    answer: "No",
    options: ["Yes", "No"],
  },
  {
    id: 5,
    question: "You can use both single and double quotes in JS?",
    answer: " True",
    options: ["True", "False"],
  },
];

export default App;
