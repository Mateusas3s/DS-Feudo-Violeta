import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import DescricaoFeudo from "./DescriçãoFeudo";
import Membros from "./Membros";

const Stack = createStackNavigator()

export default function Feudo(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='DescricaoFeudo' component={DescricaoFeudo} options={{headerShown: false}}/>
            <Stack.Screen name='Membros' component={Membros} options={{headerShown: false}}/>
        </Stack.Navigator>
    )}