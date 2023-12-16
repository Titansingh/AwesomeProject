import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import AuthStackNavigator from './AuthStackNavigator';

const MainStack = createNativeStackNavigator();

export default function mainNavigator({navigation}) {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen
        name={'AuthStackNavigator'}
        component={AuthStackNavigator}
      />
    </MainStack.Navigator>
  );
}
