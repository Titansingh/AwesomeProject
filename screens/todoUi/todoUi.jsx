import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import EnterTextBar from './components/enterTextBar';
import ShowTodoList from './components/showTodoList';

function todoUi() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Exam Buddy</Text>
      <EnterTextBar />
      <Text style={styles.subHeadingText}>PDF List</Text>
      <ShowTodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff', // Set a background color for the entire app
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#841584',
    marginTop: 20, // Add margin top for spacing
  },
  subHeadingText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '800',
  },
});

export default todoUi;
