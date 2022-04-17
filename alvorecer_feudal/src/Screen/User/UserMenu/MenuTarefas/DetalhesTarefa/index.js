import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function DetalhesTarefa({navigation, route}){

    const [tarefa, setTarefa] = useState(route.params?.tarefa)
    const [descricao, setDescricao] = useState(route.params?.descricao)
    const [estado, setEstado] = useState(route.params?.estado)
    const [est, setEst] = useState(route.params?.est)

    function alterarEstado(){
        if (est) {
            setEst(false)
            setEstado('Em Progresso')
        } else {
            setEst(true)
            setEstado('Concluido')
        }
    }


    return(
        
        <View style ={styles.container}>
            <Text style = {styles.tittle}>Detalhes</Text>
            
            <View style={styles.smallTextContainer}>                 
                <Text style={styles.text}>{tarefa}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.descricao}>{descricao}</Text>
            </View>

            <View style={styles.containerAlfa}>
                <View style={styles.smallContainer}>
                    <Text style={styles.text}>{estado}</Text>
                </View>
                <TouchableOpacity 
                    style={styles.smallButton}
                    onPress={() => alterarEstado()}
                >
                    <Text style={styles.text}>Alterar Estado</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('ListaTarefas')}
            >
                <Text>Voltar</Text>
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
    
    tittle: {
        fontSize: 40,
        color: '#fff',
        marginTop: 5,
    },

    textContainer: {
        height: 120,
        width: 330,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },

    smallTextContainer: {
        height: 70,
        width: 330,
        borderRadius: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },

    smallContainer: {
        height: 120,
        width: 155,
        borderRadius: 20,
        marginTop: 20,
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15, 
        
    },

    smallButton: {
        height: 120,
        width: 155,
        borderRadius: 20,
        marginTop: 20,
        margin: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15, 
        
    },

    containerAlfa: {
        flexDirection: 'row',
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center', 
        
    },

    button: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15,
       
    },

    text: {
        fontSize: 30,
        color: '#484848',
        margin: 10,

    },

    descricao: {
        fontSize: 20,
        color: '#484848',
        margin: 10,

    },
})