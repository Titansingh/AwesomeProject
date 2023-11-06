import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {object, number, InferType} from 'yup';
import {Formik} from 'formik';
import Button from '../../src/button';
import CustomTextInput from '../../src/customTextInput';

const passwordScreen = () => {
  const [isPasswordGenrated, setisPasswordGenrated] = useState(false);
  const [isUppercase, setisUppercase] = useState(false);
  const [isLowercase, setisLowercase] = useState(false);
  const [symbols, setsymbols] = useState(false);

  let passSchema = object().shape({
    passwordLength: number()
      .min(4, 'Must be more than 4')
      .max(16, 'Must be less than 16')
      .required('Please enter a number'),
  });

  return (
    <View style={{flex: 1}}>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={passSchema}
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
              handleChange={handleChange('passwordLength')}
              values={values.passwordLength}
              keyboardType={'numeric'}
              touched={touched.passwordLength}
              errors={errors.passwordLength}
              placeholder={'Enter a Number'}
              title={'Password Length'}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <Button handleSubmit={handleSubmit} text={'Generate'} />
              <Button handleSubmit={handleSubmit} text={'Reset'} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default passwordScreen;

const styles = StyleSheet.create({});
