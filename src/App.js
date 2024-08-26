import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';



import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome imports

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar /> {/* Use the Navbar component here */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<Home />} />
            <Route path="/resume" element={<Home />} />
            <Route path="/projects" element={<Home />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
