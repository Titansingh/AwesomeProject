import { View, Text } from 'react-native'
import React,{useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppStackNavigator from './AppStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const MainStackNavigator = () => {
    const [authToken, setAuthToken] = useState('')
    useEffect(()=>{getData()},[])
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('token');
          if (value !== null) {
            setAuthToken(value)
          }
        } catch (e) {
          // error reading value
          console.log(e)
        }
      };
      
  return (
    <View style={{flex:1}}>
      {!authToken ? <AuthStackNavigator /> : <AppStackNavigator />}
    </View>
  )
}

export default MainStackNavigator