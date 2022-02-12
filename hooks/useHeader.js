import {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withSpring,
} from "react-native-reanimated";

export default function useHeader(maxHeight, minHeight) {
  const headerHeight = useSharedValue(0);
  const handler = useAnimatedScrollHandler((event) => {
    headerHeight.value = event.contentOffset.y;
  });

  const estiloHeader = useAnimatedStyle(() => {
    const height = interpolate(
      headerHeight.value,
      [0, maxHeight - minHeight],
      [maxHeight, minHeight],
      Extrapolate.CLAMP
    );

    const zIndex = interpolate(
      headerHeight.value,
      [0, 100, 125, 140, 150],
      [0, 0, 0, 0, 1]
    );

    return {
      height: height,
      elevation: zIndex,
      zIndex: zIndex,
    };
  });

  const estiloScroll = useAnimatedStyle(() => {
    const paddingTop = interpolate(
      headerHeight.value,
      [0, maxHeight - minHeight],
      [100, minHeight],
      Extrapolate.CLAMP
    );

    return {
      paddingTop: paddingTop,
    };
  });

  return { headerHeight, handler, estiloHeader, estiloScroll };
}
