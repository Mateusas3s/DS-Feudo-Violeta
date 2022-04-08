import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView,  KeyboardAvoidingView, Platform} from 'react-native';

export default function GerenciarConstrutores(){

    return(

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.tittle}>Cadastro de construtor</Text>

                <TextInput 
                    style = {styles.textContainer}
                    placeholder = {nome}
                
                ></TextInput>

                <TextInput 
                    style = {styles.textContainer}
                    placeholder = {matricula}

                ></TextInput>

                <TextInput 
                    style = {styles.textContainer}
                    placeholder = {email}

                ></TextInput>

                <TextInput 
                    style = {styles.textContainer}
                    placeholder = {senha}

                ></TextInput>

                <TouchableOpacity style={styles.buttonConfirm}>
                    <Text>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCancel}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>
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


    buttonConfirm: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#6EF46B',
    },
    buttonCancel: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F46B73',
    },

    textContainer: {
        height: 60,
        width: 320,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
        textAlign: 'center',
        alignItems: 'center', 
        
    },
})