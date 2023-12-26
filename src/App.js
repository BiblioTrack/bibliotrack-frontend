import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage/HomePage.js'
import AboutPage from './pages/AboutPage/AboutPage.js'
import LoginPage from './pages/AuthPages/LoginPage/LoginPage.js'
import SignupPage from './pages/AuthPages/SignupPage/SignupPage.js';
import BookPage from './pages/BookPage/BookPage.js'
import AddBookPage from './pages/AddBookPage/AddBookPage.js';
import DashboardPage from './pages/DashboardPage/Dashboardpage.js';
import { AuthContextProvider } from './pages/AuthPages/AuthContext.js';



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/addbook" element={<AddBookPage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>


  );
}

export default App;
