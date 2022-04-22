import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function MembrosFeudo({navigation}){

    const [nomeConstrutor, setNomeConstrutor] = useState(["WILDEMBERG SALES DA SILVA JUNIOR", "JOAO PEDRO RODRIGUES MORBECK", "", "", "", ""])
    const [nomeDuque, setNomeDuque] = useState("Mateus Augusto Sousa e Silva")

    return(
        <View style={styles.container}>
            
            <Text style={styles.tittle}>Duque</Text>
            
            <View style = {styles.textContainer}>
                <Text style ={styles.text}>{nomeDuque}</Text>
            </View>

            <Text style={styles.tittle}>Membros</Text>

            <View style = {styles.textContainer}>
                <Text style ={styles.text}>{nomeConstrutor[0]}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style ={styles.text}>{nomeConstrutor[1]}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style ={styles.text}>{nomeConstrutor[2]}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style ={styles.text}>{nomeConstrutor[3]}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style ={styles.text}>{nomeConstrutor[4]}</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style ={styles.text}>{nomeConstrutor[5]}</Text>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DetalhesFeudos')}
            >
                <Text style = {styles.textButton}>Voltar</Text>
            </TouchableOpacity>
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

    textContainer: {
        height: 40,
        width: 340,
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },
    
    tittle:{
        fontSize: 40,
        color: '#fff',
    },

    text:{
        fontSize: 20,
        color: '#484848',
    },

    textButton: {
        fontSize: 25,
        color: '#484848',

    },

    button: {
        height: 80,
        width: 340,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
    },
})