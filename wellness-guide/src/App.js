import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nutrition from './pages/Nutrition';
import Nomatch from './pages/Nomatch';

import './App.css';

const App= () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Router>
  )
}

export default App;
