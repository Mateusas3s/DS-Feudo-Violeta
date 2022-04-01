import React from "react";

import Interface from '../../User/Interface/index'
import Feudo from '../../User/Feudo/index';
import Perfil from '../../User/Perfil/index';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MenuTarefas from "../MenuTarefas";

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
