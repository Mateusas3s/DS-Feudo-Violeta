import React from "react";
import {View, Image, Text} from 'react-native';

export default function Menu( {route} ){
    return(
    <View>
        <Text>Login: {route.params?.username}</Text>
        <Text>Senha: {route.params?.senha}</Text>
    </View>
    )
}