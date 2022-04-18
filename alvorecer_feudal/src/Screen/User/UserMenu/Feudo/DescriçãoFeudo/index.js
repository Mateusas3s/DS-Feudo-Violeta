import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function DescricaoFeudo({navigation}){

    const [feudo, setFeudo] = useState('Azul Escuro Violeta')
    const [duque, setDuque] = useState('Mateus Augusto')
    const [nomeProjeto, setnomeProjeto] = useState('App de auxílio à gamificação')
    const [descProjeto, setDescProjeto] = useState('Um app para indicar aos integrantes da disciplina as patacas, rank, feudo, projeto, tarefas, e integrantes do feudo, além de proporcionar auxilio ao Monarca')
    
    return(
        <View style={styles.container}>
    <ScrollView >

        <View style = {styles.textContainer}>
            <Text style = {styles.text}>Feudo:</Text>
            <Text style = {styles.text}>{feudo}</Text>
        </View>

        <View style = {styles.textContainer}>
            <Text style = {styles.text}>Duque:</Text>
            <Text style = {styles.text}>{duque}</Text>
        </View>

        <View style = {styles.textContainer}>
            <Text style = {styles.text}>Projeto:</Text>
            <Text style = {styles.text}>{nomeProjeto}</Text>
        </View>

        <View style = {styles.bigTextContainer}>
            <Text style = {styles.textDesc}>Descrição:</Text>
            <Text style = {styles.textDesc}>{descProjeto}</Text>
        </View>

        <TouchableOpacity 
            style = {styles.button}
            onPress = {() => navigation.navigate('Membros')}
        >
            <Text style={styles.text}>Membros</Text>
        </TouchableOpacity>
    </ScrollView>
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

    textContainer: {
        height: 90,
        width: 340,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },

    bigTextContainer: {
        height: 175,
        width: 340,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },
    
    text: {
        fontSize: 25,
        color: '#484848',
        marginBottom: 5,

    },

    textDesc: {
        fontSize: 20,
        color: '#484848',
        marginBottom: 5,
        marginHorizontal: 20,

    },

    button: {
        height: 80,
        width: 340,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffd335',
    },
})