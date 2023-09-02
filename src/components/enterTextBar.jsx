import React, { useState } from 'react';
import { View, SafeAreaView, TextInput, StyleSheet, Button } from 'react-native';
import { addTodo } from '../../redux/apiSlice/todoSlice';
import { useDispatch } from 'react-redux';
const EnterTextBar = () => {
  const [text, onChangeText] = useState('');
  const dispatch = useDispatch();

  const handleAddButtonPress = () => {
    if(text!=''){
    dispatch(addTodo(text));
    onChangeText('');}
  };

  return (
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Enter a Name'
        />
        <Button
          title="Add"
          color="#841584"
          onPress={handleAddButtonPress}
        />
      </View>
    
  );
};

const styles = StyleSheet.create({
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#fff',
    elevation: 2, // Add elevation (shadow) for a material design look
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
});

export default EnterTextBar;
