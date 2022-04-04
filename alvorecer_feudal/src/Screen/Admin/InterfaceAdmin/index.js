import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function InterfaceAdmin({navigation}){
    return(
    <View style = {styles.container}>
        
        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Construtores")}>
            <Text>Construtores do Reino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Feudos")}>
            <Text>Gerenciar Feudos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Tarefas")}>
            <Text>Gerenciar Tarefas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Ranking")}>
            <Text>Ranking Feudal</Text>
        </TouchableOpacity>

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

    button: {
        height: 100,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15

    },
})