import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const CustomTextInput = ({
  handleChange,
  values,
  keyboardType,
  touched,
  error,
  placeholder,
  iconName,
  secureTextEntry=false,
}) => {
  keyboardType = keyboardType || 'default'; // Default to 'default' if not provided

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Icon style={{margin:10,}} name={iconName} color={'#FCD249'} size={35} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="grey"
          onChangeText={handleChange}
          value={values}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 30,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 8,
  },
  input: {
    height: 60,
    fontSize: 14,
      
  },
  errorText: {
    color: 'red',
    paddingEnd: 5,
    marginTop: 5,
    fontSize: 12,
    alignSelf: 'flex-end',
  },
});
