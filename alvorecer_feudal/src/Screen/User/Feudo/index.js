import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import app from "../../../config/firebase";
import {getDoc, where, getFirestore} from 'firebase/firestore';

export default function Feudo(){

    const bd = getFirestore();
    
    return(
    <View style = {styles.container}>
        <Text style = {styles.tittle}>User Feudo</Text>
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
    
    tittle: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 0,
    },
})