import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/singnUpInScreen/signUpScreen';
import SignInScreen from '../screens/singnUpInScreen/signInScreen';

const AuthStack = createNativeStackNavigator();

export default function authStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'SignInScreen'} component={SignInScreen} />
      <AuthStack.Screen name={'SignUpScreen'} component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}
