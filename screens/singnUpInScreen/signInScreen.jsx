import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { object, string } from 'yup';
import { Formik } from 'formik';
import CustomTextInput from '../../src/customTextInput';
import Button from '../../src/button';
import { useLoginUserMutation } from '../../redux/apiSlice/authenticationApi';
import * as Animatable from 'react-native-animatable';

const SignInScreen = ({ navigation }) => {
  const {colors} = useTheme();
  const [loginUser] = useLoginUserMutation();

  const userSchema = object().shape({
    Email: string().email().required('Email is Required'),
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
    <KeyboardAvoidingView style={{ flex: 1 ,position: 'relative',}}>
      
       
        <Formik
          initialValues={{
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
            <View style={styles.containerMain}>
              <View  style={styles.containerTop}>
              <Animatable.View   style={styles.triangle}><Animatable.View animation={'fadeInLeft'} duration={1400} style={styles.triangleSmall}></Animatable.View></Animatable.View>
        <View style={styles.square}></View>
        <Animatable.View animation={'fadeInRight'} duration={1400} style={styles.line}></Animatable.View>
       
             
              <CustomTextInput
                handleChange={handleChange('Email')}
                value={values.Email}
                touched={touched.Email}
                error={errors.Email}
                placeholder={'Enter your email'}
                title={'Email'}
                iconName={'mail'}
              />
              <CustomTextInput
                handleChange={handleChange('Password')}
                value={values.Password}
                touched={touched.Password}
                error={errors.Password}
                placeholder={'Enter your password'}
                title={'Password'}
                secureTextEntry={true}
                iconName={'lock-closed'}
              />
              
               <TouchableOpacity onPress={() => {}}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
              

              </View>
              <View style={styles.containerBottom}>
              
              <Button  text={'Login'} handleSubmit={handleSubmit} backgroundColor={colors.primary} textColor={'black'} />
              <TouchableOpacity onPress={() => {console.log('create account')}}>
                <Text style={styles.createAccountText}>Create Account?</Text>
              </TouchableOpacity>
              <Animatable.View animation={'fadeInRight'} duration={1400} style={styles.semicircle}></Animatable.View>
            </View>
            </View>
            
          )}
          
        </Formik>
        
  
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  containerMain:{
    flex:1,
  },
  containerTop: {
    flex: 0.6,
    justifyContent:'flex-end',  
  },
  containerBottom: {
    flex: 0.4,
    alignItems:'center',
    justifyContent:'center',
  },
  createAccountText: {
    fontSize: 16,
    fontWeight: '700',
    color:'black',
    textDecorationLine:'underline'
  },
  forgotPasswordText: {
    fontSize: 14,
    fontWeight: '400',
    color:'#FCD249',
    alignSelf:'flex-end',
    marginRight:30,
    textDecorationLine:'underline'
  },
  triangle: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width: 180,
    height: 180,
    left: -90,
    top: 40,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    transformOrigin: '0 0',
    backgroundColor: '#FCD249',
    elevation:5,
  },
  triangleSmall: {
    width: 100,
    height: 100,
    backgroundColor: '#ffff',
    elevation:5,
    
  },
  square: {
    width: 15,
    height: 15,
    left: 118,
    top: 122,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    transformOrigin: '0 0',
    backgroundColor: '#FCD249',
    elevation:5,
  },
  line: {
    width: 280,
    height: 0,
    left: 130,
    top: 127,
    backgroundColor: '#FCD249',
    position: 'absolute',
    borderWidth: 2.8,
    borderColor: '#FCD249',
    elevation:5,
  },
  semicircle: {
    position: 'absolute',
    width: '60%',
    height: '70%',
    bottom: 40,
    right: '-30%',
    backgroundColor: '#FCD249',
    borderRadius: 9999,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
    zIndex: -1,
  },
});
