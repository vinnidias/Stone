import React from 'react';
import {Text, View, TouchableHighlight, TextInput } from 'react-native';
import IconButton from './src/components/IconButton'
import DefaultInput from './src/components/DefaultInput'
import FileSelector from './src/components/FileSelector'

export default function App() {
  return (
    <View style={styles.AppContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Create your App
        </Text>
        <IconButton icon={'✖️'}/>
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>
          APP NAME
        </Text>
        <DefaultInput
          placeholder={'Enter App Display Name'}
        />
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>
          APP ICON
        </Text>
        <FileSelector placeholder={'Select a File'}/>
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>
          ICON'S BACKGROUND COLOR
        </Text>
      </View>
    </View>
  );
}

const styles ={
  AppContainer:{
    padding: 20,
    backgroundColor: 'rgba(34,139,34, 0.2)',
    flex: 1
  },
  headerContainer:{
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText:{
    fontSize: 22,
    fontWeight: 'bold'
  },
  appNameContainer:{
    margin: 10
  },
  appNameText:{
    fontSize:18,
    fontWeight: 'bold'
  },
}
