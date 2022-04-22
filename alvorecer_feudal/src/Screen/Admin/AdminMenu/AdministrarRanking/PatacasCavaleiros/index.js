import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

export default function PatacasCavaleiros({navigation}){
    return(
        <SafeAreaView style = {styles.container}>

            <Text style = {styles.tittle}>Cavaleiros</Text>
                    <ScrollView contentContainerStyle= {styles.scrollContainer}>
                        <Text style = {styles.text}>211030827:      1165</Text>
                        <Text style = {styles.text}>211030602:  	   1141</Text>
                        <Text style = {styles.text}>211030774:  	   1040</Text>
                        <Text style = {styles.text}>211030700:	     876</Text>
                        <Text style = {styles.text}>211031762:	     863</Text>
                        <Text style = {styles.text}>202028973:	     825</Text>
                        <Text style = {styles.text}>211031495:	     820</Text>
                        <Text style = {styles.text}>211031459:	     803</Text>
                        <Text style = {styles.text}>211031056:	     797</Text>
                        <Text style = {styles.text}>211039448:  	   770</Text>
                        <Text style = {styles.text}>211029586:	     768</Text>
                        <Text style = {styles.text}>211029352:	     767</Text>
                        <Text style = {styles.text}>211031771:	     758</Text>
                        <Text style = {styles.text}>211029361:	     754</Text>
                        <Text style = {styles.text}>211030756:	     754</Text>
                        <Text style = {styles.text}>202017503:	     749</Text>
                        <Text style = {styles.text}>211029441:	     748</Text>
                        <Text style = {styles.text}>211039617:	     746</Text>
                        <Text style = {styles.text}>211030961:	     745</Text>
                        <Text style = {styles.text}>211030765:	     719</Text>
                        <Text style = {styles.text}>211029405:	     719</Text>
                        <Text style = {styles.text}>202063300:	     717</Text>
                        <Text style = {styles.text}>211030729:	     709</Text>
                </ScrollView>
            <TouchableOpacity style = {styles.button}
                onPress = {() => navigation.navigate('PatacasFeudos')}
            >
                <Text style = {styles.text}>Mudar para Feudos</Text>
            </TouchableOpacity>
        </SafeAreaView>
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
        width: 320,
        borderRadius: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    tittle: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 20,
    },

    text:{
        fontSize: 25,
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
