import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import app from '../../../../../../config/firebase.js';
import {doc, setDoc, getDocs, collection, addDoc, Firestore, getFirestore} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function GerenciarConstrutores({navigation}){
    const db = getFirestore(app);

    const getDocs = () => {

        //para trazer todos os documentos de uma coleção
        const querySnapshot = getDocs(collection(db, "Users"));
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Gerenciar Contrutores</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('DetalhesConstrutor')}
                >
                    <Text>Fulano</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('DetalhesConstrutor')}
                >
                    <Text>Cliclano</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('DetalhesConstrutor')}
                >
                    <Text>Beltrano</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                onPress = {getDocs}>
                    <Text>ver documentos</Text>
                </TouchableOpacity>

            </ScrollView>

            <TouchableOpacity style={styles.button2}
                onPress = {() => navigation.navigate('CadastroConstrutor')}
            >
                <Text>Adiconar Contrutor    +</Text>
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
})