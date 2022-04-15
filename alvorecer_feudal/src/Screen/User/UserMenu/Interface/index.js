import React, {useState}from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Interface({navigation}){

    const [contador, setContador] = useState(4000)
    const [rank, setRank] = useState(1)
    const [feudo, setFeudo] = useState('Azul Escuro Violeta')
    const [nome, setNome] = useState('Fulano')

    return(
        <View style={styles.container}>

            <Text style={styles.greeting}>Olá {nome} :)</Text>

            <View style={styles.containeralfa}>

                <View style={styles.containernumerico}>
                    <Text style={styles.text}>Patacas:</Text>
                    <Text style={styles.text}>{contador}</Text>
                </View>

                <View style={styles.containernumerico}>
                    <Text style={styles.text}>Ranking:</Text>
                    <Text style={styles.text}>{rank}º</Text>
                </View>

            </View>

            <View style={styles.textcontainer}>
                <Text style={styles.text}>Feudo:</Text>
                <Text style={styles.text}>{feudo}</Text>
            </View>

            <TouchableOpacity style={styles.button}
                onPress = {() => navigation.navigate('Login')}
            >
                <Text style={styles.text}>Sair</Text>
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

    containeralfa: {
        flexDirection: 'row',
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center', 
        
    },

    textcontainer: {
        height: 150,
        width: 340,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },

    containernumerico: {
        height: 150,
        width: 160,
        borderRadius: 20,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
        
    },

    button: {
        height: 120,
        width: 340,
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15

    },

    text: {
        margin: 10,
        fontSize: 30,
        color: '#484848',

    },

    greeting: {
        margin: 20,
        fontSize: 30,
        color: '#fff'

    },
      

})