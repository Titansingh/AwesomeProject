import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/singnUpInScreen/SignUpScreen';
import SignInScreen from '../screens/singnUpInScreen/SignInScreen';
import SignUpInScreen from '../screens/singnUpInScreen/SignUpInScreen';

const AuthStack = createNativeStackNavigator();

export default function authStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'SignUpInScreen'} component={SignUpInScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name={'SignInScreen'} component={SignInScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name={'SignUpScreen'} component={SignUpScreen} options={{headerShown: false}} />
    </AuthStack.Navigator>
  );
}
