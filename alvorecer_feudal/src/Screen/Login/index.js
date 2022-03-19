import React, {useState} from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default function Login({navigation}){

  //Métodos getter e setter das variáveis
    const [username, setUsername] = useState('')
    const [senha, setSenha] = useState('')


    return(
    <View style={styles.container}>
      <Image source = {require('../../../assets/kanna.jpg')} //Logo da tela de login
             style = {styles.image}
      />
      
      <View style = {styles.loginContainer}>

        <Text style = {styles.tittle}>Login</Text>


        <TextInput //Input para o Username
          onChangeText = {setUsername} 
          value = {username} 
          placeholder = "username"
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
    
        <TouchableOpacity //Botão para logar
          onPress = {() => navigation.navigate('Menu',{
          username: username,
          senha: senha,
        })} > 

          <View style = {styles.button}>
            <Text style = {styles.text}>Entrar</Text> 
          </View>

        </TouchableOpacity>

      </View>

    </View>
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
      marginTop: 70,
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

  });
  