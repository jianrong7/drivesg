import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.textPrimary,
    padding: 10,
    backgroundColor: theme.colors.tertiary,
    margin: 15,
    borderRadius: 15
  },
  text: {
    color: theme.colors.textPrimary,
    marginBottom: 10
  },
  header: {
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  },
})

export default function ResultHeader({ name, scoreObj }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.header]}>{name}</Text>
      <ProgressCircle 
      size={100} 
      borderWidth={2} 
      strokeCap={'round'} 
      thickness={8} 
      color={scoreObj.status === 'Passed' ? theme.colors.correct : theme.colors.wrong} 
      progress={scoreObj.percentage/100} 
      showsText 
      formatText={() => `${scoreObj.score}/50`} />
    </View>
  )
}