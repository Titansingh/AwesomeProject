import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import TodoUi from './screens/todoUi/todoUi';
import HomeScreen from './screens/homeScreen/homeScreen';
import PasswordScreen from './screens/passwordScreen/passwordScreen';
import SignUpScreen from './screens/singnUpInScreen/signUpScreen';
import SignInScreen from './screens/singnUpInScreen/signInScreen';
function App() {
  return (
    <Provider store={store}>
      <SignInScreen />
    </Provider>
  );
}

export default App;
