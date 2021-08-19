import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import theme from '../../theme';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    marginBottom: 15,
    height: 80,
    width: screen.width - 35,
    justifyContent: 'center',
    elevation: 10,
    backgroundColor: theme.colors.secondary,
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    textAlign: 'center'
  }
});

export default function OptionButton({ text }) {
  return (
    <View style={styles.button}>
      <Text style={styles.font}>{text}</Text>
    </View>
  )
}
