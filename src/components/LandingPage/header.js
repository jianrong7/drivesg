import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import theme from '../../theme';
import wave from '../../assets/emojis/wave.jpg';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
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