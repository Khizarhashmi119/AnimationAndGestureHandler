import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const PinchGesture = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Text>Pinch gesture</Text>
      </View>
    </>
  );
};

export default PinchGesture;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
