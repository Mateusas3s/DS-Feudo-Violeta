import React, { useState } from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Perfil(){

    const [nome, setNome] = useState('')
    const [matricula, setMatricula] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [about, setAbout] = useState('')

    let n = 'Nome'
    let m = 'Matricula'
    let e = 'E-mail'
    let a = 'Descrição Profissional'

    const setAtributos = () => {
        n = nome
        m = matricula
        e = email
        a = about
    }

    return(
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.tittle}>Perfil</Text>

        <ScrollView contentContainerStyle = {styles.scrollContainer}>

            <TextInput 
                style = {styles.textContainer}
                placeholder = {n}
                onChangeText = {setNome}
                value = {nome}
            />

            <TextInput 
                style = {styles.textContainer}
                placeholder = {m}
                onChangeText = {setMatricula}
                value = {matricula}

            />

            <TextInput 
                style = {styles.textContainer}
                placeholder = {e}
                onChangeText = {setEmail}
                value = {email}

            />

            <TextInput 
                style = {styles.textContainer}
                placeholder = 'Senha'
                secureTextEntry = {true}
                onChangeText = {setSenha}
                value = {senha}
            />

            <TextInput 
                style = {styles.longTextContainer}
                multiline = {true}
                placeholder = {a}
                onChangeText = {setAbout}
                value = {about}

            />

            <TouchableOpacity
                style = {styles.button}
                onPress = {() => setAtributos()}
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
        color: '#484848',
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
        color: '#484848',
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