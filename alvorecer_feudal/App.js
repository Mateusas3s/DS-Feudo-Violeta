import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default class App extends React.Component{
  
  
  render(){
    return (
      <View style={styles.container}>
        <Image source = {require('./assets/kanna.jpg')}
               style = {styles.image}
        />
        <Text>E lá vamos nós! Deu até animação agora</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 100,
    height: 100,
  },
});
