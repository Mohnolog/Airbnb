import { StyleSheet, Pressable, Text } from "react-native";

import { router } from "expo-router";

import colors from "../assets/style/colors";

export const RedirectButton = ({ text, screen }) => {
  return (
    <Pressable
      onPress={() => {
        // naviguer vers ...
        router.push(screen);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.grey,
  },
});
