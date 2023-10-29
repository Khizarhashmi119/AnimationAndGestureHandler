import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Home from './screens/Home';

import { SCREENS } from './screens/constants';
import { TAppParamsList } from './types/AppParamsList';

const Stack = createNativeStackNavigator<TAppParamsList>();

const App = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HOME"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="HOME" component={Home} />
          {SCREENS.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
