import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
//custom components
import CustomTextInput from '../../src/customTextInput';
import Button from '../../src/button';
//validation
import {object, string, number, date, InferType} from 'yup';
import {Formik} from 'formik';

const signInScreen = () => {
  let userSchema = object().shape({
    UserName: string().required('Username is Required'),
    Email: string().email(),
    Password: string().required('Password is Required'),
  });
  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>
      <View style={styles.containerMain} >
        <Text>vaibhav</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default signInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: 'center',
    marginLeft: 20,
  },
  containerMain: {
    flex: 0.6,
    backgroundColor: '#8584F9',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleText: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 17,
    color: '#b7b8fb',
    fontWeight: 'bold',
  },
});
