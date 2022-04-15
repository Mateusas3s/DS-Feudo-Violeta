import React from 'react';

import ListaTarefas from './ListaTarefas/index';
import DetalhesTarefa from './DetalhesTarefa/index';
import CriarTarefa from './CriarTarefa/index';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function MenuTarefas(){ 


  return (
      <Stack.Navigator>
        <Stack.Screen name='ListaTarefas' component={ListaTarefas} options={{headerShown: false}}/>
        <Stack.Screen name='DetalhesTarefa' component={DetalhesTarefa} options={{headerShown: false}}/>
        <Stack.Screen name='CriarTarefa' component={CriarTarefa} options={{headerShown: false}}/>    
      </Stack.Navigator>
  );
}
