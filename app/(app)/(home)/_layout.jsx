import { Stack } from "expo-router";
import { Logo } from "../../../components/Index";

export default Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => {
          return <Logo small />;
        },
        headerBackTitleVisible: false,
        headerTintColor: "grey",
      }}
    >
      <Stack.Screen name="home" />
      <Stack.Screen name="room" />
    </Stack>
  );
};
