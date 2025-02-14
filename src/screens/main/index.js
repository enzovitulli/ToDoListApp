import React, { Component } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import TodoList from '../../components/TodoList';
import { getTodos, addTodo, toggleTodo, deleteTodo, updateTodo } from '../../data/todos';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todos: getTodos(),
      editingId: null
    };
  }

  handleAddTodo = () => {
    if (this.state.inputText.trim()) {
      if (this.state.editingId) {
        updateTodo(this.state.editingId, this.state.inputText.trim());
        this.setState({ editingId: null });
      } else {
        addTodo(this.state.inputText.trim());
      }
      this.setState({ 
        inputText: '',
        todos: getTodos()
      });
    }
  };

  handleToggleTodo = (id) => {
    toggleTodo(id);
    this.setState({ todos: getTodos() });
  };

  handleDeleteTodo = (id) => {
    Alert.alert(
      "Delete Todo",
      "Delete this task?",
      [
        { text: "No" },
        { 
          text: "Yes",
          onPress: () => {
            deleteTodo(id);
            if (this.state.editingId === id) {
              this.setState({
                editingId: null,
                inputText: ''
              });
            }
            this.setState({ todos: getTodos() });
          }
        }
      ]
    );
  };

  handleUpdateTodo = (id, text) => {
    this.setState({
      editingId: id,
      inputText: text
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Todo List</Text>
          
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={this.state.inputText}
              onChangeText={(text) => this.setState({ inputText: text })}
              placeholder={this.state.editingId ? "Update todo..." : "Add a new todo..."}
              onSubmitEditing={this.handleAddTodo}
            />
            <TouchableOpacity 
              style={styles.addButton}
              onPress={this.handleAddTodo}
            >
              <Text style={styles.addButtonText}>
                {this.state.editingId ? "Update" : "Add"}
              </Text>
            </TouchableOpacity>
          </View>

          <TodoList
            todos={this.state.todos}
            onToggle={this.handleToggleTodo}
            onDelete={this.handleDeleteTodo}
            onUpdate={this.handleUpdateTodo}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f7' // iOS default background color
  },
  container: {
    flex: 1,
    padding: 15
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    fontSize: 17,
    fontFamily: '-apple-system'
  },
  addButton: {
    backgroundColor: '#007aff', // iOS default blue
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 10
  },
  addButtonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: '-apple-system',
    fontWeight: '600'
  }
});

export default MainScreen;