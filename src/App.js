import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CardSlider from "./components/CardSlider";

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
  return (
    <Routes>
      <Route path="/questions/:id" element={<CardSlider />}/>
    </Routes>
  );
}

export default App;
