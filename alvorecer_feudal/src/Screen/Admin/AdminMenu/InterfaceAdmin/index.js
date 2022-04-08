import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function InterfaceAdmin({navigation}){

    const [quantCavaleiros, setQuantCavaleiros]= useState('80');
    const [quantFeudos, setQuantFeudos]= useState('8');
    const [quantTarefas, setQuantTarefas]= useState('20');



    return(
    <View style = {styles.container}>

        <Text style={styles.greeting}>Olá Monarca :)</Text>

            <View style={styles.containeralfa}>

                <View style={styles.containernumerico}>
                    <Text style={styles.text}>Quantidade de Cavaleiros</Text>
                    <Text style={styles.text}>{quantCavaleiros}</Text>
                </View>

                <View style={styles.containernumerico}>
                    <Text style={styles.text}>Quantidade de Feudos</Text>
                    <Text style={styles.text}>{quantFeudos}</Text>
                </View>

            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.text}>Existem {quantTarefas} tarefas em aberto</Text>
                
            </View>

        <TouchableOpacity style={styles.button}
            onPress = {() => navigation.navigate('Login')}>
            <Text style={styles.text}>Sair</Text>
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

    containeralfa: {
        flexDirection: 'row',
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center', 
        
    },

    textcontainer: {
        height: 150,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },

    containernumerico: {
        height: 150,
        width: 150,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
        
    },

    button: {
        height: 120,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15

    },

    text: {
        margin: 10,
        fontSize: 20,
        color: '#484848',
        alignItems: 'center', 
        justifyContent: 'center',

    },

    greeting: {
        margin: 20,
        fontSize: 30,
        color: '#fff'

    },
})