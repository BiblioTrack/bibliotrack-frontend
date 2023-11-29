import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage/HomePage.js'
import About from './pages/AboutPage/AboutPage.js'
import Login from './pages/LoginPage/LoginPage.js'
import Signup from './pages/SignupPage/SignupPage.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
