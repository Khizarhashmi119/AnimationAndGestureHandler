import React from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import HighPriestess from '../assets/high-priestess.png';
import Temperance from '../assets/temperance.png';

// const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Playground = (): JSX.Element => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const followX = useDerivedValue(() => withSpring(offsetX.value));
  const followY = useDerivedValue(() => withSpring(offsetY.value));

  // const boxWidth = useSharedValue(100);

  // const radius = useSharedValue(40);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      offsetX.value = event.translationX + startX.value;
      offsetY.value = event.translationY + startY.value;
    })
    .onEnd(() => {
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);

      // startX.value = offsetX.value;
      // startY.value = offsetY.value;
    });

  // const handlePressClickMe = () =>
  //   (boxWidth.value = withSpring(boxWidth.value + 50));

  // const handlePressReset = () => (boxWidth.value = withSpring(100));

  // const handlePressClickMe = () =>
  //   (radius.value = withSpring(radius.value + 20));

  // const handlePressReset = () => (radius.value = withSpring(40));

  const temperanceImageContainerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offsetX.value }, { translateY: offsetY.value }],
  }));

  const highPriestessImageContainerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: followX.value }, { translateY: followY.value }],
  }));

  // const boxStyles = useAnimatedStyle(() => ({
  //   width: boxWidth.value,
  // }));

  // const circleAnimatedProps = useAnimatedProps(() => ({
  //   r: radius.value,
  // }));

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Animated.View
          style={[styles.imageContainer, highPriestessImageContainerStyle]}
        >
          <Image style={styles.image} source={HighPriestess} />
        </Animated.View>
        <GestureDetector gesture={panGesture}>
          <Animated.View
            style={[styles.imageContainer, temperanceImageContainerStyle]}
          >
            <Image style={styles.image} source={Temperance} />
          </Animated.View>
        </GestureDetector>
        {/* <Animated.View style={[styles.box, boxStyles]} /> */}
        {/* <Svg style={styles.svgContainer}>
          <AnimatedCircle
            cx={200}
            cy={125}
            fill="#7f7fff"
            animatedProps={circleAnimatedProps}
          />
        </Svg> */}
        {/* <View style={styles.buttonsContainer}>
          <Button
            color="#7f7fff"
            title="click me"
            onPress={handlePressClickMe}
          />
          <Button color="#7f7fff" title="Reset" onPress={handlePressReset} />
        </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    backgroundColor: '#dfc9c9',
    borderRadius: 8,
    elevation: 5,
    padding: 16,
    position: 'absolute',
  },
  image: {
    height: 600,
    width: 300,
  },
  box: {
    backgroundColor: '#7f7fff',
    borderRadius: 10,
    height: 100,
    marginBottom: 20,
  },
  svgContainer: {
    height: 250,
    width: '100%',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default Playground;
