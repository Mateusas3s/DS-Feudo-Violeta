import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView,  KeyboardAvoidingView, Platform} from 'react-native';
import app from '../../../../../../config/firebase.js';
import {doc, setDoc, collection, addDoc, Firestore, getFirestore} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function CadastroConstrutor({navigation}){

    const db = getFirestore(app);
    const usersMatriculas=[];

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    const cadastrarUsers = () => {

        //Criar nova conta de usuario
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });


        criarBD();
        usersMatriculas.push(matricula);
        navigation.navigate('ListaConstrutor');
        
    }

    const criarBD= ()=>{
        //criando documento do usuario
        setDoc(doc(db, "Users", matricula), {
            name: nome,
            email: email,
            matricula: matricula,
            patacas: 0
        });
    }


    return( 

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <View style={styles.container}>
                <Text style={styles.tittle}>Cadastro de construtor</Text>

                <TextInput 
                    style = {styles.textContainer}
                    onChangeText= {setNome}
                    value={nome}
                    placeholder = 'nome'
                
                ></TextInput>

                <TextInput 
                    style = {styles.textContainer}
                    onChangeText={setMatricula}
                    value={matricula}
                    placeholder = 'matricula'

                ></TextInput>

                <TextInput 
                    style = {styles.textContainer}
                    onChangeText={setEmail}
                    value={email}
                    placeholder = 'email'

                ></TextInput>

                <TextInput 
                    style = {styles.textContainer}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder = 'senha'

                ></TextInput>

                <TouchableOpacity style={styles.buttonConfirm}
                    onPress={cadastrarUsers}
                    >
                    <Text>Confirmar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonCancel}
                    onPress = {() => navigation.navigate('ListaConstrutor')}
                >
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