import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './features/users/LoginPage';
import SignupPage from './features/users/SignupPage';
import UserPage from './features/users/UserPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/user/:userId" element={<UserPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
