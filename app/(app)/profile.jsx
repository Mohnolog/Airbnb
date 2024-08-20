import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function ProfileScreen() {
  const { logout } = useContext(UserContext);

  return (
    <View>
      <Text>Ceci est un composant React Native !</Text>
      <Button
        title="logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}
