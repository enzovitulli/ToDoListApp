// Storage for tasks
let todos = [
  { id: "1", text: "Tarea 1", completed: false },
  { id: "2", text: "Tarea 2", completed: false },
  { id: "3", text: "Tarea 3", completed: false },
  { id: "4", text: "Tarea 4", completed: true },
  { id: "5", text: "Tarea 5", completed: false },
];

// Get all todos
const getTodos = () => todos;

// Add a new task
const addTodo = (text) => {
  const newTodo = {
    id: Date.now().toString(),
    text,
    completed: false,
  };
  todos.push(newTodo);
  return newTodo;
};

// Toggle task completion
const toggleTodo = (id) => {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
};

// Update a task
const updateTodo = (id, newText) => {
  todos = todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo));
};

// Delete a task
const deleteTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

// Export all functions
export { getTodos, addTodo, toggleTodo, updateTodo, deleteTodo };
