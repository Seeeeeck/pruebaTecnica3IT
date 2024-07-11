/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/theme/theme';
import React from 'react';
import MainStack from './src/navigation/stacks/MainStack';
import Toast from 'react-native-toast-message';

import { check, PERMISSIONS, request } from 'react-native-permissions';


export default function Main() {
  request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {});
  check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then(result => {});
  request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then(result => {});
  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATIO).then(result => {});
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainStack />
        <Toast />
      </NavigationContainer>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
