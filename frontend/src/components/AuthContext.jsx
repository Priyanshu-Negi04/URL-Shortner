import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Remove frontend credential checking - now done via backend API
  const login = async (username, password) => {
    try {
      const response = await fetch('https://url-shortner-backend-c46p.onrender.com/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Store credentials for Basic Auth requests to /urls endpoint
        localStorage.setItem('adminCredentials', btoa(`${username}:${password}`));
        setIsAuthenticated(true);
        return { success: true };
      } else {
        return { success: false, message: data.message };
      }
    } catch (err) {
      return { success: false, message: 'Server error. Please try again.' };
    }
  };

  const logout = () => {
    localStorage.removeItem('adminCredentials');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
