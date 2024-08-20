import { StyleSheet, TextInput } from "react-native";

import colors from "../assets/style/colors.jsx";

export const Input = ({ state, setState, placeholder, secure }) => {
  return (
    <TextInput
      style={styles.textInput}
      secureTextEntry={secure}
      placeholder={placeholder}
      value={state}
      onChangeText={(text) => {
        setState(text);
      }}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderBottomColor: colors.lightPink,
    borderBottomWidth: 2,
    width: "80%",
    fontSize: 16,
  },
});
