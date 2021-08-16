import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';

import theme from '../../theme';
import wave from '../../assets/emojis/wave.jpg';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: theme.colors.textPrimary,
    fontFamily: 'Lato_400Regular',
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
});

export default function Header() {
  let [fontsLoaded] = useFonts({ Lato_400Regular });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <View style={styles.header}>
        <Text style={styles.text}>DriveSG </Text>
        <Image
        source={wave}
        fadeDuration={0}
        style={{ width: 25, height: 25 }}
        />
        <StatusBar style="auto" />
    </View>
  );
}