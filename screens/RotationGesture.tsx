import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const RotationGesture = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Text>Rotation gesture</Text>
      </View>
    </>
  );
};

export default RotationGesture;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
