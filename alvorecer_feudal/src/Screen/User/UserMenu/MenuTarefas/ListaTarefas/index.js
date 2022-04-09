import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

export default function ListaTarefas({navigation}){
    return(
        
        <View style ={styles.container}>
            <Text style = {styles.tittle}>Tarefas do Feudo</Text>
            
                <ScrollView contentContainerStyle = {styles.scrollContainer}>
                
                    <TouchableOpacity 
                        style={styles.tarefas}
                        onPress = {() => navigation.navigate('Detalhes',{
                            tarefa: 'Criar Telas de Admin',
                            descricao: 'Com as ferramentas aprendidas até então, crie todas as telas de administrador',
                            estado: 'Em Progresso',
                            est: false
                        })}
                    >
                        <Text>Tarefa 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.tarefas}
                        onPress = {() => navigation.navigate('Detalhes',{
                            tarefa: 'Melhorar o UI',
                            descricao: 'O UI de user e de admin precisam de ajustes',
                            estado: 'Em Progresso',
                            est: false
                        })}
                    >
                        <Text>Tarefa 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.tarefas}
                        onPress = {() => navigation.navigate('Detalhes',{
                            tarefa: 'Preparar o Back-End',
                            descricao: 'A autenticação ja esta funcionando, é preciso trabalhar o banco de dados',
                            estado: 'Em Progresso',
                            est: false
                        })}
                    >
                        <Text>Tarefa 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.tarefas}
                        onPress = {() => navigation.navigate('Detalhes',{
                            tarefa: 'Estudar React Native',
                            descricao: 'Precisamos aprender React Native para começar a trabalhar no app',
                            estado: 'Concluido',
                            est: true
                        })}
                    >
                        <Text>Tarefa 4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.tarefas}
                        onPress = {() => navigation.navigate('Detalhes',{
                            tarefa: 'Estudar React Native',
                            descricao: 'Precisamos aprender React Native para começar a trabalhar no app',
                            estado: 'Concluido',
                            est: true
                        })}
                    >
                        <Text>Tarefa 5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.tarefas}
                        onPress = {() => navigation.navigate('Detalhes',{
                            tarefa: 'Aprender sobre Scrum',
                            descricao: 'Aprendendo o Basico sobre as metodologias agéis para trablhar no projeto',
                            estado: 'Concluido',
                            est: true
                        })}
                    >
                        <Text>Tarefa 6</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress = {() => navigation.navigate('CriarTarefa')}
                    >
                        <Text>Adicionar tarefa  +</Text>
                    </TouchableOpacity>

                </ScrollView> 

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
        margin: 15,
    },

    scrollContainer: {
        width: 400,
        marginTop: 20,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    tarefas: {
        backgroundColor: '#6EF46B',
        borderRadius: 20,
        width: 350,
        height: 50,
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 5,
        elevation: 15,        
    },

    button: {
        height: 50,
        width: 320,
        borderRadius: 20,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6EF46B',
        elevation: 15,
       
    },
})