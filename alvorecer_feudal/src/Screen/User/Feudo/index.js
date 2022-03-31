import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {getDoc, where, getFirestore} from 'firebase/firestore';

export default function Feudo(){

    const bd = getFirestore();

    const [feudo, setFeudo] = useState('Azul Escuro Violeta')
    const [duque, setDuque] = useState('Ciclano')
    const [projeto, setProjeto] = useState('App')
    const [tarefas, setTarefas] = useState(50)
    const [tarefasConcluidas, setTarefasConcluidas] = useState(27)
    
    return(
    <View style = {styles.container}>

        <View style = {styles.textContainer}>
            <Text style = {styles.text}>Feudo</Text>
            <Text style = {styles.text}>{feudo}</Text>
        </View>

        <View style = {styles.textContainer}>
            <Text style = {styles.text}>Duque</Text>
            <Text style = {styles.text}>{duque}</Text>
        </View>

        <View style = {styles.textContainer}>
            <Text style = {styles.text}>Projeto</Text>
            <Text style = {styles.text}>{projeto}</Text>
        </View>

        <View style = {styles.containerAlfa}>

            <View style = {styles.numContainer}>
                <Text style = {styles.text}>Tarefas</Text>
                <Text style = {styles.text}>{tarefas}</Text>
            </View>

            <View style = {styles.numContainer}>
                <Text style = {styles.text}>Concluidas</Text>
                <Text style = {styles.text}>{tarefasConcluidas}</Text>
            </View>

        </View>
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

    containerAlfa: {
        flexDirection: 'row',
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center', 
        
    },

    numContainer: {
        height: 120,
        width: 155,
        borderRadius: 20,
        marginTop: 20,
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },

    textContainer: {
        height: 120,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },
    
    text: {
        fontSize: 30,
        color: '#484848',
        margin: 10,

    },
})