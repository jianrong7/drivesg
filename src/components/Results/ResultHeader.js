import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.textPrimary,
    padding: 10
  },
  text: {
    color: theme.colors.textPrimary
  },
  green: {
    color: theme.colors.correct
  },
  red: {
    color: theme.colors.wrong
  },
  header: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  status: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
})

export default function ResultHeader({ name, scoreObj }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>{name}</Text>
      <Text style={[styles.text, styles.subheading]}>{scoreObj.score}/50 ({scoreObj.percentage}%)</Text>
      <Text style={[
        scoreObj.status === 'Passed' ?
        styles.green :
        styles.red,
        styles.status
      ]}>{scoreObj.status}</Text>
    </View>
  )
}