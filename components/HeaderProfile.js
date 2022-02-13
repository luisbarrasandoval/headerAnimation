import { Text, View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

import React from "react";
import useHeaderProfileAnimation from "../hooks/useHeaderProfileAnimation";

const HeaderProfile = ({ scrollY }) => {
  
  const { opacity, buttons } = useHeaderProfileAnimation({
    scrollY,
    cbuttons: 4,
    height: 130,
  });

  return (
    <Animated.View style={[styles.perfil, opacity]}>
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
            buttons.a,
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
            buttons.b,
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
            buttons.c,
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
            buttons.d,
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
