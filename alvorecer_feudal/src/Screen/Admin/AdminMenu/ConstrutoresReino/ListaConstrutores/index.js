import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

<<<<<<< HEAD:alvorecer_feudal/src/Screen/Admin/AdminMenu/GerenciarConstrutores/ConstrutoresReino/index.js
export default function ConstrutoresReino({navigation}){
=======
export default function GerenciarConstrutores({navigation}){
>>>>>>> 53671d0df71988b79043fc164a4487973f0ef21c:alvorecer_feudal/src/Screen/Admin/AdminMenu/ConstrutoresReino/ListaConstrutores/index.js

    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Gerenciar Contrutores</Text>

            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('DetalhesConstrutor')}
                >
                    <Text>Fulano</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('DetalhesConstrutor')}
                >
                    <Text>Cliclano</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress = {() => navigation.navigate('DetalhesConstrutor')}
                >
                    <Text>Beltrano</Text>
                </TouchableOpacity>

            </ScrollView>

            <TouchableOpacity style={styles.button2}
<<<<<<< HEAD:alvorecer_feudal/src/Screen/Admin/AdminMenu/GerenciarConstrutores/ConstrutoresReino/index.js
                onPress={() => navigation.navigate('cadastroConstrutor')}>
=======
                onPress = {() => navigation.navigate('CadastroConstrutor')}
            >
>>>>>>> 53671d0df71988b79043fc164a4487973f0ef21c:alvorecer_feudal/src/Screen/Admin/AdminMenu/ConstrutoresReino/ListaConstrutores/index.js
                <Text>Adiconar Contrutor    +</Text>
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