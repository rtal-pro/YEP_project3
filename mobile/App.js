/**
 * @format
 */

import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './sources/Views/Welcome/Welcome';
import Code from './sources/Views/Code/Code';
import Controller from './sources/Views/Controller/Controller';
import Airpong from './sources/Views/Airpong/Airpong';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Code" component={Code} options={{ headerShown: false }} />
        <Stack.Screen name="Controller" component={Controller} options={{ headerShown: false }} />
        <Stack.Screen name="Airpong" component={Airpong} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
