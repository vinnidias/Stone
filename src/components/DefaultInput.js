import React from 'react';
import {Text, View, TouchableHighlight, TextInput } from 'react-native';

export default function DefaulInput({placeholder}){
    return(
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
        />
    )
}

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
}
  