import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const LongPressGesture = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <Text>Long press gesture</Text>
      </View>
    </>
  );
};

export default LongPressGesture;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
