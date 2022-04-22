import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView} from 'react-native';
import app from '../../../../../../config/firebase.js';
import {doc, setDoc, query, where, getDocs, collection, getFirestore, onSnapshot} from 'firebase/firestore';

const db = getFirestore(app);

var lista = [];
const q = query(collection(db, "Users"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        lista=[];
        querySnapshot.forEach((doc) => {
        lista.push(doc.data());
});
console.log("Users: ", lista.join(", "));
        
});

export default function GerenciarConstrutores({navigation}){
    
    function Construtor({nome}){
        return(
         <TouchableOpacity 
             style={styles.button}
             onPress={() => navigation.navigate('DetalhesConstrutor')}
         >
             <Text style={styles.text}>{nome}</Text>
         </TouchableOpacity>
    )}

    return(
            
        <View style={styles.container}>
            
            <Text style={styles.tittle}>Gerenciar Contrutores</Text>
  
                <FlatList 
                    data = {lista}
                    renderItem = {({item}) => <Construtor nome = {item.name}/>}
                    keyExtractor = {item => item.matricula}
                />

            <TouchableOpacity style={styles.button2}
                onPress = {() => navigation.navigate('CadastroConstrutor')}
            >
                <Text style={styles.text}>Adicionar Contrutor</Text>
            </TouchableOpacity>

        </View>
    )
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
        margin: 15,
    },

    scrollContainer: {
        width: 400,
        marginTop: 20,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center',
        
    },


    button: {
        height: 60,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 15,
       
    },

    button2: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffd335',
    },

    text: {
        fontSize: 20,
        color: '#484848',

    },
})