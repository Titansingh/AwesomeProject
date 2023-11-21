import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import TodoUi from './screens/todoUi/todoUi';
import HomeScreen from './screens/homeScreen/homeScreen';
import PasswordScreen from './screens/passwordScreen/passwordScreen';

import MainNavigator from './navigation/mainNavigator';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <MainNavigator  />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
