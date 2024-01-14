import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import AuthStackNavigator from './authStackNavigator';
import BottomTabNavigator from './bottomTabNavigation';


const MainStack = createNativeStackNavigator();

export default function mainNavigator({navigation}) {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigator}
      />
    </MainStack.Navigator>
  );
}
