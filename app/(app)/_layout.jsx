import { Tabs } from "expo-router";

export default AppLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen name="map" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};
