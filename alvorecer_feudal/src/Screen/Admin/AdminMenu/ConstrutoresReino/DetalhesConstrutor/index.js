import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const adicionarPatacas = require('./functions')

export default function DetalhesConstrutor({navigation}){

    const userId = 3;

    const [patacas, setPatacas] = React.useState(50);

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Detalhes Contrutor</Text>

            <Text style={styles.text}>Número de patacas atual: {patacas}</Text>

            <TouchableOpacity style={styles.button2}
                onPress = {()=>{setPatacas(adicionarPatacas(patacas, 100))}}
            >
                <Text>Doar patacas</Text>
            </TouchableOpacity>            

            <TouchableOpacity style={styles.button2}
                onPress = {() => navigation.navigate('ListaConstrutor')}
            >
                <Text>Voltar</Text>
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

    text: {
        color:'#fff',
        fontSize: 20
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