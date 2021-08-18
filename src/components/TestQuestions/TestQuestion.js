import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import theme from '../../theme';
import OptionButton from './OptionButton';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  questionHeader: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.heading
  },
  item: {
    width: screen.width,
    padding: 15,
  },
  font: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading
  }
});

export default function TestQuestion({ data, index }) {
  return (
    <View style={styles.item}>
      <Text style={styles.questionHeader}>Question {index + 1} / 50</Text>
      <Text style={styles.font}>{data.question}</Text>
      {data.options.map(option => {
        return <OptionButton key={option.option} text={option.option} />
      })}
    </View>
  );
}