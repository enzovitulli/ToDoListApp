import React, {Fragment} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoList = ({ todos }) => {
  return (
    <View>
      {todos.map((todo) => (
        <View key={todo.id} style={styles.todoContainer}>
          <Text style={styles.todoText}>- {todo.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 16,
  },
});

export default TodoList;