import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

export default function PatacasFeudos({navigation}){
    return(
        <View style = {styles.container}>

            <Text style = {styles.tittle}>Feudos</Text>
            
            <View style = {styles.scrollContainer}>
                
                <Text style = {styles.text}>Vermelho Rosas:	5509</Text>
                <Text style = {styles.text}>Amarelo girassol:	4468</Text>
                <Text style = {styles.text}>Verde Pantano:	4448</Text>
                <Text style = {styles.text}>Preto terras devastadas:	4320</Text>
                <Text style = {styles.text}>Azul hortencias:	4275</Text>
                <Text style = {styles.text}>Rosa flor de cerejeira:	3554</Text>
                <Text style = {styles.text}>Branco Flor de Lótus:	3417</Text>
                <Text style = {styles.text}>Roxo lavanda:	3299</Text>
                <Text style = {styles.text}>Laranja ave do paraíso:	3064</Text>
                <Text style = {styles.text}>Azul Escuro Violeta:	2343</Text>

            </View>

            <TouchableOpacity style = {styles.button}
                onPress = {() => navigation.navigate('PatacasCavaleiros')}
            >
                <Text style = {styles.text}>Mudar Cavaleiros</Text>
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

    scrollContainer:{
        width: 400,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    tittle: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 20,
    },

    text:{
        fontSize: 30,
        color: '#484848'
    },

    button: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginVertical: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15,
       
    },
})
