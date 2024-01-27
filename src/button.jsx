import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


const Button = ({ text = "Click Me",backgroundColor,textColor, handleSubmit }) => {
  
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor,borderColor:textColor }]} onPress={handleSubmit}>
      <Text style={[styles.buttonText,{color:textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 11,
    borderWidth:3,
    elevation:5,
    width: '80%',
    margin:10,
    
    
  },
  buttonText: {
    fontSize: 32,
    // fontFamily:'Poppins',
    fontWeight:'700',
    overflowWrap: 'break-word',

  },
});
