import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetQuoteScreen from '../screens/getQuoteScreen/GetQuoteScreen';
import SignInScreen from '../screens/singnUpInScreen/signInScreen';
import SignUpInScreen from '../screens/singnUpInScreen/SignUpInScreen';

const AuthStack = createNativeStackNavigator();

export default function authStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'SignUpInScreen'} component={SignUpInScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name={'SignInScreen'} component={SignInScreen} options={{headerShown: false}}/>
      <AuthStack.Screen name={'GetQuoteScreen'} component={GetQuoteScreen} options={{headerShown: false}} />
    </AuthStack.Navigator>
  );
}
