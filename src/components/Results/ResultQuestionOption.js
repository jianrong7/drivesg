import React from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native';

import theme from '../../theme';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
    height: 80,
    width: screen.width - 60, 
    justifyContent: 'center',
    elevation: 10,
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.semiBold,
    textAlign: 'center'
  }
});

export default function ResultQuestionOption({ text, bgColor }) {
  return (
    <View style={[styles.button, bgColor]} >
      <Text style={styles.font}>{text}</Text>
    </View>
  )
}
