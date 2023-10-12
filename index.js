/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/pages/home'
import Relawan from './src/pages/Relawan';
import RelawanDetail from './src/pages/RelawanDetail';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

AppRegistry.registerComponent(appName, () => RelawanDetail);
