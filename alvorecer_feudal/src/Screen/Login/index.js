import react from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Login({navigation}){
    return(
    <View style={styles.container}>
      <Image source = {require('../../../assets/kanna.jpg')}
             style = {styles.image}
      />
      <Text>E lá vamos nós! Deu até animação agora</Text>
      <TouchableOpacity
            onPress={() => navigation.navigate('Menu')}  
        > 
        <Text>Menu Principal</Text> 
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
    )
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
  