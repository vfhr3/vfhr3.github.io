import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Routes/Auth';
import { Terms } from './Routes/Terms';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
