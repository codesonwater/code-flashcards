import React from "react";
import { Route, Routes } from "react-router-dom";
import CardSlider from "./pages/CardSlider";
import ThemeContextProvider from "./context/ThemeContext";
import "./App.css";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Home";
import Header from "./components/Header";
import AddACard from "./pages/AddACard";

import { UserContextProvider } from './context/UserContext';
import { GuestRoute } from './components/GuestRoute';
import { AuthRoute } from './components/AuthRoute';
import { AuthenticatedPage } from './pages/Authenticated';
import { app } from "./ConnectAuth";

function App() {
  return (
    <>
    <UserContextProvider>
    <ThemeContextProvider>
      <Header />
      <Routes>
        <Route path="/questions/:topicSlug" element={<CardSlider />} />
        <Route path="/questions/" element={<CardSlider />} />
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/questions/create" element={<AddACard />}></Route>
      </Routes>
      {/* <Footer /> */}
    </ThemeContextProvider>
    </UserContextProvider>
    </>
  );
}

export default App;
