import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo512.png';
import './App.css';
import Sponsor from './Sponsor';
import Manufacturer from './Manufacturers';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="App-header">
              <img src={logo} alt="Supplygain Logo" style={{ width: '120px', height: '120px' }} />
              <h1>Elevate Your Supply, Amplify Your Gain</h1>
              <br></br>
              <div className="buttons">
                <Link to="/manufacturers" className="App-button">Manufacturers</Link>
                <Link to="/sponsors" className="App-button">Sponsors</Link>
              </div>
            </div>
          } />
          <Route path="/manufacturers" element={<Manufacturer />} />
          <Route path="/sponsors" element={<Sponsor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;