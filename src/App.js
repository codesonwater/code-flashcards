import React from "react";
import { Route, Routes } from "react-router-dom";
import CardSlider from "./pages/CardSlider";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Home";
import Header from "./components/Header";



// import { UserContextProvider } from './context/UserContext';
// import { initializeApp } from 'firebase/app';

// import { GuestRoute } from './components/GuestRoute';
// import { LoginPage } from './pages/Login';
// import { AuthRoute } from './components/AuthRoute';
// import { AuthenticatedPage } from './pages/Authenticated';

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
    <>
    {/* <ThemeContext.Provider> */}
      <Header />
      <Routes>
        <Route path="/questions/" element={<CardSlider />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      {/* <Footer /> */}
    {/* </ThemeContext.Provider> */}
    </>
  );
}

export default App;
