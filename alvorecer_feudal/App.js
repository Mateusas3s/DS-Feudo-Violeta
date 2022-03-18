import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screen/Login';
import Menu from './src/Screen/Menu';

const Stack = createNativeStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Login' component={Login}/>
        <Stack.Screen name = 'Menu' component={Menu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
