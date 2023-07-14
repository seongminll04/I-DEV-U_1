import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/login';
import { Town } from './components/ssafytown';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/game" element={<Town />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
