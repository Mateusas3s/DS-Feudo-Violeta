import React from "react";

import Interface from './Interface/index'
import Feudo from './Feudo/index';
import Perfil from './Perfil/index';
import MenuTarefas from './MenuTarefas/index';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

export default function UserMenu(){

    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === 'Interface') {
                    iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Feudo') {
                    iconName = focused ? 'castle' : 'castle';
              } else if (route.name === 'Tarefas'){
                    iconName = focused ? 'clipboard-list' : 'clipboard-list'
              } else if (route.name === 'Perfil'){
                    iconName = focused ? 'account' : 'account'
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#8425E3',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name = "Interface" component={Interface} options={{headerShown: false}}/>
            <Tab.Screen name = "Feudo" component={Feudo} options={{headerShown: false}}/>
            <Tab.Screen name = "Tarefas" component={MenuTarefas} options={{headerShown: false}}/>
            <Tab.Screen name = "Perfil" component={Perfil} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
