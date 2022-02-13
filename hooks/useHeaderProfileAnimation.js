import { Dimensions } from "react-native";
import { interpolate, useAnimatedStyle, Extrapolate } from "react-native-reanimated";

//cbuttons: cantidad de botones
export default function useHeaderProfileAnimation({scrollY, cbuttons, height }) {

    const x = Dimensions.get("screen").width / cbuttons;

    const opacity = useAnimatedStyle(() => {
        const x = interpolate(scrollY.value, [0, height], [1, 0]);
        return {
          opacity: x,
        };
      });
    
      const buttons = {}

      buttons.a = useAnimatedStyle(() => {
        const right = interpolate(scrollY.value, [0, height], [0, x * 3]);
        return { transform: [{ translateX: right }] };
      });
      
      buttons.b = useAnimatedStyle(() => {
        const right = interpolate(scrollY.value, [0, height], [0, x * 2]);
        return { transform: [{ translateX: right }] };
      });
     
      buttons.c = useAnimatedStyle(() => {
        const right = interpolate(scrollY.value, [0, height], [0, x]);
        return { transform: [{ translateX: right }] };
      });
      
      buttons.d = useAnimatedStyle(() => {
        const right = interpolate(scrollY.value, [0, height], [0, x]);
        return { transform: [{ translateX: 0 }] };
      });

    return { opacity,  buttons}
      
}