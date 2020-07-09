import React from 'react';
import {Text, TouchableOpacity } from 'react-native'

export default function IconButton({onPress, icon}){
    return(
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.textButton}>
            {icon}
          </Text>
        </TouchableOpacity>
    )
}

const styles = {
    textButton:{
        fontWeight: 'bold',
        fontSize: 16
    } 
}