import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Routes/Auth';
import { Terms } from './Routes/Terms';
import { useState } from 'react';

function App() {

  const [userToken, setUserToken] = useState();

  return (
    <Router>
      <Routes>
        <Route path='/terms' element={<Terms />}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
