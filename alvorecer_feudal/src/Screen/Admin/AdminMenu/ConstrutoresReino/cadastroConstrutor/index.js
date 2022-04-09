import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView,  KeyboardAvoidingView, Platform} from 'react-native';

<<<<<<< HEAD:alvorecer_feudal/src/Screen/Admin/AdminMenu/GerenciarConstrutores/cadastroConstrutor/index.js
export default function cadastroConstrutor({navigation}){

    const [nome, setNome] = useState('fulano');
    const [email, setEmail] = useState('fulano@gmail.com');
    const [matricula, setMatricula] = useState('202020200');
    const [senha, setSenha] = useState('');

=======
export default function CadastroConstrutor({navigation}){

    const nome = 'Fulano'
    const matricula = '123456789'
    const email = 'fulano@aluno.unb.br'
    const senha = '*********'
>>>>>>> 53671d0df71988b79043fc164a4487973f0ef21c:alvorecer_feudal/src/Screen/Admin/AdminMenu/ConstrutoresReino/cadastroConstrutor/index.js

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

                <TouchableOpacity style={styles.buttonConfirm}
                    onPress={() => navigation.navigate('ConstrutoresReino')}>
                    <Text>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCancel}
<<<<<<< HEAD:alvorecer_feudal/src/Screen/Admin/AdminMenu/GerenciarConstrutores/cadastroConstrutor/index.js
                    onPress={() => navigation.navigate('ConstrutoresReino')}>
=======
                    onPress = {() => navigation.navigate('ListaConstrutor')}
                >
>>>>>>> 53671d0df71988b79043fc164a4487973f0ef21c:alvorecer_feudal/src/Screen/Admin/AdminMenu/ConstrutoresReino/cadastroConstrutor/index.js
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