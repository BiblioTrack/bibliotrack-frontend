// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create a provider component
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Replace 'null' with your actual user object
  const [isAdmin, setIsAdmin] = useState(false); // Add isAdmin or other user roles

  const login = (userData) => {
    setUser(userData);
    // Add logic to determine if the user is an admin
    setIsAdmin(userData.role === 'admin'); 
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
