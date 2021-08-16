import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image } from 'react-native';
import btt1 from '../assets/output.json';
import theme from '../theme';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import wave from '../assets/emojis/wave.jpg';
import LandingPage from './LandingPage';

export default function Main() {
  let [fontsLoaded] = useFonts({ Lato_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.container}>
      <LandingPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});