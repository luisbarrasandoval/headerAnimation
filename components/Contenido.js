import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import HeaderProfile from "./HeaderProfile";

export default function Contenido({ onScroll, style, ScrollY }) {
  return (
    <Animated.ScrollView
      style={[styles.contenido, style]}
      showsVerticalScrollIndicator={false}
      onScroll={onScroll}
      scrollEventThrottle={16}
    >
      <HeaderProfile ScrollY={ScrollY} />

      {Array(20)
        .fill(0)
        .map((_, i) => {
          // const style = useAnimatedStyle(() => {
          //   const scale = interpolate(
          //     ScrollY.value,
          //     [70, 100],
          //     [1, 0],
          //     Extrapolate.CLAMP
          //   );

          //   return {
          //     transform: [{ scale: scale }],
          //   };
          // });

          return (
            <View style={styles.info} key={i}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 5,
                    backgroundColor: "#ED4C67",
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    Luis Barra
                  </Text>
                  <Text>Hola!</Text>
                </View>
              </View>
            </View>
          );
        })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  info: {
    padding: 20,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
  },

  contenido: {
    width: "100%",
  },

  headerTitle: {
    fontSize: 22,
    color: "#222",
    fontWeight: "bold",
  },
});
