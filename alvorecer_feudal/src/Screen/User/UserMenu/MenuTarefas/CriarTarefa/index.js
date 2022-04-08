import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CriarTarefa({navigation}){
    return(
        <View style = {styles.container}>

            <Text style = {styles.tittle}>Criar Tarefa</Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Lista')}
            >
                <Text>Voltar</Text>
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

    button: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15,
       
    },

    tittle: {
        fontSize: 40,
        color: '#fff',
        margin: 15,
    },
})