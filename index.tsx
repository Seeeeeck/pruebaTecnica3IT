/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import theme from './src/theme/theme';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import MainStack from './src/navigation/stacks/MainStack';

const Drawer = createDrawerNavigator();

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainStack />
       
      </NavigationContainer>
    </PaperProvider>
  );
}
AppRegistry.registerComponent(appName, () => Main);
