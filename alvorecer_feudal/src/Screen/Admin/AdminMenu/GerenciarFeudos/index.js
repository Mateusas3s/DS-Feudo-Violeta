import React from 'react';

import ListaFeudos from './ListaFeudos/index';
import MembrosFeudo from './MembrosFeudo/index';
import DetalhesFeudos from './DetalhesFeudos/index';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function MenuFeudos(){ 

  return (
      <Stack.Navigator>
        <Stack.Screen name='ListaFeudos' component={ListaFeudos} options={{headerShown: false}}/>
        <Stack.Screen name='MembrosFeudo' component={MembrosFeudo} options={{headerShown: false}}/> 
        <Stack.Screen name='DetalhesFeudos' component={DetalhesFeudos} options={{headerShown: false}}/>  
      </Stack.Navigator>
  );
}
