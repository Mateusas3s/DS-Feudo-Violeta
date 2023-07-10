import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Screen/Login';

//admin
import AdminMenu from './src/Screen/Admin/AdminMenu/index';

//usuarios comuns
import UserMenu from './src/Screen/User/UserMenu/index';

const Stack = createStackNavigator()

export default function App(){ 

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: 'Alvorecer Feudal',
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle:{
            backgroundColor: '#484848',
          }
        }}
      >

        <Stack.Screen name = 'MenuAdmin' component={AdminMenu} options={{headerLeft: ()=> null}}/>        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
