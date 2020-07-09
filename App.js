import React, { useState,} from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';
import IconButton from './src/components/IconButton'
import DefaultInput from './src/components/DefaultInput'
import FileSelector from './src/components/FileSelector'
import ColorSelector from './src/components/ColorSelector'
import AppCard from './src/components/AppCard'
import WideButton from './src/components/WideButton'


export default function App() {
  const [appName, setAppName] = useState('')
  const [appCategory, setCategory] = useState('')
  const [appColor, setColor] = useState('')
  const appInfos = {name: appName, category: appCategory, backgroundColor: appColor}
  
  return (
    <ScrollView style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Create your App
        </Text>
        <IconButton 
          icon={'✖️'} 
          onPress={()=>{
            Alert.alert(
              'Do you want to leave?',
              '',
            [
              {
                text: 'No',
                onPress: ()=> console.log('Stay in aplication')
              },
              {
                text: 'Yes',
                onPress: ()=> console.log('Shut down')
              }
            ])
          }}
          />
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>
          APP NAME
        </Text>
        <DefaultInput
          placeholder={'Enter App Display Name'}
          onChangeText={(text)=> setAppName(text)}
          value={appName}
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
        <ColorSelector 
          onChangeText={(text)=> setColor(text)}
          value={appColor}
          />
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>
          CATEGORY
        </Text>
        <DefaultInput 
          placeholder={'Select Category'} 
          onChangeText={(text)=> setCategory(text)}
          value={appCategory}
        />
      </View>
      <View style={styles.borderTopContainer}>
        <Text style={styles.appNameText}>
          APP'S CARD PREVIEW
        </Text>
        <AppCard iconColor={appColor} appName={appName} appCategory={appCategory}/>
      </View>
      <WideButton 
        title={'SAVE APP'}
        onPress={()=>{
          if(appName && appCategory && appColor !== ''){
            console.log({appInfos});
            Alert.alert('Saved successfully');
            setColor('');
            setAppName('');
            setCategory('')
          }else{
            Alert.alert('Some data is incomplete!')
          }
          
        }}
        />
    </ScrollView>
  );
}

const styles ={
  appContainer:{
    padding: 20,
    backgroundColor: 'rgba(34,139,34, 0.2)',
    flex: 1
  },
  headerContainer:{
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText:{
    fontSize: 22,
    fontWeight: 'bold'
  },
  appNameContainer:{
    marginVertical: 2
  },
  appNameText:{
    fontSize:18,
    fontWeight: 'bold'
  },
  borderTopContainer:{
    margin: 10,
    paddingTop: 10,
    borderTopWidth: 2,
    borderColor: 'rgba(34,139,34, 0.3)'
  },
}
