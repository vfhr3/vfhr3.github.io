import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Auth } from './Routes/Auth';


function App() {
  return (
    <>
    <Router>

      <Routes>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>

    </Router>
    </>
  );
}

export default App;
