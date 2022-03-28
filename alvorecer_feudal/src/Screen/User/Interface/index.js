import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Interface(){

    return(
        <View style={styles.container}>
    
            <TouchableOpacity>
                <View style={styles.button1}>
                    <Text>VER FEUDO</Text>
                </View>
            </TouchableOpacity>
    
            <TouchableOpacity>
                <View style={styles.button2and3}>
                    <Text>VER TAREFAS</Text>
                </View>
            </TouchableOpacity>
    
            <TouchableOpacity>
                <View style={styles.button2and3}>
                    <Text>RANKING FEUDAL</Text>
                </View>
            </TouchableOpacity>
            
        </View>
    );
    
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#8425E3',
        alignItems: 'center',
        
      },

      button1: {
        height: 80,
        width: 201,
        backgroundColor: '#6EF46B',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        borderRadius: 20,
      },

      button2and3: {
        height: 80,
        width: 201,
        backgroundColor: '#6EF46B',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        borderRadius: 20,
      },
    



})