import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormService from './FormService';
import Home from './Home';




export default function Service() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          
          <li><Link to="/service">Form Page</Link></li>
        </ul>
      </nav>
    </div>
  </Router>
  );
}


