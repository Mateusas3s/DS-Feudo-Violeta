import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function GerenciarFeudos({navigation}){

    const feudos = [
        {id: 'auifba', feudo: 'Azul Escuro Violeta',},

        {id: 'rphjsd', feudo: 'Branco Flor de Lótus',},

        {id: 'irepng', feudo: 'Vermelho Rosas',},

        {id: 'towbia', feudo: 'Rosa flor de cerejeira',},

        {id: 'yeopwn', feudo: 'Preto terras devastadas',},

        {id: 'nbsijf', feudo: 'Amarelo girassol',},

        {id: 'ysoidf', feudo: 'Azul Hortências',},

        {id: 'rgsoih', feudo: 'Verde pântano',},

        {id: 'eoijgo', feudo: 'Roxo Lavanda',},

        {id: 'mcispf', feudo: 'Laranja ave do paraíso'}
    ]

    function Feudo({nameFeudo}) {
        return(
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.tarefasButton}
                    onPress={() => navigation.navigate('DetalhesFeudos', feudos[this])}
                >
                    <Text style={styles.text}>{nameFeudo}</Text>
                </TouchableOpacity>

            </View>
        )
    }

    return(
        <View style ={styles.container}>
            <Text style = {styles.tittle}>Feudos</Text>

            <FlatList
                data = {feudos}
                renderItem = {({item}) => <Feudo nameFeudo={item.feudo}/>}
                keyExtractor = {item => item.id}
            />

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

    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 7.5,
        
    },
    
    tittle: {
        fontSize: 40,
        color: '#fff',
        margin: 15,
    },

    text: {
        fontSize: 20,
        color: '#484848',

    },

    scrollContainer: {
        width: 400,
        marginTop: 20,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    tarefasButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 300,
        height: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 5,
        elevation: 15,        
    },

    button: {
        height: 50,
        width: 300,
        borderRadius: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffd335',
        elevation: 15,
       
    },

    hidden:{
        height: 0,
        width: 0,
        backgroundColor: '#8425E3'
    },

    smallButton: {
        backgroundColor: '#F46B73',
        height: 50,
        width: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 15,
        marginLeft: 10,
       
    }
})