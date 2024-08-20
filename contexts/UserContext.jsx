import React, { createContext, useState } from "react";

// Création du Context
export const UserContext = createContext();

// Création du Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // le mieux est de stocker unqiuement l'id et le token de l'utilisateur

  // Fonction pour simuler une connexion
  const login = (username) => {
    setUser({ username });
    console.log(`Utilisateur connecté`);
  };

  // Fonction pour simuler une déconnexion
  const logout = () => {
    setUser(null);
    console.log("Utilisateur déconnecté");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
