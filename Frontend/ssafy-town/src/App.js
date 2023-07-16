import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './components/login';
import { Town } from './components/ssafytown';
import SignupForm from './components/signup';
import Findpassword from './components/findpassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/findpassword" element={<Findpassword />} />
          <Route path="/game" element={<Town />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
