import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FlatCards from './components/flatCards';
import FancyCard from './components/fancyCard';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [dataProduct, setdataProduct] = useState([]);

  useEffect(() => {
    getData();
    getProductData();
  }, []);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

      console.log("get data called")
  };

  const getProductData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setdataProduct(data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      console.log("get Product data called")
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Flat Cards</Text>
        <View style={styles.flexContainer}>
          <FlatCards color="blue" prop={{name: 'Blue Card'}} />
          <FlatCards color="red" prop={{name: 'Red Card'}} />
          <FlatCards color="green" prop={{name: 'Green Card'}} />
        </View>
        <TouchableOpacity onPress={getData}>
          <Text style={styles.heading}>Elevated Cards</Text>
        </TouchableOpacity>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({item}) => <FlatCards color="#87CEEB" prop={item} />}
          keyExtractor={item => item.id.toString()}
        />
        <Text style={styles.heading}>Fancy Cards</Text>
        <FlatList
          horizontal={true}
          data={dataProduct}
          renderItem={({item}) => <FancyCard color="#87CEEB" props={item} />}
          keyExtractor={item => item.id.toString()}
        />
        
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 30,
    margin: 10,
    fontWeight: 'bold',
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
