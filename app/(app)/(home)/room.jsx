import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function RoomScreen() {
  const { id } = useLocalSearchParams();

  console.log(id);

  return (
    <View>
      <Text>Ceci est un composant React Native !</Text>
      <Text>{id}</Text>
    </View>
  );
}
