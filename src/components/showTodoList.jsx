import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../../redux/apiSlice/todoSlice';

export default function ShowTodoList() {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // Store the item being edited
  const [updatedText, setUpdatedText] = useState(''); // Store the updated text
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemoveButtonPress = (id) => {
    dispatch(removeTodo(id));
  };

  const handleUpdateButtonPress = (payload) => {
    dispatch(updateTodo(payload));
    setModalVisible(false); // Close the modal after updating
  };

  const handleEditButtonPress = (item) => {
    setEditingItem(item);
    setUpdatedText(item.text); // Set the initial value for the input field
    setModalVisible(true);
  };

  const Item = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{item.text}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEditButtonPress(item)}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRemoveButtonPress(item.id)}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.editInput}
            value={updatedText}
            onChangeText={(text) => setUpdatedText(text)}
          />
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              handleUpdateButtonPress({ id: editingItem.id, text: updatedText })
            }>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setModalVisible(false)}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
  },
  textName: {
    fontSize: 18,
    color: '#841584',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#841584',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
  },
  flatList: {
    flex: 1,
  },
  modalContainer: {
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  editInput: {
    backgroundColor: '#fff',
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  editButton: {
    backgroundColor: '#841584',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
});
