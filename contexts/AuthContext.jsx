import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Utilisation de useState pour gérer l'état de l'utilisateur
  const [user, setUser] = useState(null);

  // est-ce que j'ai qq chose dans l'async ? si oui setUser(cette chose)

  const login = (user) => {
    console.log(`Utilisateur connecté`);
    // j'ajoute a lasync mon user/ ou simplement ton token
    setUser(user); // Mise à jour de l'état avec le nom d'utilisateur
  };

  const logout = () => {
    console.log("Déconnexion réussie");
    // je supprime de lasync mon user/ ou simplement ton token
    setUser(null); // Réinitialisation de l'état utilisateur
  };

  // Fournit le Context à tous les composants enfants
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
