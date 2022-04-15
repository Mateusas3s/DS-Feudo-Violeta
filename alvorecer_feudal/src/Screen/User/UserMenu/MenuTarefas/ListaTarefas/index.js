import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListaTarefas({navigation}){

    const [viewButtonStyle, setViewButtonStyle] = useState([
        styles.buttonsContainer,styles.buttonsContainer,
        styles.buttonsContainer,styles.buttonsContainer,
        styles.buttonsContainer,styles.buttonsContainer,
        styles.buttonsContainer,styles.buttonsContainer,
        styles.buttonsContainer,styles.buttonsContainer,
     ]);
    const [tarefaStyle, setTarefaStyle] = useState([
        styles.tarefasButton,styles.tarefasButton,
        styles.tarefasButton,styles.tarefasButton,
        styles.tarefasButton,styles.tarefasButton,
        styles.tarefasButton,styles.tarefasButton,
        styles.tarefasButton,styles.tarefasButton,
    ]);
    const [textoTarefa, setTextoTarefa] = useState([
        "Tarefa 1","Tarefa 2",
        "Tarefa 3","Tarefa 4",
        "Tarefa 5","Tarefa 6",
        "Tarefa 7","Tarefa 8",
        "Tarefa 9","Tarefa 10",
    ]);
    const [viewSmallButton, setViewSmallButton] = useState([
        styles.smallButton, styles.smallButton,
        styles.smallButton,styles.smallButton,
        styles.smallButton,styles.smallButton,
        styles.smallButton,styles.smallButton,
        styles.smallButton,styles.smallButton,
    ]);
    const [deleteIcon, setDeleteIcon] = useState([
        "delete","delete",
        "delete","delete",
        "delete","delete",
        "delete","delete",
        "delete","delete",
    ]);

    const deletarTarefa = (pos) => {
        let tempArray1 = viewButtonStyle
        let tempArray2 = tarefaStyle
        let tempArray3 = textoTarefa
        let tempArray4 = viewSmallButton
        let tempArray5 = deleteIcon

        tempArray1[pos] = styles.hidden
        tempArray2[pos] = styles.hidden
        tempArray3[pos] = ""
        tempArray4[pos] = styles.hidden
        tempArray5[pos] = ""


        setViewButtonStyle(tempArray1)
        setTarefaStyle(tempArray2)
        setTextoTarefa(tempArray3)
        setViewSmallButton(tempArray4)
        setDeleteIcon(tempArray5)
    }

    return(
        
        <View style ={styles.container}>
            <Text style = {styles.tittle}>Tarefas do Feudo</Text>
            
            <ScrollView contentContainerStyle = {styles.scrollContainer}>
                
                <View style = {viewButtonStyle[0]}>
                    <TouchableOpacity 
                        style={tarefaStyle[0]}
                        onPress = {() => navigation.navigate('DetalhesTarefa',{
                            tarefa: 'Criar Telas de Admin',
                            descricao: 'Com as ferramentas aprendidas até então, crie todas as telas de administrador',
                            estado: 'Em Progresso',
                            est: false
                        })}
                    >
                        <Text style={styles.text}>{textoTarefa[0]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[0]}
                        onPress={() => deletarTarefa(0)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[0]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={viewButtonStyle[1]}>
                    <TouchableOpacity 
                        style={tarefaStyle[1]}
                        onPress = {() => navigation.navigate('DetalhesTarefa',{
                            tarefa: 'Melhorar o UI',
                            descricao: 'O UI de user e de admin precisam de ajustes',
                            estado: 'Em Progresso',
                            est: false
                        })}
                    >
                        <Text style={styles.text}>{textoTarefa[1]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[1]}
                        onPress={() => deletarTarefa(1)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[1]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={viewButtonStyle[2]}>
                    <TouchableOpacity 
                        style={tarefaStyle[2]}
                        onPress = {() => navigation.navigate('DetalhesTarefa',{
                            tarefa: 'Preparar o Back-End',
                            descricao: 'A autenticação ja esta funcionando, é preciso trabalhar o banco de dados',
                            estado: 'Em Progresso',
                            est: false
                        })}
                    >
                        <Text style={styles.text}>{textoTarefa[2]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[2]}
                        onPress={() => deletarTarefa(2)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[2]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={viewButtonStyle[3]}>
                    <TouchableOpacity 
                        style={tarefaStyle[3]}
                        onPress = {() => navigation.navigate('DetalhesTarefa',{
                            tarefa: 'Estudar React Native',
                            descricao: 'Precisamos aprender React Native para começar a trabalhar no app',
                            estado: 'Concluido',
                            est: true
                        })}
                    >
                        <Text style={styles.text}>{textoTarefa[3]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[3]}
                        onPress={() => deletarTarefa(3)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[3]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                    
                <View style={viewButtonStyle[4]}>
                    <TouchableOpacity 
                        style={tarefaStyle[4]}
                        onPress = {() => navigation.navigate('DetalhesTarefa',{
                            tarefa: 'Estudar React Native',
                            descricao: 'Precisamos aprender React Native para começar a trabalhar no app',
                            estado: 'Concluido',
                            est: true
                        })}
                    >
                        <Text style={styles.text}>{textoTarefa[4]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[4]}
                        onPress={() => deletarTarefa(4)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[4]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
                    
                <View style={viewButtonStyle[5]}>
                    <TouchableOpacity 
                        style={tarefaStyle[5]}
                        onPress = {() => navigation.navigate('DetalhesTarefa',{
                            tarefa: 'Aprender sobre Scrum',
                            descricao: 'Aprendendo o Basico sobre as metodologias agéis para trablhar no projeto',
                            estado: 'Concluido',
                            est: true
                        })}
                    >
                        <Text style={styles.text}>{textoTarefa[5]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[5]}
                        onPress={() => deletarTarefa(5)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[5]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={viewButtonStyle[6]}>
                    <TouchableOpacity 
                        style={tarefaStyle[6]}
                        onPress = {() => navigation.navigate('DetalhesTarefa')}
                    >
                        <Text style={styles.text}>{textoTarefa[6]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[6]}
                        onPress={() => deletarTarefa(6)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[6]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={viewButtonStyle[7]}>
                    <TouchableOpacity 
                        style={tarefaStyle[7]}
                        onPress = {() => navigation.navigate('DetalhesTarefa')}
                    >
                        <Text style={styles.text}>{textoTarefa[7]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[7]}
                        onPress={() => deletarTarefa(7)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[7]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={viewButtonStyle[8]}>
                    <TouchableOpacity 
                        style={tarefaStyle[8]}
                        onPress = {() => navigation.navigate('DetalhesTarefa')}
                    >
                        <Text style={styles.text}>{textoTarefa[8]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[8]}
                        onPress={() => deletarTarefa(8)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[8]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={viewButtonStyle[9]}>
                    <TouchableOpacity 
                        style={tarefaStyle[9]}
                        onPress = {() => navigation.navigate('DetalhesTarefa')}
                    >
                        <Text style={styles.text}>{textoTarefa[9]}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={viewSmallButton[9]}
                        onPress={() => deletarTarefa(9)}
                    >
                        <MaterialCommunityIcons name={deleteIcon[9]} size={24} color="#fff" />
                    </TouchableOpacity>
                </View>

            </ScrollView>

            <View style={styles.scrollContainer}>
                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('CriarTarefa')}
                >
                    <Text style={styles.text}>Adicionar tarefa</Text>
                </TouchableOpacity> 
            </View>

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
       
    }
})