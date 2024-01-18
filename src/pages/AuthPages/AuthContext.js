// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

//TODO: https://stackoverflow.com/questions/39097440/on-react-router-how-to-stay-logged-in-state-even-page-refresh

// Create the context
const AuthContext = createContext();

// Create a provider component
const AuthContextProvider = ({ children }) => {
  //TODO: remove mock user
  // Mock user data
  const mockUserData = {
    id: 1,
    firstname: 'John',
    lastname: 'Doe',
    email: 'john@example.com',
    role: 'user', 
  };    

  const [user, setUser] = useState(mockUserData); 
  const [isAdmin, setIsAdmin] = useState(true); 

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
