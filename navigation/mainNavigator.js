import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import AuthStackNavigator from './authStackNavigator';

const MainStack = createNativeStackNavigator();

export default function mainNavigator({navigation}) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'AuthStackNavigator'}
        component={AuthStackNavigator}
      />
    </MainStack.Navigator>
  );
}
