import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function WideButton({title, onPress}){
    return(
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.buttonTitle}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles={
    buttonContainer:{
        height: 50,
        width: 300,
        borderRadius: 5,
        backgroundColor: '#228b22',
        margin: 10,
        padding: 15
    },
    buttonTitle:{
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white',
        alignSelf: 'center'
    }
}