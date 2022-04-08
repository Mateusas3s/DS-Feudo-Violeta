import React from 'react';

import ListaFeudos from './ListaFeudos/index';
import DetalhesFeudos from './DetalhesFeudos/index';
import CriarFeudo from './CriarFeudo/index'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function MenuFeudos(){ 

  return (
      <Stack.Navigator>
        <Stack.Screen name='Lista' component={ListaFeudos} options={{headerShown: false}}/>
        <Stack.Screen name='Detalhes' component={DetalhesFeudos} options={{headerShown: false}}/>
        <Stack.Screen name='Criar' component={CriarFeudo} options={{headerShown: false}}/>    
      </Stack.Navigator>
  );
}
