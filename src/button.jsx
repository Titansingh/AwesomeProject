import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const button = ({text, handleSubmit}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default button;

const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    elevation: 2,
    width: '30%',
  },
  buttonText: {
    fontSize: 20,
    color: '#8584F9',
  },
});
