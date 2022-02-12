import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

export default function Header({ style }) {
  return <Animated.View style={[styles.header, style]}></Animated.View>;
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFC312",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  avatar: {
    width: 100,
    height: 100,
    borderWidth: 2,
    backgroundColor: "#9980FA",
    borderRadius: 5,
  },

  perfil: {
    bottom: -100,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
