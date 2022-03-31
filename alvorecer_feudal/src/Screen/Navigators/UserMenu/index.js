import React from "react";

import Interface from '../../User/Interface/index'
import userFeudo from '../../User/Feudo/index';
import userTarefas from '../../User/Tarefas/index';
import userPerfil from '../../User/Perfil/index';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

export default function UserMenu(){

    return(
        <Tab.Navigator>
            <Tab.Screen name = "Interface" component={Interface} options={{headerShown: false}}/>
            <Tab.Screen name = "Feudo" component={userFeudo} options={{headerShown: false}}/>
            <Tab.Screen name = "Tarefas" component={userTarefas} options={{headerShown: false}}/>
            <Tab.Screen name = "Perfil" component={userPerfil} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}
