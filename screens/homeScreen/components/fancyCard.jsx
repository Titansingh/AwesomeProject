import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FancyCard = ({props}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{uri: `${props.image}`}}
      />
      <View style={{flex:0.5,}}>
        <Text numberOfLines={1} style={styles.titleText}>{props.title}</Text>
        <Text style={styles.priceText}>{props.price}</Text>
        <Text style={styles.descriptionText}>{props.description}</Text>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  cardContainer: {
    width:350,
    margin: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    height: 400,
    elevation:20,
  },
  image: {
    flex: 0.5,
    borderTopLeftRadius: 40,
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    margin:5,
  },
  priceText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    margin:5,
    alignSelf:'flex-end',
  },
  descriptionText: {
    color: 'black',
    margin:5,
    fontSize: 20,
  },
});
