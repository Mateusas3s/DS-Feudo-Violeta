import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, SafeAreaView} from 'react-native';
import app from '../../../../../../config/firebase.js';
import {doc, setDoc, query, where, getDocs, collection, getFirestore, onSnapshot, QuerySnapshot} from 'firebase/firestore';


export default function GerenciarConstrutores({navigation}){

   const db = getFirestore(app)

    const lista = [];
   useEffect(()=>{  
        const q = query(collection(db, "Users"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        lista=[];
        querySnapshot.forEach((doc) => {
            lista.push(doc.id);
        });
        console.log("Users: ", lista.join(", "));
        });
   },[]);

    const Item =({item})=>(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text>{item}</Text>
            </TouchableOpacity>
        </View>
    );
    const renderItem=({item})=>(
        <Item item={item.id}/>
    );

    return(
            
        <View style={styles.container}>
            
            <Text style={styles.tittle}>Gerenciar Contrutores</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <FlatList
                    data={lista}
                    renderItem={renderItem}
                />
            </ScrollView>
                

            <TouchableOpacity style={styles.button2}
                onPress = {() => navigation.navigate('CadastroConstrutor')}
            >
                <Text style={styles.text}>Adiconar Contrutor</Text>
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
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#ffd335',
    },

    text: {
        fontSize: 20,
        color: '#484848',

    },
})