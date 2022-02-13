import {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

export default function useHeader({
  maxHeight,
  minHeight
}) {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });
  
  const styles = {}

  styles.header = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [0, maxHeight - minHeight],
      [maxHeight, minHeight],
      Extrapolate.CLAMP
    );

    const zIndex = interpolate(
      scrollY.value,
      [0, 100, 125, 140, 150],
      [0, 0, 0, 0, 1]
    );

    return {
      height: height,
      elevation: zIndex,
      zIndex: zIndex,
    };
  });

   styles.scroll = useAnimatedStyle(() => {
    const paddingTop = interpolate(
      scrollY.value,
      [0, maxHeight - minHeight],
      [100, minHeight],
      Extrapolate.CLAMP
    );

    return {
      paddingTop: paddingTop,
    };
  });


  return {
    scrollY,
    scrollHandler,
    styles
  };
}