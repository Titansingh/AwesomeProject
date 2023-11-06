import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlatCards = ({color, prop}) => {
  return (
    <View style={[styles.card, {backgroundColor: color}]}>
      <Text style={styles.text}>{prop.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default FlatCards;
