import React from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import { NativeRouter } from 'react-router-native';

import Main from './src/components/Main';

const App = () => {
  let [fontsLoaded] = useFonts({ Lato_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <NativeRouter>
      <SafeAreaProvider>
        <Main />
      </SafeAreaProvider>
    </NativeRouter>
  );
};

export default App;