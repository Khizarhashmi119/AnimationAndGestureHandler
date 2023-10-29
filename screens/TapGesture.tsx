import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const TapGesture = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Text>Tap gesture</Text>
      </View>
    </>
  );
};

export default TapGesture;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
