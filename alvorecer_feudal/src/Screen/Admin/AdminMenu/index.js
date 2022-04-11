import React from "react";

import InterfaceAdmin from './InterfaceAdmin/index'
import GerenciarFeudos from './GerenciarFeudos/index'
import ConstrutoresReino from './ConstrutoresReino/index'
import GerenciarTarefas from './GerenciarTarefas/index'
import AdministrarRanking from './AdministrarRanking/index'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

export default function AdminMenu(){

    return(
        <Tab.Navigator>
            <Tab.Screen name = "Interface" component={InterfaceAdmin} options={{headerShown: false}}/>
            <Tab.Screen name = "Feudos" component={GerenciarFeudos} options={{headerShown: false}}/>
            <Tab.Screen name = "Construtores" component={ConstrutoresReino} options={{headerShown: false}}/>
            <Tab.Screen name = "Tarefas" component={GerenciarTarefas} options={{headerShown: false}}/>
            <Tab.Screen name = "Ranking" component={AdministrarRanking} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}