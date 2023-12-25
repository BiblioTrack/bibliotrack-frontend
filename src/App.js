import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/HomePage/HomePage.js'
import About from './pages/AboutPage/AboutPage.js'
import Login from './pages/AuthPages/LoginPage/LoginPage.js'
import Signup from './pages/AuthPages/SignupPage/SignupPage.js';
import BookDetailsPage from './pages/BookDetailsPage/BookDetailsPage.js'
import AddBook from './pages/AddBookPage/AddBook.js';
import { AuthContextProvider } from './pages/AuthPages/AuthContext.js';



function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>


  );
}

export default App;
