import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/HomeScreen';


const AppStack = createNativeStackNavigator();

export default function AppStackNavigator() {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen name={'HomeScreen'} component={HomeScreen} options={{headerShown: false}}/>
    </AppStack.Navigator>
  );
}
