import React from "react";

import PatacasFeudos from "./PatacasFeudos";
import PatacasCavaleiros from "./PatacasCavaleiros";

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function AdministrarRanking(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='PatacasFeudos' component={PatacasFeudos} options={{headerShown: false}}/>
            <Stack.Screen name='PatacasCavaleiros' component={PatacasCavaleiros} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}