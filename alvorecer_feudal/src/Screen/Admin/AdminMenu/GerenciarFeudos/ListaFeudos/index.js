import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function GerenciarFeudos({navigation}){
    return(
        <View style = {styles.container}>
            <Text style = {styles.tittle}>Gerenciar Feudos</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('Detalhes')}
                >
                    <Text>Feudo Azul escuro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('Detalhes')}
                >
                    <Text>Feudo branco</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('Detalhes')}
                >
                    <Text>Feudo vermelho</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('Detalhes')}
                >
                    <Text>Feudo laranja</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('Detalhes')}
                >
                    <Text>Feudo roxo</Text>
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity style={styles.button2}
                onPress = {() => navigation.navigate('Criar')}
            >
                <Text>Criar Feudo   +</Text>
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