import React from 'react';

import Lista from './Lista';
import Detalhes from './Detalhes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function MenuTarefas(){ 

  return (
      <Stack.Navigator>
        <Stack.Screen name='Lista' component={Lista} options={{headerShown: false}}/>
        <Stack.Screen name='Detalhes' component={Detalhes} options={{headerShown: false}}/>    
      </Stack.Navigator>
  );
}
