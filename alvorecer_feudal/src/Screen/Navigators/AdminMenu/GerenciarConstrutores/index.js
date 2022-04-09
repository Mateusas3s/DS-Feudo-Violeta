import React from 'react';

import cadastroConstrutor from './cadastroConstrutor/index.js'
import ConstrutoresReino from './ConstrutoresReino/index.js'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function GerenciarConstrutores(){ 

  return (
      <Stack.Navigator>
        <Stack.Screen name='cadastroConstrutor' component={cadastroConstrutor} options={{headerShown: false}}/>
        <Stack.Screen name='ConstrutoresReino' component={ConstrutoresReino} options={{headerShown: false}}/>    
      </Stack.Navigator>
  );
}
