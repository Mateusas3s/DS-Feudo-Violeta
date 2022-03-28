import React from "react";

import InterfaceAdmin from '../../Admin/InterfaceAdmin/index'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

export default function UserMenu(){

    return(
        <Tab.Navigator>
            <Tab.Screen name = "Interface" component={InterfaceAdmin} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}