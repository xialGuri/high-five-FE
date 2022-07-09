import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Calendar from "./pages/Calendar.js";
function App() {
  return (
    <Routes>
      <Route path="/" element={Calendar}></Route>
    </Routes>
  );
}

export default App;
