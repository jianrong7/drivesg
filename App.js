import React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { StatusBar } from 'expo-status-bar';
import { LogBox } from 'react-native';

import Main from './src/components/Main';

LogBox.ignoreLogs(['Setting a timer']);

const App = () => {
  let [fontsLoaded] = useFonts({ Lato_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <SafeAreaProvider>
      <Main />
      <StatusBar style="light" backgroundColor="#282d54"/>
    </SafeAreaProvider> 
  );
};

export default App;