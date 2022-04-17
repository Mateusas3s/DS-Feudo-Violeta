import React, { useState } from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil(){

    const [nome, setNome] = useState('Fulano')
    const [matricula, setMatricula] = useState('123456789')
    const [email, setEmail] = useState('123456789@aluno.unb.br')
    const [senha, setSenha] = useState('senha')
    const [about, setAbout] = useState('Eu sei usar React Native e estou aprendendo Firebase :D')

    const setAtributos = () => {


    }

    return(
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.tittle}>Perfil</Text>

        <ScrollView contentContainerStyle = {styles.scrollContainer}>

            <TextInput 
                style = {styles.textContainer}
                placeholder = {nome}
            
            />

            <TextInput 
                style = {styles.textContainer}
                placeholder = {matricula}

            />

            <TextInput 
                style = {styles.textContainer}
                placeholder = {email}

            />

            <TextInput 
                style = {styles.textContainer}
                placeholder = {senha}
                secureTextEntry = {true}

            />

            <TextInput 
                style = {styles.longTextContainer}
                multiline = {true}
                placeholder = {about}

            />

            <TouchableOpacity
                style = {styles.button}
                
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
        width: 400,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    textContainer: {
        height: 50,
        width: 340,
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
        height: 150,
        width: 340,
        borderRadius: 20,
        marginTop: 30,
        fontSize: 18,
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
    },

    button: {
        height: 60,
        width: 340,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
    },
})