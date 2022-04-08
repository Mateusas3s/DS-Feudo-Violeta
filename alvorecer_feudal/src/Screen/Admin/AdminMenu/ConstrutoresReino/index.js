import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import ListaConstrutores from './ListaConstrutores/index';
import CadastroConstrutor from './CadastroConstrutor/index';
import DetalhesConstrutor from './DetalhesConstrutor/index';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function GerenciarConstrutores(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='ListaConstrutor' component={ListaConstrutores} options={{headerShown: false}}/>
            <Stack.Screen name='DetalhesConstrutor' component={DetalhesConstrutor} options={{headerShown: false}}/>
            <Stack.Screen name='CadastroConstrutor' component={CadastroConstrutor} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}