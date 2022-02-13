import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Contenido from "./components/Contenido";
import Header from "./components/Header";
import HeaderProfile from "./components/HeaderProfile";
import useHeader from "./hooks/useHeader";

export default function App() {
  const { scrollY, scrollHandler, styles } = useHeader({
    maxHeight: 150,
    minHeight: 80
  });

  return (
    <View style={{ flex: 1 }}>
      <StatusBar auto />
      <Header style={styles.header} />
      <Contenido
        onScroll={scrollHandler}
        style={styles.scroll}
        first={<HeaderProfile scrollY={scrollY} />}
      />
    </View>
  );
}
