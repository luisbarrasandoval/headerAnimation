import { StatusBar } from "expo-status-bar";
import { TextInput, Button, View, KeyboardAvoidingView } from "react-native";

import Contenido from "./components/Contenido";
import Header from "./components/Header";
import useHeader from "./hooks/useHeader";

export default function App() {
  const { headerHeight, handler, estiloHeader, estiloScroll } = useHeader(
    150,
    80
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar auto />
      <Header style={estiloHeader} />
      <Contenido
        onScroll={handler}
        style={estiloScroll}
        ScrollY={headerHeight}
      />
    </View>
  );
}
