import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";

import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import Constants from "expo-constants";
import axios from "axios";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import colors from "../../assets/style/colors";

import { router } from "expo-router";

import {
  Logo,
  Title,
  Input,
  Button,
  RedirectButton,
} from "../../components/Index";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useContext(UserContext);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-bootcamp-api.herokuapp.com/api/airbnb/user/log_in",
        {
          email,
          password,
        }
      );

      console.log("test1");
      login(response.data);
      console.log("test2");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <SafeAreaView style={styles.mainView}>
        <Logo />
        <Title title={"Sign In"} />
        <Input state={email} setState={setEmail} placeholder={"email"} />
        <Input
          state={password}
          setState={setPassword}
          placeholder={"password"}
          secure
        />
        <Button text={"Sign in"} onPressFun={handleSubmit} />
        <RedirectButton text={"No account ? Register !"} screen={"/signup"} />
        {/* <Pressable
          onPress={() => {
            console.log(user);
          }}
        >
          <Text>log user</Text>
        </Pressable> */}
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

// Cette fonction est appeler dans la fonction qui retourne le composant permettant ainsi l'utilisation du hook 'useWindowDimensions'
// const useStyles = () => {
//   const { height, width } = useWindowDimensions();

//   const stylesObj = StyleSheet.create({
//     mainView: {
//       paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
//       backgroundColor: colors.bgColor,
//       alignItems: "center",
//       justifyContent: "space-around",
//       flex: 1,
//     },
//   });

//   return stylesObj;
// };
