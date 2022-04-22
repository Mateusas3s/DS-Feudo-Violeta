import React, { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import app from '../../../../../../config/firebase.js';
import {doc, setDoc, query, where, getDocs, collection, getFirestore, onSnapshot, snapshotEqual} from 'firebase/firestore';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const db = getFirestore(app);
var lista=[];

    
    const q = query(collection(db, "Feudos", "AzulEscuro", "TarefasFeudo"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            lista=[];
            querySnapshot.forEach((doc) => {  
            lista.push(doc.data());
    });
        console.log("tarefas: ", lista.join(", "));
    });

export default function ListaTarefas({navigation}){
    const [refreshing, setRefreshing]= useState(false);
   
    function Tarefa({nameTarefa, desc}) {
        return(
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.tarefasButton}
                    onPress={() => navigation.navigate('DetalhesTarefa',{ 
                        tarefa: nameTarefa,
                        descricao: desc,
                    }
                    )}
                    refreshing={refreshing}
                    onRefresh={()=>{
                        setRefreshing(true);
                        setTimeout(()=>{
                            setRefreshing(false);
                        }, 500);
                    }}
                >
                    <Text style={styles.text}>{nameTarefa}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.smallButton}
                    
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
                data = {lista}
                renderItem = {({item}) => <Tarefa nameTarefa={item.name} desc={item.descricao}/>}
                keyExtractor = {item => item.descricao}
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