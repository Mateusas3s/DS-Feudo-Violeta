import React from "react";

import Interface from './Interface/index'
import Feudo from './Feudo/index';
import Perfil from './Perfil/index';
import MenuTarefas from './MenuTarefas/index';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

export default function UserMenu(){

    return(
        <Tab.Navigator>
            <Tab.Screen name = "Interface" component={Interface} options={{headerShown: false}}/>
            <Tab.Screen name = "Feudo" component={Feudo} options={{headerShown: false}}/>
            <Tab.Screen name = "Tarefas" component={MenuTarefas} options={{headerShown: false}}/>
            <Tab.Screen name = "Perfil" component={Perfil} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
