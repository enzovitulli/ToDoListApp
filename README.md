# Todo List App

A simple React Native todo list application built with Expo, featuring iOS-style design and smooth interactions.

## Features

- Add, update, and delete todos
- Toggle completion status
- Double-tap to edit todos
- Deletion confirmation
- iOS-style design system
- Safe area handling
- Smooth scrolling

## Project Structure
```
TodoListApp/
├── assets/
│   └── bin.png           # Delete icon
├── src/
│   ├── components/
│   │   └── TodoList/     # Todo list component with ScrollView
│   ├── screens/
│   │   └── main/         # Main screen with todo management
│   └── data/
│       └── todos.js      # Todo data operations
├── App.js                # Root component
└── documentation.md      # Detailed documentation
```

## Running the App

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
expo start
```

3. Run on:
- iOS (recommended): Press 'i'
- Android: Press 'a'
- Web: Press 'w'

## Interactions

- Tap task: Toggle completion
- Double tap: Edit task
- Tap bin icon: Delete task

## Styling

The app follows iOS design guidelines with:
- System font (-apple-system)
- iOS standard colors
- Native-feeling animations
- Proper spacing and padding