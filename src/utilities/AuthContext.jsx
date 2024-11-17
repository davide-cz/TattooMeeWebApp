import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || null);
  const [username, setUsername] = useState(localStorage.getItem('username') || null);
  const [artistBookings, setArtistBookings] = useState([]);

  // Funzione per fare il login e salvare name, id, token
  const login = ({ token, id, username }) => {
    setAuthToken(token);
    setUserId(id);
    setUsername(name);

    localStorage.setItem('token', token);
    localStorage.setItem('userId', id);
    localStorage.setItem('username', username);
  };

  // Funzione per fare logout
  const logout = () => {
    setAuthToken(null);
    setUserId(null);
    setUsername(null);

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    setArtistBookings([]);
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        userId,
        username,
        login,
        logout,
        artistBookings,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
