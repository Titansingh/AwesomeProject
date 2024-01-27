import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Button from '../../src/button'

const SignUpInScreen = () => {
    const { colors } = useTheme();
  return (
    <View style={styles.Container}>
      <View style={styles.topContainer}>
      <View style={styles.triangle}></View>
      <View style={styles.square}></View>
      <View style={styles.line}></View>
      <View><Text style={{marginLeft:30,marginTop:60,color: 'black', fontSize: 32, fontWeight: '700', overflowWrap: 'break-word',}}>Lawyer Connect</Text>
      
      <View style={{flexDirection:'row',marginLeft:30,}}>
      <Text style={{fontSize:15,fontWeight: '400',overflowWrap: 'break-word',}}>Cross your </Text>
      <Text style={{fontSize:15,fontWeight: '700',overflowWrap: 'break-word',color:colors.primary}}>Struggle </Text>
      <Text style={{fontSize:15,fontWeight: '400',overflowWrap: 'break-word',}}>with us</Text>
      </View>
      </View>
      </View>
      <View style={styles.bottomContainer}>
      <Button text={'Log In'} textColor={"#FFFFFF"} backgroundColor={colors.primary}/>
      <Button text={'Sign Up'} textColor={colors.primary} backgroundColor={"#FFFFFF"}/>
      <View style={styles.semicircle}></View>
      </View>
    </View>
  )
}

export default SignUpInScreen

const styles = StyleSheet.create({
    Container: {
        flex:1,
        position: 'relative'
    },
    topContainer: {
        flex:0.6,   
        
        justifyContent:'center',
    },
    bottomContainer: {
        flex:0.4,
        justifyContent:'center',
        alignItems:'center',    
    },
    triangle: {
        width: 180,
        height: 180,
        left: -90,
        top: 40,
        position: 'absolute',
        transform: [{ rotate: '45deg' }],
        transformOrigin: '0 0',
        backgroundColor: '#084161',
      },
      square: {
        width: 15,
        height: 15,
        left: 118,
        top: 122,
        position: 'absolute',
        transform: [{ rotate: '45deg' }],
        transformOrigin: '0 0',
        backgroundColor: '#084161',
        
      },
      line: {
        width: 280,
        height: 0,
        left: 130,
        top: 127,
        backgroundColor:'#084161',
        position: 'absolute',
        borderWidth: 2.80,
        borderColor: '#084161',
      },
      semicircle: {
        position:"absolute",
        width: '60%',
        height: '70%',
        bottom:40,
        right:'-30%',
        backgroundColor: '#084161',
        borderRadius: 9999,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, 
        zIndex:-1,
      },
})