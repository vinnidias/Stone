import React from 'react';
import {Text, View, TouchableHighlight, TextInput } from 'react-native';

export default function DefaulInput({placeholder, onChangeText, value}){
    return(
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
        />
    )
};

const styles ={
    textInput:{
        height: 50,
        width: 300,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
        fontWeight: 'bold'
    }
};
  