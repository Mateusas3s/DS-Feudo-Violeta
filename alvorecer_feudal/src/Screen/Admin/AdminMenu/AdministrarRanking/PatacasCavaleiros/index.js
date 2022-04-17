import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

export default function PatacasCavaleiros({navigation}){
    return(
        <SafeAreaView style = {styles.container}>

            <Text style = {styles.tittle}>Cavaleiros</Text>
                    <ScrollView contentContainerStyle= {styles.scrollContainer}>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                        <Text style = {styles.text}>Teste 1</Text>
                </ScrollView>
            <TouchableOpacity style = {styles.button}
                onPress = {() => navigation.navigate('PatacasFeudos')}
            >
                <Text>Mudar Feudos</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    scrollContainer:{
        width: 320,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    tittle: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 20,
    },

    text:{
        fontSize: 30,
        color: '#000'
    },

    button: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15,
       
    },
})
