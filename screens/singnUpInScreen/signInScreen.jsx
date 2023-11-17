import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
    <KeyboardAvoidingView style={{flex: 1}}>
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
          onSubmit={values => console.log(values + 'values login screen')}>
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
                values={values.UserName}
                touched={touched.UserName}
                errors={errors.UserName}
                placeholder={'Username'}
                title={'UserName'}
              />
              <CustomTextInput
                handleChange={handleChange('Email')}
                values={values.Email}
                touched={touched.Email}
                errors={errors.Email}
                placeholder={'Email'}
                title={'Email'}
              />

              <CustomTextInput
                handleChange={handleChange('Password')}
                values={values.Password}
                touched={touched.Password}
                errors={errors.Password}
                placeholder={'Password'}
                title={'Password'}
              />
              <View style={{alignItems: 'flex-end'}}>
                <Button text={'Login'} handleSubmit={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text style={styles.titleText}>
            Create Account
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
