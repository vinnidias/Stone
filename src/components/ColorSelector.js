import React, { useState } from 'react';
import {TextInput, Text, View,} from 'react-native';

export default function ColorSelector({onChangeText, value}){
    const [colorSelected, setColor] = useState('#228b22')
    return(
       <View style={styles.selectorContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Pick a color'
                onChangeText={text => {setColor(text); onChangeText(text);}}
                maxLength={10}
                value={value}
           />
            <View style={{
                backgroundColor: `${colorSelected}`, 
                height: 50, 
                width: 100,
                alignSelf: "flex-end",
                marginLeft: 120,
                margin: -10,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5
                }}
            >
                <Text style={styles.titleButton}>
                    {colorSelected}
                </Text>
           </View>
       </View>
    )
};

const styles = {
    selectorContainer: {
        flexDirection: 'row',
        height: 50,
        width: 300,
        borderRadius: 5,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        padding: 10,
    },
    textInput:{
        fontWeight: 'bold',
    },
    titleButton:{
        fontWeight: 'bold',
        fontSize: 12,
        color: 'white',
        alignSelf: 'center',
        margin: 15
    }
};