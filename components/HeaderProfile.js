import { Text, View, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import React from "react";

const HeaderProfile = ({ ScrollY }) => {
  const _style = useAnimatedStyle(() => {
    const x = interpolate(ScrollY.value, [0, 150], [1, 0]);

    return {
      opacity: x,
    };
  });

  const styleLeftA = useAnimatedStyle(() => {
    const right = interpolate(ScrollY.value, [0, 150], [0, 82 * 3]);
    return { transform: [{ translateX: right }] };
  });
  const styleLeftB = useAnimatedStyle(() => {
    const right = interpolate(ScrollY.value, [0, 150], [0, 82 * 2]);
    return { transform: [{ translateX: right }] };
  });
  const styleLeftC = useAnimatedStyle(() => {
    const right = interpolate(ScrollY.value, [0, 150], [0, 82]);
    return { transform: [{ translateX: right }] };
  });
  const styleLeftD = useAnimatedStyle(() => {
    const right = interpolate(ScrollY.value, [0, 150], [0, 82]);
    return { transform: [{ translateX: 0 }] };
  });

  return (
    <Animated.View style={[styles.perfil, _style]}>
      <View style={styles.avatar} />
      <Text style={styles.headerTitle}>@Luis Barra</Text>
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          marginVertical: 10,
          width: "100%",
        }}
      >
        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              borderRadius: 5,
              backgroundColor: "#1289A7",
            },
            styleLeftA,
          ]}
        />

        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              borderRadius: 5,
              backgroundColor: "#009432",
            },
            styleLeftB,
          ]}
        />

        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              borderRadius: 5,
              backgroundColor: "#EE5A24",
            },
            styleLeftC,
          ]}
        />

        <Animated.View
          style={[
            {
              width: 30,
              height: 30,
              borderRadius: 5,
              backgroundColor: "#833471",
            },
            styleLeftD,
          ]}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 2,
    backgroundColor: "#9980FA",
    borderRadius: 5,
  },

  perfil: {
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 22,
    color: "#222",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default HeaderProfile;
