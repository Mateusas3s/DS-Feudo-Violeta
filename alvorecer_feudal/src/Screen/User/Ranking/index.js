import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Ranking(){
    return(
        <View style = {styles.container}>
            <Text style = {styles.tittle}>User Ranking</Text>
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