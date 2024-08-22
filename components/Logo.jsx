import { Image, StyleSheet, View } from "react-native";
import logo from "../assets/logo.png";

export const Logo = ({ small }) => {
  return (
    <View>
      <Image
        source={logo}
        style={small ? styles.smallLogo : styles.mainLogo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainLogo: {
    height: 100,
    width: 100,
  },
  smallLogo: {
    height: 30,
    width: 30,
  },
});
