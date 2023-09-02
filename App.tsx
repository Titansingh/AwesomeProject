import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {store} from './redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <Text>Hello world</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
