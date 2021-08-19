import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import theme from '../../theme';
import OptionButton from './OptionButton';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    width: screen.width,
    padding: 20,
  },
  questionHeader: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.heading,
    flexGrow: 2,
    fontWeight: theme.fontWeights.bold
  },
  question: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    flexGrow: 2,
    textAlign: 'center',
  },
  logo: {
    minHeight: 200,
    minWidth: 300,
    margin: 15,
    flexGrow: 2
  }
});

export default function TestQuestion({ data, index }) {
  return (
    <View style={styles.item}>
      <Text style={styles.questionHeader}>Question {index + 1} / 50</Text>
      <Text style={styles.question}>{data.question}</Text>
      {data.image ? 
      <Image style={styles.logo} source={{ uri: data.image }} /> 
      : null}
      <View style={styles.options}>
        {data.options.map((option, i) => {
          return <OptionButton key={index + i} text={option.option} />
        })}
      </View>
    </View>
  );
}