import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function ProfileScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Ceci est un composant React Native !</Text>
      <Button
        title="log out"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}
