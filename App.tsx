import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import MainStackNavigator from './navigation/MainStackNavigator';

import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';


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

let persistor = persistStore(store)
function App() {

  const scheme = useColorScheme();



  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}></PersistGate>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
