import React from 'react';
import {Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function FileSelector({onPress, placeholder}){
    return(
        <View style={styles.selectorContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
            />
            <View style={styles.button}>
                <TouchableOpacity onPress={onPress}>
                    <Text style={styles.titleButton}>
                        SELECT A FILE
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles ={
    selectorContainer:{
        flexDirection: 'row'
    },
    textInput:{
        height: 50,
        width: 170,
        borderRadius: 5,
        margin: 10,
        backgroundColor: 'white',
        padding: 10,
        fontWeight: 'bold',
        marginLeft: 10
    },
    button:{
        height: 50,
        width: 130,
        borderRadius: 5,
        backgroundColor: '#228b22',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
        

    },
    titleButton:{
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white'
        
    }

};