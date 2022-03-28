import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function GerenciarFeudos(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.tittle}>Gerenciar os Feudos</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    tittle: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 0,
    },
})