import React from 'react'
import {View, Text, Image,} from 'react-native'

export default function AppCard({iconColor, source, appName, appCategory}){
    return(
        <View style={styles.appCardContainer}>
            <View style={{
                width: 90,
                backgroundColor: iconColor,
                borderBottomLeftRadius: 5,
                borderTopLeftRadius: 5,
            }}>
                <Image source={require('../imgs/Ximages.png')} style={styles.image}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.appName}>
                    {appName}
                </Text>
                <Text style={styles.appCategory}>
                    {appCategory}
                </Text>
                <Text style={styles.newApp}>
                    New App
                </Text>
            </View>
        </View>
    )
}

const styles = { 
    appCardContainer:{
        height: 90,
        width: 300,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5
    },
    image:{
        height: 50,
        width: 50,
        alignSelf: 'center',
        marginVertical: 20,
        borderRadius: 100,
    },
    infoContainer:{
        padding: 10
    },
    appName:{
        fontWeight: 'bold',
        fontSize: 18,
    },
    appCategory:{
        fontSize: 14,
        marginVertical: 5
    },
    newApp:{
        fontWeight: 'bold',
        fontSize: 12,
    }
}