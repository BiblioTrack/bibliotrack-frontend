// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

//TODO: https://stackoverflow.com/questions/39097440/on-react-router-how-to-stay-logged-in-state-even-page-refresh

// Create the context
const AuthContext = createContext();

// Create a provider component
const AuthContextProvider = ({ children }) => {

  // Mock user data ***this is without token, so incomplete
  // const mockUserData = {
  //   id: 1,
  //   firstname: 'John',
  //   lastname: 'Doe',
  //   email: 'john@example.com',
  //   role: 'admin',
  // };

  const mockUserData = {
    status: "Login Successful!",
    success: true,
    token: "your_token_here",
    userinfo: {
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      username: '',
      password: 'strongPassword',
      role: 'student',
      admin: false
    }
  }


  const [user, setUser] = useState('');
  const [isAdmin, setIsAdmin] = useState(true);

  const login = (userData) => {
    // console.log('auth data', userData.userinfo)
    // console.log('auth data role', userData.userinfo.role)
    setUser(userData);
    // Add logic to determine if the user is an admin
    setIsAdmin(userData.userinfo.role === 'admin' ? true : false);
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to consume the context
const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
