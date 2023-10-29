import React, { useState } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const PanGesture = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const height = useSharedValue(300);
  const savedHeight = useSharedValue(300);

  const modalStyles = useAnimatedStyle(() => ({
    height: height.value,
  }));

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      height.value = savedHeight.value - event.translationY;
    })
    .onEnd(() => {
      savedHeight.value = height.value;
    });

  const handlePressClickMe = () => {
    setIsModalOpen(true);
  };
  const handlePressClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
        <Button color="#7f7fff" title="Click me" onPress={handlePressClickMe} />
        {isModalOpen && (
          <View style={[StyleSheet.absoluteFill, styles.modalContainer]}>
            <Animated.View style={[styles.modal, modalStyles]}>
              <GestureDetector gesture={Gesture.Race(panGesture)}>
                <View style={styles.handlerContainer}>
                  <View style={styles.handler} />
                </View>
              </GestureDetector>
              <View style={styles.content}>
                <Text style={styles.modalTitle}>Hello World</Text>
                <Button
                  color="#7777e2"
                  title="Close"
                  onPress={handlePressClose}
                />
              </View>
            </Animated.View>
          </View>
        )}
      </View>
    </>
  );
};

export default PanGesture;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    padding: 16,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    color: '#000',
    fontSize: 50,
    fontWeight: '900',
  },
  modalContainer: {
    backgroundColor: '#b3b3b390',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: '#7f7fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 100,
    width: '100%',
  },
  handlerContainer: {
    alignItems: 'center',
    padding: 16,
  },
  handler: {
    backgroundColor: '#c9c9c9',
    borderRadius: 10,
    height: 5,
    width: '15%',
  },
  content: {
    alignItems: 'center',
    flex: 1,
    padding: 16,
    width: '100%',
  },
  modalTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    marginBottom: 16,
  },
});
