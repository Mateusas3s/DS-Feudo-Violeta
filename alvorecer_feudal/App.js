import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/Screen/Login';

//admin
import MenuAdmin from './src/Screen/Admin/MenuAdmin';

//usuarios comuns
import Menu from './src/Screen/User/Menu';
import userFeudo from './src/Screen/User/Feudo/index';
import userTarefas from './src/Screen/User/Tarefas/index';
import userPerfil from './src/Screen/User/Perfil/index';
import userRanking from './src/Screen/User/Ranking/index';

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

        <Stack.Screen name = 'Login' component={Login} options={{headerShown: false}}/>

        <Stack.Screen name = 'Menu' component={Menu} options={{}}/>
        
          <Stack.Screen name='userFeudo' component={userFeudo}/>

          <Stack.Screen name='userPerfil' component={userPerfil}/>

          <Stack.Screen name='userTarefas' component={userTarefas}/>

          <Stack.Screen name='userRanking' component={userRanking}/>
        
        <Stack.Screen name = 'MenuAdmin' component={MenuAdmin}/>        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
