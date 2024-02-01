import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Button from '../../src/button';
import * as Animatable from 'react-native-animatable';

const SignUpInScreen = ({ navigation }) => {
  const { colors } = useTheme();

  const handleLoginClick = () => {
    navigation.navigate('SignInScreen');
    console.log('clicked')
  };

  const handleSignupClick = () => {
    navigation.navigate('GetQuoteScreen');
    console.log('clicked')
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Animatable.View   style={styles.triangle}><Animatable.View animation={'fadeInLeft'} duration={1400} style={styles.triangleSmall}></Animatable.View></Animatable.View>
        <View style={styles.square}></View>
        <Animatable.View animation={'fadeInRight'} duration={1400} style={styles.line}></Animatable.View>
        <View>
          <Text style={{ marginLeft: 30, marginTop: 60, color: 'black', fontSize: 32, fontWeight: '700', }}>
            Galo Energy
          </Text>

          <View style={{ flexDirection: 'row', marginLeft: 30 }}>
            <Text style={{ fontSize: 15, fontWeight: '400' }}>Specializing in </Text>
            <Text style={{ fontSize: 15, fontWeight: '700', color: colors.primary }}>Solar </Text>
            <Text style={{ fontSize: 15, fontWeight: '400' }}>Energy applications</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Button text={'Log In'} textColor="black" backgroundColor={colors.primary} handleSubmit={handleLoginClick} />
        <Button text={'Get Quote'} textColor={colors.primary} backgroundColor="#FFFFFF" handleSubmit={handleSignupClick} />
        <Animatable.View animation={'fadeInRight'} duration={1400} style={styles.semicircle}></Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  topContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
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
