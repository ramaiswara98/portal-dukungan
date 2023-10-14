/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/pages/home'
import Relawan from './src/pages/Relawan';
import RelawanDetail from './src/pages/RelawanDetail';
import Pendukung from './src/pages/Pendukung';
import PendukungDetails from './src/pages/PendukungDetails';
import TambahRelawan from './src/pages/TambahRelawan';
import TambahPendukung from './src/pages/TambahPendukung';

import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';

AppRegistry.registerComponent(appName, () => TambahPendukung);
