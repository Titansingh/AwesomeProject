import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { object, string } from 'yup';
import { Formik } from 'formik';
import CustomTextInput from '../../src/customTextInput';
import Button from '../../src/button';
import { useLoginUserMutation } from '../../redux/apiSlice/authenticationApi';

const SignInScreen = ({ navigation }) => {
  const [loginUser] = useLoginUserMutation();

  const userSchema = object().shape({
    UserName: string().required('Username is Required'),
    Email: string().email(),
    Password: string().required('Password is Required'),
  });

  const handleLogin = async (values) => {
    try {
      const response = await loginUser(values).unwrap(); // Assuming the login mutation returns a Promise
      console.log('Login response:', response);
      // Handle successful login, e.g., navigate to a new screen
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, display error message, etc.
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
      </View>
      <ScrollView style={styles.containerMain}>
        <Text style={styles.titleText}>ACCOUNT DETAILS</Text>
        <Formik
          initialValues={{
            UserName: '',
            Email: '',
            Password: '',
          }}
          validationSchema={userSchema}
          onSubmit={(values, { resetForm }) => {
            handleLogin(values);
            resetForm(); // Reset the form after submission
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View>
              <CustomTextInput
                handleChange={handleChange('UserName')}
                value={values.UserName}
                touched={touched.UserName}
                error={errors.UserName}
                placeholder={'Username'}
                title={'UserName'}
              />
              <CustomTextInput
                handleChange={handleChange('Email')}
                value={values.Email}
                touched={touched.Email}
                error={errors.Email}
                placeholder={'Email'}
                title={'Email'}
              />
              <CustomTextInput
                handleChange={handleChange('Password')}
                value={values.Password}
                touched={touched.Password}
                error={errors.Password}
                placeholder={'Password'}
                title={'Password'}
                secureTextEntry // assuming this is for password input
              />
              <View style={{ alignItems: 'flex-end' }}>
                <Button text={'Login'} handleSubmit={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
        <TouchableOpacity
          style={{ alignSelf: 'center' }}
          onPress={() => {
            navigation.navigate('SignUpScreen');
          }}
        >
          <Text style={styles.titleText}>Create Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

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
