import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const TodoList = ({ todos, onToggle, onDelete, onUpdate }) => {
  let lastTap = null;
  const handleDoubleTap = (todo) => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;
    
    if (lastTap && (now - lastTap) < DOUBLE_TAP_DELAY) {
      onUpdate(todo.id, todo.text);
    } else {
      lastTap = now;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {todos.map((todo) => (
        <TouchableOpacity
          key={todo.id}
          style={styles.todoItem}
          onPress={() => {
            handleDoubleTap(todo);
            onToggle(todo.id);
          }}
        >
          <Text style={[
            styles.todoText,
            todo.completed && styles.completedTodo
          ]}>
            {todo.text}
          </Text>
          <TouchableOpacity 
            onPress={() => onDelete(todo.id)}
            style={styles.deleteButton}
          >
            <Image 
              source={require('../../../assets/bin.png')} 
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  todoItem: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoText: {
    fontSize: 17,
    fontFamily: '-apple-system',
    flex: 1
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: '#8e8e93'
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: '#ff3b30' // iOS default red
  }
});

export default TodoList;
