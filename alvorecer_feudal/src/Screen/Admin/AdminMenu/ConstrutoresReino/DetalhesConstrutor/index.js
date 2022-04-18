import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function DetalhesConstrutor({navigation}){

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Detalhes Contrutor</Text>

            <View style = {styles.textContainer}>
                <Text style = {styles.placeholder}>Nome</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.placeholder}>Matricula</Text>
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.placeholder}>E-mail</Text>
            </View>

            <View style = {styles.longTextContainer}>
                <Text style = {styles.placeholder}>Descrição</Text>
            </View>

            <TouchableOpacity style={styles.button2}
                onPress = {() => navigation.navigate('ListaConstrutor')}
            >
                <Text style={styles.text}>Voltar</Text>
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

    button: {
        height: 60,
        width: 340,
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
        backgroundColor:'#6EF46B',
    },

    text: {
        fontSize: 20,
        color: '#484848',

    },

    placeholder: {
        fontSize: 20,
        color: 'gray',

    },
})