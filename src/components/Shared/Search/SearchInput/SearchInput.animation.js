// SearchInput.animation.js
import { Animated } from "react-native";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
// Si usas Expo, mejor:
// import { FontAwesome as AwesomeIcon } from "@expo/vector-icons";

export const AnimatedIcon = Animated.createAnimatedComponent(AwesomeIcon);

const animVal = new Animated.Value(0);

const arrowAnimation = {
  transform: [
    {
      translateX: animVal.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 5],
      }),
    },
  ],
};

const inputAnimationWidth = animVal.interpolate({
  inputRange: [0, 1],
  outputRange: ["100%", "90%"],
});

const inputAnimation = {
  transform: [
    {
      translateX: animVal.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0],
      }),
    },
  ],
};

const animateTransition = Animated.spring(animVal, {
  toValue: 1,
  useNativeDriver: false,
});

const animatedTransitionReset = Animated.spring(animVal, {
  toValue: 0,
  useNativeDriver: false,
});

export const searchAnimation = {
  arrow: arrowAnimation,
  input: inputAnimation,
  inputWidth: inputAnimationWidth,
  transition: animateTransition,
  transitionReset: animatedTransitionReset,
};
