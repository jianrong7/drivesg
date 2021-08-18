import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import theme from '../../theme';

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
    elevation: 10,
    backgroundColor: theme.colors.secondary
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body
  }
});

export default function OptionButton({ text }) {
  return (
    <View style={styles.button}>
      <Text style={styles.font}>{text}</Text>
    </View>
  )
}
