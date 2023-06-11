/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!( Khi app tắt quit app)', remoteMessage);
});
AppRegistry.registerComponent(appName, () => App);
