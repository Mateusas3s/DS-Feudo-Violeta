import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView, TextInput} from 'react-native';

export default function CriarTarefa({navigation}){

    const[nomeTarefa, setNomeTarefa] = useState("");
    const[descricao, setDescricao] = useState("");
    const[estado, setEstado] = useState("Em Progresso");
    const[est, setEst] = useState(false);

    return(
    <SafeAreaView style = {styles.container}>
        <Text style ={styles.tittle}>Criar Tarefa</Text>
        <ScrollView contentContainerStyle = {styles.scrollContainer}>

            <TextInput 
                style = {styles.textContainer}
                placeholder = "Nome"
                onChangeText = {setNomeTarefa}
                value = {nomeTarefa}  
            
            />

            <TextInput 
                style = {styles.longTextContainer}
                multiline ={true}
                placeholder = "Descrição"
                onChangeText = {setDescricao}
                value = {descricao}

            />

            <TouchableOpacity
                style = {styles.button}
                onPress = {() => navigation.navigate('ListaTarefas')}
            >
                <Text style = {styles.text}>Confirmar</Text>
            </TouchableOpacity>

        </ScrollView>
    </SafeAreaView>    
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8425E3',
        justifyContent: 'center',
        alignItems: 'center'
        
    },

    scrollContainer: {
        marginTop: 50,
        width: 400,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        
    },

    textContainer: {
        height: 60,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        fontSize: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
        textAlign: 'center',
        alignItems: 'center', 
        
    },

    longTextContainer: {
        height: 200,
        width: 320,
        borderRadius: 20,
        marginTop: 30,
        fontSize: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        elevation: 15, 
        
    },
    
    text: {
        fontSize: 30,
        color: '#484848',
    },

    tittle: {
        fontSize: 40,
        color: '#fff',
        marginVertical: 10,
    },

    button: {
        height: 120,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
    },
})