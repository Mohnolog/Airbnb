import { Slot } from "expo-router";
import { UserProvider } from "../contexts/UserContext";
import { router } from "expo-router";

// besoin de user Context et de notre context créé
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

export default RootLayout = () => {
  return (
    <UserProvider>
      <SlotContainer />
    </UserProvider>
  );
};

const SlotContainer = () => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      router.replace("/home");
    }
    if (!user) {
      router.replace("/");
    }
  }, [user]);

  return <Slot />;
};
