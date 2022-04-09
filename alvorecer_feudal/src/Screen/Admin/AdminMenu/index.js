import React from "react";

<<<<<<< HEAD:alvorecer_feudal/src/Screen/Navigators/AdminMenu/index.js
import InterfaceAdmin from '../../Admin/InterfaceAdmin/index'
import GerenciarFeudos from '../../Admin/GerenciarFeudos/index'
import ConstrutoresReino from './GerenciarConstrutores/ConstrutoresReino/index'
import GerenciarTarefas from '../../Admin/GerenciarTarefas/index'
import AdministrarRanking from '../../Admin/AdministrarRanking/index'
=======
import InterfaceAdmin from './InterfaceAdmin/index'
import GerenciarFeudos from './GerenciarFeudos/index'
import ConstrutoresReino from './ConstrutoresReino/index'
import GerenciarTarefas from './GerenciarTarefas/index'
import AdministrarRanking from './AdministrarRanking/index'
>>>>>>> 53671d0df71988b79043fc164a4487973f0ef21c:alvorecer_feudal/src/Screen/Admin/AdminMenu/index.js

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