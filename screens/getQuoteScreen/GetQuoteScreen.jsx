import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { object, string } from 'yup';
import { Formik } from 'formik';
import CustomTextInput from '../../src/customTextInput';
import Button from '../../src/button';
import * as Animatable from 'react-native-animatable';

const GetQuoteScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [enteredData, setEnteredData] = useState({});

  const userSchema = object().shape({
    Name: string().required('Name is Required'),
    BillNo: string().required('Bill number is Required'),
  });

  const handleGenerate = (values) => {
    console.log(values);
    setEnteredData(values);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, position: 'relative' }}>
      <Formik
        initialValues={{
          Name: '',
          BillNo: '',
        }}
        validationSchema={userSchema}
        onSubmit={(values, { resetForm }) => {
          handleGenerate(values);
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
            <View style={styles.containerTop}>
              <Animatable.View style={styles.triangle}>
                <Animatable.View
                  animation={'fadeInLeft'}
                  duration={1400}
                  style={styles.triangleSmall}
                ></Animatable.View>
              </Animatable.View>
              <View style={styles.square}></View>
              <Animatable.View
                animation={'fadeInRight'}
                duration={1400}
                style={styles.line}
              ></Animatable.View>

              <CustomTextInput
                handleChange={handleChange('Name')}
                value={values.Name}
                touched={touched.Name}
                error={errors.Name}
                placeholder={'Enter your Name'}
                title={'Name'}
                iconName={'person'}
              />
              <CustomTextInput
                handleChange={handleChange('BillNo')}
                value={values.BillNo}
                touched={touched.BillNo}
                error={errors.BillNo}
                placeholder={'Enter your Bill No'}
                title={'BillNo'}
                iconName={'document-text'}
              />
            </View>
            <View style={styles.containerBottom}>
              <Button
                text={'Generate'}
                handleSubmit={handleSubmit}
                backgroundColor={colors.primary}
                textColor={'black'}
              />
              <Animatable.View
                animation={'fadeInRight'}
                duration={1400}
                style={styles.semicircle}
              ></Animatable.View>
            </View>
          </View>
        )}
      </Formik>

      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Proposal Report</Text>
            <Text>Dear {enteredData.Name},</Text>
            <Text>
                Galo Energy want to thank you for the opportunity to offer you the proposal of solar system for your beautiful home. We are providing sustainable designs for more than 5 Years and our talented crew has installed over 10 home solar installation in Delhi itself. Please let us know what questions you still have about the enclosed proposal and we will respond quickly.
            </Text>
            <Text>Regards</Text>
            <Text>
            Galo Energy Pvt Ltd</Text>
           
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default GetQuoteScreen;

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    borderColor:'#FCD249',
    borderWidth:3,
   
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf:'center',
  },
  closeButton: {
    fontSize: 16,
    color: 'red',
    marginTop: 10,
    alignSelf:'center',
  },
});
