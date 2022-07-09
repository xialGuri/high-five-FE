import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FullCal from "./pages/FullCal.jsx";
import MainPage from "./pages/MainPage.jsx";
import Login from "./pages/Login.jsx";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cal" element={<FullCal />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
