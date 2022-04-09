import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function ConstrutoresReino({navigation}){

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Gerenciar Contrutores</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <TouchableOpacity style={styles.button}>
                    <Text>Fulano</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text>Cliclano</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text>Beltrano</Text>
                </TouchableOpacity>

            </ScrollView>

            <TouchableOpacity style={styles.button2}
                onPress={() => navigation.navigate('cadastroConstrutor')}>
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