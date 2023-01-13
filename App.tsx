import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './src/navigation/Main';

const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigator />
    </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
