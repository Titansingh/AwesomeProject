import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import BottomTabNavigator from './navigation/bottomTabNavigation';
import MainNavigator from './navigation/mainNavigator';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
