import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListaTarefas({navigation}){

    const tarefas = [
        {id: 'xablau', name: 'Tarefa 1'},
        {id: 'xasdih', name: 'Tarefa 2'},
        {id: 'aiuhde', name: 'Tarefa 3'},
        {id: 'kirnos', name: 'Tarefa 4'},
        {id: 'oigjds', name: 'Tarefa 5'},
    ]

    function User({nameTarefa}) {
        return(
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.tarefasButton}
                    onPress={() => navigation.navigate('DetalhesTarefa')}
                >
                    <Text style={styles.text}>{nameTarefa}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.smallButton}
                    onPress
                >
                    <MaterialCommunityIcons name='delete' size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        )
    }    

    return(
        
        <View style ={styles.container}>
            <Text style = {styles.tittle}>Tarefas do Feudo</Text>

            <FlatList
                data = {tarefas}
                renderItem = {({item}) => <User nameTarefa={item.name}/>}
                keyExtractor = {item => item.id}
            />

            <View style={styles.scrollContainer}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('CriarTarefa')}
                >
                    <Text style={styles.text}>Adicionar tarefa</Text>
                </TouchableOpacity> 
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

    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 7.5,
        
    },
    
    tittle: {
        fontSize: 40,
        color: '#fff',
        margin: 15,
    },

    text: {
        fontSize: 20,
        color: '#484848',

    },

    scrollContainer: {
        width: 400,
        marginTop: 20,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    tarefasButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 300,
        height: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 5,
        elevation: 15,        
    },

    button: {
        height: 50,
        width: 300,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffd335',
        elevation: 15,
       
    },

    hidden:{
        height: 0,
        width: 0,
        backgroundColor: '#8425E3'
    },

    smallButton: {
        backgroundColor: '#F46B73',
        height: 50,
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        marginLeft: 10,
       
    }
})