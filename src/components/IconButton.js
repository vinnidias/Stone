import React from 'react';
import { TouchableHighlight, Text } from 'react-native'

export default function IconButton({onPress, icon}){
    return(
        <TouchableHighlight onPress={onPress}>
          <Text style={styles.textButton}>
            {icon}
          </Text>
        </TouchableHighlight>
    )
}

const styles = {
    textButton:{
        fontWeight: 'bold',
        fontSize: 16
    } 
}