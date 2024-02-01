import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import BottomTabNavigator from './navigation/bottomTabNavigation';
import MainNavigator from './navigation/mainNavigator';
import AuthStackNavigator from './navigation/authStackNavigator';


const LightTheme = {
  dark: false,
  colors: {
    primary: '#FCD249',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: '#b7b8fb',
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: '#FCD249',
    background: 'rgb(0, 0, 0)',
    card: 'rgb(255, 255, 255)',
    text: '#ffff',
    border: 'rgb(199, 199, 204)',
    notification: '#b7b8fb',
  },
};


function App() {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <AuthStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
