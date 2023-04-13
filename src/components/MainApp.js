import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const MainApp = () => {
    //using react state
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.length > 0) {
      const todo = { key: Date.now().toString(), text: newTodo };
      setTodos([...todos, todo]);
      setNewTodo("");
    }
  };

  const removeTodo = (key) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Todo App</Text>
      <View style={styles.txtContainer}>
        <TextInput
          style={styles.entry}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Enter a new task"
        />
        <TouchableOpacity style={styles.btn} onPress={addTodo}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.todoItem} onPress={() => removeTodo(item.key)}>
            <Text style={styles.todoText}>{item.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'azure',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  txtContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  entry: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
  },
  btn: {
    marginLeft: 8,
    padding: 8,
    backgroundColor: 'pink',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItem: {
    padding: 16,
    marginTop: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  todoText: {
    fontSize: 16,
  },
});

export default MainApp;
