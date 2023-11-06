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

const signUpScreen = () => {
  let newUserSchema = object().shape({
    Name: string().required('Name is Required'),
    UserName: string().required('Username is Required'),
    Email: string().email(),
    PhoneNumber: number().min(10, 'Minium 10 Numbers'),
    Age: number().required().positive().integer(),
    Password: string()
      .required('Password is Required')
      .min(8, 'Minimun Length 8')
      .max(16, 'Maximum Length 8'),
  });
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Setup Your</Text>
        <Text style={styles.headingText}> Account</Text>
      </View>
      <ScrollView style={styles.containerMain}>
        <Text style={styles.titleText}>ACCOUNT DETAILS</Text>
        <Formik
          initialValues={{
            Name: '',
            UserName: '',
            Email: '',
            PhoneNumber: '',
            Age: '',
            Password: '',
          }}
          validationSchema={newUserSchema}
          onSubmit={values => console.log(values + 'vaibhav')}>
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
                handleChange={handleChange('Name')}
                values={values.Name}
                touched={touched.Name}
                errors={errors.Name}
                placeholder={'Full Name'}
                title={'Name'}
              />
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
                handleChange={handleChange('PhoneNumber')}
                values={values.PhoneNumber}
                touched={touched.PhoneNumber}
                errors={errors.PhoneNumber}
                placeholder={'Mobile Number'}
                title={'Mobile Number'}
                keyboardType="numeric"
              />
              <CustomTextInput
                handleChange={handleChange('Age')}
                values={values.Age}
                touched={touched.Age}
                errors={errors.Age}
                placeholder={'Age'}
                title={'Age'}
                keyboardType="numeric"
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
                <Button text={'SignUp'} handleSubmit={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default signUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: 'center',
    marginLeft: 20,
  },
  containerMain: {
    flex: 0.8,
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
