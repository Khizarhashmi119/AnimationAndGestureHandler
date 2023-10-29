import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TAppParamsList } from '../types/AppParamsList';
import { SCREENS } from './constants';

const Home = () => {
  const navigate = useNavigation<NativeStackNavigationProp<TAppParamsList>>();

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.buttons}
          data={SCREENS}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                android_ripple={{
                  color: '#545e88',
                }}
                onPress={() => navigate.navigate(item.name)}
              >
                <Text style={styles.buttonText}>{item.text}</Text>
              </Pressable>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e0fcad',
    flex: 1,
    padding: 16,
  },
  buttons: {
    justifyContent: 'center',
    flex: 1,
    gap: 16,
  },
  buttonContainer: {
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#141e46',
    fontWeight: '700',
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#e8f1d6',
  },
});
