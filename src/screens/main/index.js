import React, {Component, useState } from 'react';
import {View, Text, StyleSheet, TurboModuleRegistry} from 'react-native';
import TodoList from 'TodoListApp/scr/components/ToDoList';

class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {text: "Tarea 1", done: false},
        {text: "Tarea 2", done: false},
        {text: "Tarea 3", done: false},
        {text: "Tarea 4", done: true},
        {text: "Tarea 5", done: false},
      ]

    };
};

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ToDo List App</Text>
      <TextInput
        style={styles.input}
        placeholder="Nuevo TODO"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <TouchableOpacity onPress={addTodo} style={styles.addButton}>
        <Text style={styles.addButtonText}>Añadir</Text>
      </TouchableOpacity>
      <TodoList todos={todos} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MainScreen;