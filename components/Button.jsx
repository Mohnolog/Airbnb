import { StyleSheet, Pressable, Text, useWindowDimensions } from "react-native";

// mes couleurs
import colors from "../assets/style/colors.jsx";

export const Button = ({ text, onPressFun }) => {
  // const styles = useStyles();

  return (
    <Pressable onPress={onPressFun} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.pink,
    borderWidth: 3,
    borderRadius: 60,
  },
  text: {
    color: colors.grey,
    fontWeight: "500",
    fontSize: 18,
  },
});

// Cette fonction est appeler dans la fonction qui retourne le composant permettant ainsi l'utilisation du hook 'useWindowDimensions'
// const useStyles = () => {
//   const { height, width } = useWindowDimensions();

//   const stylesObj = StyleSheet.create({
//     button: {
//       height: 60,
//       width: "50%",
//       alignItems: "center",
//       justifyContent: "center",
//       borderColor: colors.pink,
//       borderWidth: 3,
//       borderRadius: 60,
//     },
//     text: {
//       color: colors.grey,
//       fontWeight: "500",
//       fontSize: 18,
//     },
//   });

//   return stylesObj;
// };
