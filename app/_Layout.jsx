import { Slot, useRouter } from "expo-router";
import { AuthContext, AuthProvider } from "../contexts/AuthContext";
import React, { useContext, useEffect } from "react";

// Composant qui gère la navigation basée sur l'état d'authentification
function NavigationWrapper() {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // useEffect pour réagir aux changements de l'état utilisateur
  useEffect(() => {
    if (user) {
      router.replace("/home"); // Redirection vers la partie authentifiée
    } else {
      router.replace("/"); // Redirection vers la page de connexion
    }
  }, [user]); // Dépendance à user pour déclencher l'effet

  return <Slot />; // Slot est utilisé pour le rendu des routes
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <NavigationWrapper />
    </AuthProvider>
  );
}

// import { Slot } from "expo-router";
// import { UserProvider } from "../contexts/UserContext";
// import { router } from "expo-router";

// // besoin de user Context et de notre context créé
// import { useContext, useEffect } from "react";
// import { UserContext } from "../contexts/UserContext";

// export default RootLayout = () => {
//   return (
//     <UserProvider>
//       <SlotContainer />
//     </UserProvider>
//   );
// };

// const SlotContainer = () => {
//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     if (user) {
//       router.replace("/home");
//     }
//     if (!user) {
//       router.replace("/");
//     }
//   }, [user]);

//   return <Slot />;
// };
