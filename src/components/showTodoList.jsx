import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useSelector} from 'react-redux';

export default function showTodoList() {
  const todos = useSelector(state => state.todos);

  const Item = ({text}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Make Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({item}) => <Item text={item.text} />}
        keyExtractor={item => item.id}
        style={styles.flatList} // Set the style here
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    width: 350,
  },
  item: {
    
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    margin: 16,
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: '#841584',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#fff',
  },
  flatList: {
    flex: 1,
  },
});
