import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Screen/Login';
import Menu from './src/Screen/User/Menu';
import MenuAdmin from './src/Screen/Admin/MenuAdmin';

const Stack = createStackNavigator()

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = 'Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name = 'Menu' component={Menu}/>
        <Stack.Screen name = 'MenuAdmin' component={MenuAdmin}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
