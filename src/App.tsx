import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
        <Routes>
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/Services" element={<Services/>} />
        </Routes>
    </Router>
  );
}

export default App;
