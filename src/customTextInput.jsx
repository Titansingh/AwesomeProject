import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const customTextInput = ({
  handleChange,
  values,
  keyboardType='default',
  touched,
  errors,
  placeholder,
  title,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleChange}
        value={values}
        keyboardType={keyboardType}
      />
      {touched && errors && <Text style={styles.errorText}>{errors}</Text>}
    </View>
  );
};

export default customTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginHorizontal:20,
  },
  label: {
    paddingStart: 20,
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 20,
    color:'#B7B8FB',
    
  },
  input: {
    height: 50,
    color:'white',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 20,
    paddingStart: 20,
    borderColor: 'white',
  },
  errorText: {
    color: 'black',
    paddingEnd: 20,
    marginTop: 5,
    fontSize: 17,
    alignSelf: 'flex-end',
  },
});
