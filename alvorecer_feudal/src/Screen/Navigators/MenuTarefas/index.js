import React from 'react';

import Tarefas from './Tarefas';
import Detalhes from './Detalhes';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function MenuTarefas({navigation}){ 

  return (
      <Stack.Navigator>
        <Stack.Screen name='Tarefas' component={Tarefas} options={{headerShown: true}}/>
        <Stack.Screen name='Detalhes' component={Detalhes}/>    
      </Stack.Navigator>
  );
}
