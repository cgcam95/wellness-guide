import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nutrition from './pages/Nutrition';
import Nomatch from './pages/Nomatch';
import Exercise from './pages/Exercise';
import Meditation from './pages/Meditation';
import './App.css';

const App= () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Router>
  )
}

export default App;
