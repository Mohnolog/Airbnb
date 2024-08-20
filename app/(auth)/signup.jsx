import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../assets/style/colors";

import {
  Logo,
  Title,
  Input,
  Button,
  RedirectButton,
  LargeInput,
} from "../../components/Index";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <SafeAreaView style={styles.mainView}>
        <Logo />
        <Title title={"Sign Up"} />
        <Input state={email} setState={setEmail} placeholder={"email"} />
        <Input
          state={username}
          setState={setUsername}
          placeholder={"username"}
        />
        <LargeInput
          state={description}
          setState={setDescription}
          placeholder={"describe yourself"}
        />
        <Input
          state={password}
          setState={setPassword}
          placeholder={"password"}
          secure
        />
        <Input
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"confirm password"}
          secure
        />
        <Button text={"Sign up"} onPressFun={() => {}} />
        <RedirectButton
          text={"Already have an account ? Login !"}
          screen={"/"}
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: Platform.OS === "android" && Constants.statusBarHeight,
    backgroundColor: colors.bgColor,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
});
