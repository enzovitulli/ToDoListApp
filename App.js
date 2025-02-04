import { AppRegistry } from 'react-native';
import MainScreen from './src/screens/main';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);