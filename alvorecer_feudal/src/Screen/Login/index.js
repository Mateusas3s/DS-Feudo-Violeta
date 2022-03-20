import React, {useState} from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, TextInput,
KeyboardAvoidingView, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import app from "../../../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({navigation}){

  //Métodos getter e setter das variáveis
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');

    //Setar a mensagem de erro
    const [errorLogin, setErrorLogin] = useState("");

    //Função que chama a authenticação do firebase
    const LoginFirebase = ()=>{

      const auth = getAuth();
      signInWithEmailAndPassword(auth, username, senha)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        navigation.navigate('Menu');
        // ...
      })
      .catch((error) => {
        setErrorLogin(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
    }


    return(
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      
      >
      <Image source = {require('../../../assets/kanna.jpg')} //Logo da tela de login
             style = {styles.image}
      />
      
      <View style = {styles.loginContainer}>

        <Text style = {styles.tittle}>Login</Text>


        <TextInput //Input para o Username
          onChangeText = {setUsername} 
          value = {username} 
          placeholder = "Email"
          style = {styles.textContainer}
          textAlign = 'center'
        /> 

        <TextInput //Input para a Senha
          onChangeText = {setSenha}
          value = {senha} 
          placeholder = "senha"
          style = {styles.textContainer}
          textAlign = 'center'
          secureTextEntry = {true}
        />

        {errorLogin === true
          ?
          <View>
            <MaterialCommunityIcons
              name='alert-circle'
              color='red'
              style={styles.messageError}
            >
            <Text style={{color:'red'}}>Invalid email or password!</Text>
            </MaterialCommunityIcons>
          </View>
          
          :
            <View></View>
          }
    
        <TouchableOpacity //Botão para logar
          onPress = {LoginFirebase} > 

          <View style = {styles.button}>
            <Text style = {styles.text}>Entrar</Text> 
          </View>

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
    },

    loginContainer: {
      height: 443,
      width: 302,
      backgroundColor: '#484848',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },

    textContainer: {
      height: 54,
      width: 221,
      fontSize: 25,
      backgroundColor: '#fff',
      marginTop: 25,
      borderRadius: 20,
      
    },

    button: {
      height: 54,
      width: 221,
      backgroundColor: '#6EF46B',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
      borderRadius: 20,
    },

    tittle: {
      fontSize: 40,
      color: '#fff',
      marginBottom: 30,
    },

    text: {
      fontSize: 30,
    },

    image: {
      width: 100,
      height: 100,
      marginTop: 50,
      marginBottom: 50,
    },

    messageError: {
      height: 54,
      width: 300,
      fontSize: 20,
      marginTop: 25,
      marginLeft: 45,
      borderRadius: 20,
    },
  });
  