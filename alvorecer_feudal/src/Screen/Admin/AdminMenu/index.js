import React from "react";

import InterfaceAdmin from './InterfaceAdmin/index'
import GerenciarFeudos from './GerenciarFeudos/index'
import ConstrutoresReino from './ConstrutoresReino/index'
import AdministrarRanking from './AdministrarRanking/index'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function AdminMenu(){

    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
  
                if (route.name === 'Interface') {
                    iconName = focused ? 'home' : 'home';
              } else if (route.name === 'Feudos') {
                    iconName = focused ? 'castle' : 'castle';
              } else if (route.name === 'Construtores'){
                    iconName = focused ? 'account-group' : 'account-group'
              } else if (route.name === 'Ranking'){
                    iconName = focused ? 'view-list' : 'view-list'
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#8425E3',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Tab.Screen name = "Interface" component={InterfaceAdmin} options={{headerShown: false}}/>
            <Tab.Screen name = "Feudos" component={GerenciarFeudos} options={{headerShown: false}}/>
            <Tab.Screen name = "Construtores" component={ConstrutoresReino} options={{headerShown: false}}/>
            <Tab.Screen name = "Ranking" component={AdministrarRanking} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}